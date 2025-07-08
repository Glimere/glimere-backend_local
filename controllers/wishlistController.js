const Wishlist = require("../models/wishlistModel");
const Apparel = require("../models/apparelModel");

// Add an apparel to the wishlist
const addToWishlist = async (req, res) => {
  const { apparelId } = req.body;
  const userId = req.user._id;
  try {
    const apparel = await Apparel.findById(apparelId);
    if (!apparel) {
      return res.status(404).json({
        status: "error",
        message: "Apparel not found",
        data: {},
      });
    }

    let wishlist = await Wishlist.findOne({ userId }).populate("apparels");
    if (!wishlist) {
      wishlist = new Wishlist({
        userId,
        apparels: [apparelId],
        createdAt: new Date(),
      });
    } else {
      if (wishlist.apparels.some((item) => item._id.toString() === apparelId)) {
        return res.status(400).json({
          status: "error",
          message: "Apparel is already in the wishlist",
          data: wishlist,
        });
      }
      wishlist.apparels.push(apparelId);
    }

    await wishlist.save();
    await wishlist.populate("apparels");

    res.status(201).json({
      status: "success",
      message: "Apparel added to wishlist successfully",
      data: wishlist,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message || "Internal server error",
      data: {},
    });
  }
};

// Remove an apparel from the wishlist
const removeFromWishlist = async (req, res) => {
  const apparelId = req.params.apparelId;
  const userId = req.user._id;
  try {
    const wishlist = await Wishlist.findOne({ userId }).populate("apparels");
    if (!wishlist) {
      return res.status(404).json({
        status: "error",
        message: "Wishlist not found",
        data: {},
      });
    }

    const index = wishlist.apparels.findIndex(
      (item) => item._id.toString() === apparelId
    );
    if (index === -1) {
      return res.status(400).json({
        status: "error",
        message: "Apparel is not in the wishlist",
        data: wishlist,
      });
    }

    wishlist.apparels.splice(index, 1);
    await wishlist.save();
    await wishlist.populate("apparels");

    res.status(200).json({
      status: "success",
      message: "Apparel removed from wishlist successfully",
      data: wishlist,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message || "Internal server error",
      data: {},
    });
  }
};

// Get wishlist for a user
const getUserWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      userId: req.params.userId,
    }).populate("apparels");
    if (!wishlist) {
      return res.status(404).json({
        status: "error",
        message: "Wishlist not found",
        data: {},
      });
    }

    res.status(200).json({
      status: "success",
      message: "Wishlist retrieved successfully",
      data: wishlist,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message || "Internal server error",
      data: {},
    });
  }
};

// Get users who have an apparel in their wishlist
const getApparelWishlistUsers = async (req, res) => {
  try {
    const users = await Wishlist.find({
      apparels: req.params.apparelId,
    }).populate("userId");
    res.status(200).json({
      status: "success",
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message || "Internal server error",
      data: [],
    });
  }
};

// Get logged-in user's wishlist
const getLoggedInUserWishlist = async (req, res) => {
  try {
    const userId = req.user._id;
    const wishlist = await Wishlist.findOne({ userId }).populate("apparels");
    if (!wishlist) {
      return res.status(404).json({
        status: "error",
        message: "Wishlist not found",
        data: {},
      });
    }

    res.status(200).json({
      status: "success",
      message: "Wishlist retrieved successfully",
      data: wishlist,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message || "Internal server error",
      data: {},
    });
  }
};

module.exports = {
  addToWishlist,
  removeFromWishlist,
  getUserWishlist,
  getApparelWishlistUsers,
  getLoggedInUserWishlist,
};
