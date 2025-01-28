const express = require("express");
const router = express.Router();
const {
  createNotification,
  getUserNotifications,
  markAsRead,
  deleteNotification,
} = require("../controllers/notificationController");
const authMiddleware = require("../middlewares/authMiddleware");


// Create a new notification
router.post("/", authMiddleware, createNotification);

// Get notifications for a specific user
router.get("/", authMiddleware, getUserNotifications);

// Mark a notification as read
router.patch("/:id/read", authMiddleware, markAsRead);

// Delete a notification
router.delete("/:id", authMiddleware, deleteNotification);

module.exports = router;
