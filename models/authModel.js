const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_number: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "seller", "super_admin"],
      default: "user",
    },
    address: {
      street: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: false,
      },
      state: {
        type: String,
        required: false,
      },
      postal_code: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: true }
);

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
