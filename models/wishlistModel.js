// models/Wishlist.js
const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  apparels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Apparel",
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
