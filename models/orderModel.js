// models/orderModel.js
const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  apparel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Apparel',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  selected_sizes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Size'
  }],
  selected_materials: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Material'
  }],
  selected_colors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Color'
  }],
  price: {
    type: Number,
    required: true
  }
}, { _id: false });

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [orderItemSchema],
  total_price: {
    type: Number,
    required: true
  },
  total_items: {
    type: Number,
    required: true
  },
  shipping_address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shipping',  // Reference to the Shipping model
    required: true
  },
  order_status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  payment_status: {
    type: String,
    enum: ['unpaid', 'paid'],
    default: 'unpaid'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
