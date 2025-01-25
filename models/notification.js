const express = require("express");
const router = express.Router();
const {
  createNotification,
  getUserNotifications,
  markAsRead,
  deleteNotification,
} = require("../controllers/notificationController");

// Create a new notification
router.post("/", createNotification);

// Get notifications for a specific user
router.get("/user/:userId", getUserNotifications);

// Mark a notification as read
router.patch("/:id/read", markAsRead);

// Delete a notification
router.delete("/:id", deleteNotification);

module.exports = router;
