const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to User model
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["info", "warning", "error", "success", "order", "promotion"],
      default: "info",
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order", // Reference to Order model (if applicable)
    },
    images: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Upload", // Reference to Upload schema
    }],
    additionalData: {
      type: Object, // Flexible field for extra metadata
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
