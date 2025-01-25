const mongoose = require("mongoose");

// Schema for individual order items
const orderItemSchema = new mongoose.Schema(
  {
    apparel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Apparel",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    selected_sizes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Size",
      },
    ],
    selected_materials: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Material",
      },
    ],
    selected_colors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
      },
    ],
  },
  { _id: false }
);

// Main Order Schema
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [orderItemSchema],
  total_price: {
    type: Number,
    required: true,
  },
  total_items: {
    type: Number,
    required: true,
  },
  shipping_address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shipping",
    required: true,
  },
  shipping_option: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShippingOption", // Reference to the ShippingOption model
  },
  selected_courier: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Courier" 
  },
  order_status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  payment_status: {
    type: String,
    enum: ["unpaid", "paid"],
    default: "unpaid",
  },
  delivery_notes: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

orderSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model("Order", orderSchema);
