const mongoose = require("mongoose");

const ShippingOptionSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Standard Shipping", "Express Shipping"
  couriers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Courier" }],
  description: { type: String }, // Optional: Provide a brief description of the shipping option
});

const ShippingOption = mongoose.model("ShippingOption", ShippingOptionSchema);

module.exports = ShippingOption;
