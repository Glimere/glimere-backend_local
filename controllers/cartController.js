const Cart = require('../models/cartModel');
const Apparel = require('../models/apparelModel');

// Get Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id })
      .populate({
        path: 'items.apparel',
        populate: {
          path: 'apparel_images' // Populate apparel_images within apparel
        }
      })
      .populate('items.selected_sizes')
      .populate('items.selected_materials')
      .populate('items.selected_colors');

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Add Item to Cart
const addItemToCart = async (req, res) => {
  const { apparelId, quantity, selected_sizes, selected_materials, selected_colors } = req.body;

  try {
    const apparel = await Apparel.findById(apparelId);
    if (!apparel) {
      return res.status(404).json({ error: 'Apparel not found' });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.apparel.equals(apparelId));

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({
        apparel: apparelId,
        quantity,
        selected_sizes,
        selected_materials,
        selected_colors
      });
    }

    cart.total_price += apparel.apparel_price * quantity;
    cart.total_items += quantity;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeItemFromCart = async (req, res) => {
  const { apparelId } = req.params;

  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.apparel');

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.apparel._id.equals(apparelId));

    if (itemIndex > -1) {
      const item = cart.items[itemIndex];
      const itemPrice = item.apparel.apparel_price || 0;
      cart.total_price -= item.quantity * itemPrice;
      cart.total_items -= item.quantity;

      cart.items.splice(itemIndex, 1);

      cart.total_price = Math.max(0, cart.total_price);
      cart.total_items = Math.max(0, cart.total_items);

      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: 'Item not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Item Quantity
const updateItemQuantity = async (req, res) => {
  const { apparelId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.apparel');

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.apparel._id.equals(apparelId));

    if (itemIndex > -1) {
      const item = cart.items[itemIndex];
      const difference = quantity - item.quantity;
      const itemPrice = item.apparel.apparel_price || 0;

      item.quantity = quantity;

      cart.total_price += difference * itemPrice;
      cart.total_items += difference;

      cart.total_price = Math.max(0, cart.total_price);
      cart.total_items = Math.max(0, cart.total_items);

      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: 'Item not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeItemsFromCart = async (req, res) => {
  const { apparelIds } = req.body;

  try {
    // Validate apparelIds
    if (!Array.isArray(apparelIds) || apparelIds.length === 0) {
      return res.status(400).json({ error: 'apparelIds must be a non-empty array.' });
    }

    let cart = await Cart.findOne({ user: req.user._id }).populate('items.apparel');

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    // Ensure all IDs are strings for comparison
    const apparelIdsString = apparelIds.map(id => id.toString());

    // Filter out items to be removed and calculate reductions
    const updatedItems = cart.items.filter(item => !apparelIdsString.includes(item.apparel._id.toString()));
    const removedItems = cart.items.filter(item => apparelIdsString.includes(item.apparel._id.toString()));

    const totalPriceReduction = removedItems.reduce(
      (acc, item) => acc + (item.quantity * (item.apparel.apparel_price || 0)),
      0
    );
    const totalItemsReduction = removedItems.reduce((acc, item) => acc + item.quantity, 0);

    // Update cart
    cart.items = updatedItems;
    cart.total_price = Math.max(0, cart.total_price - totalPriceReduction);
    cart.total_items = Math.max(0, cart.total_items - totalItemsReduction);

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const syncCart = async (req, res) => {
  try {
    const { cart: clientCart } = req.body;
    let serverCart = await Cart.findOne({ user: req.user._id }).populate('items.apparel');

    if (!serverCart) {
      // If no existing cart, create a new one from client data
      serverCart = new Cart({
        user: req.user._id,
        items: clientCart.items,
        total_price: clientCart.total_price,
        total_items: clientCart.total_items
      });
    } else {
      // Reconcile client cart with server cart
      const reconciledItems = [...serverCart.items];
      
      for (const clientItem of clientCart.items) {
        const itemIndex = reconciledItems.findIndex(
          (item) => item.apparel._id.toString() === clientItem.apparel._id.toString()
        );

        if (itemIndex > -1) {
          // If item exists in both carts, take the higher quantity
          reconciledItems[itemIndex].quantity = Math.max(
            reconciledItems[itemIndex].quantity,
            clientItem.quantity
          );
        } else {
          // If item exists in client cart but not server cart, add it
          reconciledItems.push(clientItem);
        }
      }

      // Recalculate total items and price
      const totalItems = reconciledItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = reconciledItems.reduce(
        (sum, item) => sum + item.quantity * item.apparel.apparel_price,
        0
      );

      serverCart.items = reconciledItems;
      serverCart.total_items = totalItems;
      serverCart.total_price = totalPrice;
    }

    await serverCart.save();
    res.status(200).json(serverCart);
  } catch (error) {
    console.error('Cart synchronization failed:', error);
    res.status(500).json({ error: 'Failed to synchronize cart' });
  }
};


module.exports = {
  syncCart,
  getCart,
  addItemToCart,
  removeItemFromCart,
  removeItemsFromCart,
  updateItemQuantity
};
