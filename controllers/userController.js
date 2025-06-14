const User = require("../models/userModel");
const mongoose = require("mongoose");


const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "No such user" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

// Get a single user
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  try {
    // Check if the user is a Super Admin
    if (!req.isSuperAdmin) {
      return res
        .status(403)
        .json({ error: "Access denied. Insufficient permissions." });
    }
    // Delete the user from the User collection
    const user = await User.findOneAndDelete({ _id: id });
    if (!user) {
      return res.status(404).json({ error: "No such user" });
    }

    // Delete the corresponding auth details from the Auth collection
    const auth = await User.findOneAndDelete({ _id: id });
    if (!auth) {
      return res
        .status(404)
        .json({ error: "No corresponding auth details found" });
    }

    res
      .status(200)
      .json({
        message: "User and authentication details deleted successfully",
        user,
        auth,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json({ message: "User updated successfully", user });
};

module.exports = {
  getCurrentUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
