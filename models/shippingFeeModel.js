const mongoose = require("mongoose");

const ShippingFeeSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true, // E.g., "Nigeria", "United States"
  },
  state: {
    type: String, // For local shipping within a country (optional for international)
  },
  city: [
    {
      name: { type: String, required: true }, // City name
      fee: { type: Number, required: true }, // Shipping fee for this city
    },
  ],
  shipping_option: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShippingOption",
    required: true,
  },
  fee: {
    standard: { type: Number, default: 0 }, // Standard base fee
  },
  shipping_type: {
    type: String,
    enum: ["local", "international"],
    required: true,
  },
});

const ShippingFee = mongoose.model("ShippingFee", ShippingFeeSchema);
module.exports = ShippingFee;
