const Cart = require('../models/cartModel');
const Apparel = require('../models/apparelModel');

// Get Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id })
      .populate('items.apparel');

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
  const { apparelId, quantity } = req.body;

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
      cart.items.push({ apparel: apparelId, quantity });
    }

    cart.total_price += apparel.apparel_price * quantity;
    cart.total_items += quantity;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove Item from Cart
const removeItemFromCart = async (req, res) => {
  const { apparelId } = req.body;

  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.apparel.equals(apparelId));

    if (itemIndex > -1) {
      const item = cart.items[itemIndex];
      cart.total_price -= item.quantity * item.apparel.apparel_price;
      cart.total_items -= item.quantity;

      cart.items.splice(itemIndex, 1);
      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: 'Item not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Item Quantity in Cart
const updateItemQuantity = async (req, res) => {
  const { apparelId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.apparel.equals(apparelId));

    if (itemIndex > -1) {
      const item = cart.items[itemIndex];
      const difference = quantity - item.quantity;
      item.quantity = quantity;

      cart.total_price += difference * item.apparel.apparel_price;
      cart.total_items += difference;

      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: 'Item not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCart,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity
};
