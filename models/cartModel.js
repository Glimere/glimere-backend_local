const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  apparel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Apparel",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
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
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    items: [cartItemSchema],
    total_price: {
      type: Number,
      default: 0,
    },
    total_items: {
      type: Number,
      default: 0,
    },
    version: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
