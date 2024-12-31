const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  apparel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Apparel',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

const cartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true // Ensure one cart per user
  },
  items: [cartItemSchema],
  total_price: {
    type: Number,
    default: 0
  },
  total_items: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
