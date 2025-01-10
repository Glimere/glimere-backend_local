// controllers/orderController.js
const Order = require('../models/orderModel');
const Apparel = require('../models/apparelModel');

// Create an Order
const createOrder = async (req, res) => {
    const { items, shipping_address, total_price, total_items } = req.body;
  
    try {
      // Create the shipping address first
      const shipping = new Shipping(shipping_address);
      await shipping.save();
  
      // Create the order items
      const orderItems = [];
      for (let i = 0; i < items.length; i++) {
        const apparel = await Apparel.findById(items[i].apparel);
        if (!apparel) {
          return res.status(404).json({ error: `Apparel item not found with ID ${items[i].apparel}` });
        }
  
        orderItems.push({
          apparel: items[i].apparel,
          quantity: items[i].quantity,
          selected_sizes: items[i].selected_sizes,
          selected_materials: items[i].selected_materials,
          selected_colors: items[i].selected_colors,
          price: apparel.apparel_price * items[i].quantity
        });
      }
  
      // Create the order
      const order = new Order({
        user: req.user._id,
        items: orderItems,
        shipping_address: shipping._id,  // Reference the created shipping address
        total_price,
        total_items,
        order_status: 'pending',
        payment_status: 'unpaid'
      });
  
      await order.save();
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Update Order Status
const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { order_status, payment_status } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.order_status = order_status || order.order_status;
    order.payment_status = payment_status || order.payment_status;

    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Order
const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    await order.remove();
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Order Details
const getOrder = async (req, res) => {
    const { orderId } = req.params;
  
    try {
      const order = await Order.findById(orderId)
        .populate('items.apparel')
        .populate('items.selected_sizes')
        .populate('items.selected_materials')
        .populate('items.selected_colors')
        .populate('shipping_address')  // Populate the shipping address
        .populate('user');
  
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get Orders by User
  const getOrdersByUser = async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user._id })
        .populate('items.apparel')
        .populate('items.selected_sizes')
        .populate('items.selected_materials')
        .populate('items.selected_colors')
        .populate('shipping_address');  // Populate the shipping address
  
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  createOrder,
  updateOrderStatus,
  deleteOrder,
  getOrder,
  getOrdersByUser
};
