const Cart = require("../models/cartModel");
const Apparel = require("../models/apparelModel");
const mongoose = require("mongoose");

const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate([
      { path: "items.apparel", populate: { path: "apparel_images" } },
      { path: "items.selected_sizes" },
      { path: "items.selected_materials" },
      { path: "items.selected_colors" },
    ]);

    if (!cart) {
      cart = new Cart({
        user: req.user._id,
        items: [],
        total_price: 0,
        total_items: 0,
        version: 0,
      });
      await cart.save();
    }

    res.status(200).json(cart, "Cart retrieved successfully");
  } catch (error) {
    res.status(500).json({ error: error.message }, "Failed to retrieve cart");
  }
};

const addItemToCart = async (req, res) => {
  const {
    apparelId,
    quantity,
    version,
    selected_sizes,
    selected_materials,
    selected_colors,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(apparelId)) {
    return res.status(400).json({}, "Invalid apparel ID");
  }

  try {
    const apparel = await Apparel.findById(apparelId);
    if (!apparel) {
      return res.status(404).json({}, "Apparel not found");
    }

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = new Cart({
        user: req.user._id,
        items: [],
        total_price: 0,
        total_items: 0,
        version: 0,
      });
    }

    if (version !== undefined && cart.version !== version) {
      await cart.populate([
        { path: "items.apparel", populate: { path: "apparel_images" } },
        { path: "items.selected_sizes" },
        { path: "items.selected_materials" },
        { path: "items.selected_colors" },
      ]);
      return res.status(409).json({ cart }, "Version conflict");
    }

    const itemIndex = cart.items.findIndex((item) =>
      item.apparel.equals(apparelId)
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
      cart.items[itemIndex].lastModified = new Date();
    } else {
      cart.items.push({
        apparel: apparelId,
        quantity,
        selected_sizes: selected_sizes || [],
        selected_materials: selected_materials || [],
        selected_colors: selected_colors || [],
        lastModified: new Date(),
      });
    }

    cart.total_price = cart.items.reduce(
      (sum, item) => sum + item.quantity * (item.apparel?.apparel_price || 0),
      0
    );
    cart.total_items = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cart.version += 1;

    await cart.save();
    await cart.populate([
      { path: "items.apparel", populate: { path: "apparel_images" } },
      { path: "items.selected_sizes" },
      { path: "items.selected_materials" },
      { path: "items.selected_colors" },
    ]);

    res.status(200).json(cart, "Item added to cart successfully");
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message }, "Failed to add item to cart");
  }
};

const syncCart = async (req, res) => {
  try {
    const { cart: clientCart } = req.body;
    let serverCart = await Cart.findOne({ user: req.user._id }).populate(
      "items.apparel"
    );

    if (!serverCart) {
      serverCart = new Cart({
        user: req.user._id,
        items: clientCart.items.map((item) => ({
          apparel: item.apparel._id,
          quantity: item.quantity,
          selected_sizes: item.selected_sizes || [],
          selected_materials: item.selected_materials || [],
          selected_colors: item.selected_colors || [],
          lastModified: new Date(item.lastModified || Date.now()),
        })),
        total_price: clientCart.total_price,
        total_items: clientCart.total_items,
        version: clientCart.version || 0,
      });
    } else {
      if (clientCart.version < serverCart.version) {
        await serverCart.populate([
          { path: "items.apparel", populate: { path: "apparel_images" } },
          { path: "items.selected_sizes" },
          { path: "items.selected_materials" },
          { path: "items.selected_colors" },
        ]);
        return res.status(409).json({ cart: serverCart }, "Version conflict");
      }

      const reconciledItems = [...serverCart.items];

      for (const clientItem of clientCart.items) {
        const itemIndex = reconciledItems.findIndex(
          (item) =>
            item.apparel._id.toString() === clientItem.apparel._id.toString()
        );

        const clientModified = new Date(
          clientItem.lastModified || clientCart.updatedAt
        );
        if (itemIndex > -1) {
          const serverItem = reconciledItems[itemIndex];
          const serverModified = new Date(
            serverItem.lastModified || serverCart.updatedAt
          );
          if (clientModified > serverModified) {
            reconciledItems[itemIndex] = {
              apparel: clientItem.apparel._id,
              quantity: clientItem.quantity,
              selected_sizes: clientItem.selected_sizes || [],
              selected_materials: clientItem.selected_materials || [],
              selected_colors: clientItem.selected_colors || [],
              lastModified: clientModified,
            };
          }
        } else {
          reconciledItems.push({
            apparel: clientItem.apparel._id,
            quantity: clientItem.quantity,
            selected_sizes: clientItem.selected_sizes || [],
            selected_materials: clientItem.selected_materials || [],
            selected_colors: clientItem.selected_colors || [],
            lastModified: clientModified,
          });
        }
      }

      serverCart.items = reconciledItems;
      serverCart.total_items = reconciledItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      serverCart.total_price = reconciledItems.reduce(
        (sum, item) => sum + item.quantity * (item.apparel.apparel_price || 0),
        0
      );
      serverCart.version = clientCart.version + 1;
    }

    await serverCart.save();
    await serverCart.populate([
      { path: "items.apparel", populate: { path: "apparel_images" } },
      { path: "items.selected_sizes" },
      { path: "items.selected_materials" },
      { path: "items.selected_colors" },
    ]);

    res.status(200).json(serverCart, "Cart synchronized successfully");
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message }, "Failed to synchronize cart");
  }
};

