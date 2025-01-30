const Notification = require("../models/notificationModel");
const Upload = require("../models/uploadModel");

// Create a new notification
const createNotification = async (req, res) => {
  const { title, message, type, orderId, images, additionalData } = req.body;

  // Validate required fields
  if (!title || !message) {
    return res.status(400).json({
      status: "error",
      message: "Title and message are required",
    });
  }

  const validTypes = ["info", "warning", "error", "success", "order", "promotion"];
  const notificationType = validTypes.includes(type) ? type : "info";
  const user = req.user._id;

  try {
    // Validate all image IDs
    if (images && images.length > 0) {
      const invalidImages = await Promise.all(
        images.map(async (id) => {
          const imageExists = await Upload.findById(id);
          return imageExists ? null : id;
        })
      );

      const invalidIds = invalidImages.filter((id) => id !== null);

      if (invalidIds.length > 0) {
        return res.status(400).json(`Invalid image IDs provided: ${invalidIds.join(", ")}`);
      }
    }

    const notification = new Notification({
      user,
      title,
      message,
      type: notificationType,
      orderId: type === "order" ? orderId : undefined,
      images,
      additionalData,
    });

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


const getUserNotifications = async (req, res) => {
  const userId = req.user._id;

  try {
    const notifications = await Notification.find({ user: userId })
      .populate("images") // Populate images array with filename and URL
      .sort({ createdAt: -1 })
      .exec();

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json(error.message);
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
