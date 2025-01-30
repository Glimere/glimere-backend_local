// routes/wishlistRoutes.js
const express = require("express");
const router = express.Router();
const {
  addToWishlist,
  removeFromWishlist,
  getUserWishlist,
  getApparelWishlistUsers,
  getLoggedInUserWishlist,
} = require("../controllers/wishlistController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/add", authMiddleware, addToWishlist); // Add apparel to wishlist
router.delete("/remove/:apparelId", authMiddleware, removeFromWishlist); // Remove apparel from wishlist
router.get("/user/:userId", authMiddleware, getUserWishlist); // Get user wishlist
router.get("/apparel/:apparelId", authMiddleware, getApparelWishlistUsers); // Get users who have a specific apparel in their wishlist
router.get("/me", authMiddleware, getLoggedInUserWishlist);

module.exports = router;