const removeItemFromCart = async (req, res) => {
  const { apparelId } = req.params;
  const { version } = req.body;

  if (!mongoose.Types.ObjectId.isValid(apparelId)) {
    return res.status(400).json({}, "Invalid apparel ID");
  }

  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.apparel"
    );
    if (!cart) {
      return res.status(404).json({}, "Cart not found");
    }

    if (version !== undefined && cart.version !== version) {
      await cart.populate([
        { path: "items.apparel", populate: { path: "apparel_images" } },
        { path: "items.selected_sizes" },
        { path: "items.selected_materials" },
        { path: "items.selected_colors" },
      ]);
      return res.status(409).json({ cart }, "Version conflict");
    }

    const itemIndex = cart.items.findIndex((item) =>
      item.apparel._id.equals(apparelId)
    );

    if (itemIndex > -1) {
      const item = cart.items[itemIndex];
      const itemPrice = item.apparel?.apparel_price ?? 0;

      cart.total_price = Math.max(
        0,
        cart.total_price - item.quantity * itemPrice
      );
      cart.total_items = Math.max(0, cart.total_items - item.quantity);
      cart.items.splice(itemIndex, 1);
      cart.version += 1;

      await cart.save();
      await cart.populate([
        { path: "items.apparel", populate: { path: "apparel_images" } },
        { path: "items.selected_sizes" },
        { path: "items.selected_materials" },
        { path: "items.selected_colors" },
      ]);

      return res.status(200).json(cart, "Item removed from cart successfully");
    }

    res.status(404).json({}, "Item not found in cart");
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message }, "Failed to remove item from cart");
  }
};

const updateItemQuantity = async (req, res) => {
  const { apparelId, quantity, version } = req.body;

  if (!mongoose.Types.ObjectId.isValid(apparelId)) {
    return res.status(400).json({}, "Invalid apparel ID");
  }

  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.apparel"
    );
    if (!cart) {
      return res.status(404).json({}, "Cart not found");
    }

    if (version !== undefined && cart.version !== version) {
      await cart.populate([
        { path: "items.apparel", populate: { path: "apparel_images" } },
        { path: "items.selected_sizes" },
        { path: "items.selected_materials" },
        { path: "items.selected_colors" },
      ]);
      return res.status(409).json({ cart }, "Version conflict");
    }

    const itemIndex = cart.items.findIndex((item) =>
      item.apparel._id.equals(apparelId)
    );

    if (itemIndex > -1) {
      const item = cart.items[itemIndex];
      const difference = quantity - item.quantity;
      const itemPrice = item.apparel.apparel_price || 0;

      item.quantity = quantity;
      item.lastModified = new Date();

      cart.total_price += difference * itemPrice;
      cart.total_items += difference;
      cart.total_price = Math.max(0, cart.total_price);
      cart.total_items = Math.max(0, cart.total_items);
      cart.version += 1;

      await cart.save();
      await cart.populate([
        { path: "items.apparel", populate: { path: "apparel_images" } },
        { path: "items.selected_sizes" },
        { path: "items.selected_materials" },
        { path: "items.selected_colors" },
      ]);

      res.status(200).json(cart, "Item quantity updated successfully");
    } else {
      res.status(404).json({}, "Item not found in cart");
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message }, "Failed to update item quantity");
  }
};

const removeItemsFromCart = async (req, res) => {
  const { apparelIds, version } = req.body;

  if (!Array.isArray(apparelIds) || apparelIds.length === 0) {
    return res.status(400).json({}, "apparelIds must be a non-empty array");
  }

  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.apparel"
    );
    if (!cart) {
      return res.status(404).json({}, "Cart not found");
    }

    if (version !== undefined && cart.version !== version) {
      await cart.populate([
        { path: "items.apparel", populate: { path: "apparel_images" } },
        { path: "items.selected_sizes" },
        { path: "items.selected_materials" },
        { path: "items.selected_colors" },
      ]);
      return res.status(409).json({ cart }, "Version conflict");
    }

    const apparelIdsString = apparelIds.map((id) => id.toString());
    const updatedItems = cart.items.filter(
      (item) => !apparelIdsString.includes(item.apparel._id.toString())
    );
    const removedItems = cart.items.filter((item) =>
      apparelIdsString.includes(item.apparel._id.toString())
    );

    const totalPriceReduction = removedItems.reduce(
      (acc, item) => acc + item.quantity * (item.apparel.apparel_price || 0),
      0
    );
    const totalItemsReduction = removedItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    cart.items = updatedItems;
    cart.total_price = Math.max(0, cart.total_price - totalPriceReduction);
    cart.total_items = Math.max(0, cart.total_items - totalItemsReduction);
    cart.version += 1;

    await cart.save();
    await cart.populate([
      { path: "items.apparel", populate: { path: "apparel_images" } },
      { path: "items.selected_sizes" },
      { path: "items.selected_materials" },
      { path: "items.selected_colors" },
    ]);

    res.status(200).json(cart, "Items removed from cart successfully");
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message }, "Failed to remove items from cart");
  }
};

module.exports = {
  getCart,
  addItemToCart,
  syncCart,
  removeItemFromCart,
  updateItemQuantity,
  removeItemsFromCart,
};
