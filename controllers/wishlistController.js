// controllers/wishlistController.js
const Wishlist = require("../models/wishlistModel");
const Apparel = require("../models/apparelModel");

// Add an apparel to the wishlist
const addToWishlist = async (req, res) => {
  const { apparelId } = req.body;
  const userId = req.user._id;
  try {
    const apparel = await Apparel.findById(apparelId);
    if (!apparel) return res.status(404).send("Apparel not found");

    let wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      wishlist = new Wishlist({ userId, apparels: [apparelId] });
    } else {
      if (wishlist.apparels.includes(apparelId)) {
        return res.status(400).send("Apparel is already in the wishlist");
      }
      wishlist.apparels.push(apparelId);
    }

    await wishlist.save();
    res.status(201).json(wishlist);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const removeFromWishlist = async (req, res) => {
  const apparelId = req.params.apparelId;
  const userId = req.user._id;
  try {
    const wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) return res.status(404).send("Wishlist not found");

    // Check if the apparel exists in the wishlist
    const index = wishlist.apparels.indexOf(apparelId);
    if (index === -1) {
      return res.status(400).send("Apparel is not in the wishlist");
    }

    // Remove the apparel from the wishlist
    wishlist.apparels.splice(index, 1);

    // Save the updated wishlist
    await wishlist.save();

    res.status(200).send("Apparel removed from wishlist successfully");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// Get wishlist for a user
const getUserWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      userId: req.params.userId,
    }).populate("apparels");
    if (!wishlist) return res.status(404).send("Wishlist not found");

    res.status(200).json(wishlist);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get users who have an apparel in their wishlist
const getApparelWishlistUsers = async (req, res) => {
  try {
    const users = await Wishlist.find({
      apparels: req.params.apparelId,
    }).populate("userId");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getLoggedInUserWishlist = async (req, res) => {
  try {
    const userId = req.user._id;
    const wishlist = await Wishlist.findOne({ userId }).populate("apparels");
    if (!wishlist) return res.status(404).send("Wishlist not found");

    res.status(200).json(wishlist);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  addToWishlist,
  removeFromWishlist,
  getUserWishlist,
  getApparelWishlistUsers,
  getLoggedInUserWishlist,
};
