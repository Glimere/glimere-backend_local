const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["user", "admin", "seller", "super_admin"],
      default: "user",
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      default: null,
    },
    style: {
      type: [String],
      default: [],
    },
    occasions: {
      type: [String],
      default: [],
    },
    address: {
      street: String,
      city: String,
      state: String,
      postal_code: String,
      country: String,
      nearest_bus_stop: String,
    },
    profile_image: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
