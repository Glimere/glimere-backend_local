const Notification = require("../models/notificationModel");

// Create a new notification
const createNotification = async (req, res) => {
  const { user, title, message, type } = req.body;

  try {
    const notification = new Notification({ user, title, message, type });
    const savedNotification = await notification.save();
    res.status(201).json({
      status: "success",
      data: savedNotification,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to create notification",
      error: error.message,
    });
  }
};

// Get all notifications for a specific user
const getUserNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await Notification.find({ user: userId })
      .sort({ createdAt: -1 })
      .exec();
    res.status(200).json({
      status: "success",
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve notifications",
      error: error.message,
    });
  }
};

// Mark a notification as read
const markAsRead = async (req, res) => {
  const { id } = req.params;

  try {
    const notification = await Notification.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({
        status: "error",
        message: "Notification not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: notification,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to mark notification as read",
      error: error.message,
    });
  }
};

// Delete a notification
const deleteNotification = async (req, res) => {
  const { id } = req.params;

  try {
    const notification = await Notification.findByIdAndDelete(id);

    if (!notification) {
      return res.status(404).json({
        status: "error",
        message: "Notification not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Notification deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to delete notification",
      error: error.message,
    });
  }
};

module.exports = {
  createNotification,
  getUserNotifications,
  markAsRead,
  deleteNotification,
};
