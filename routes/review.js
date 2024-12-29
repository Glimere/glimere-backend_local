const express = require("express");
const {
  getReviews,
  createReview,
  updateReview,
  deleteReview
} = require("../controllers/reviewController");

const router = express.Router();

// Get all reviews for an apparel
router.get("/:apparelId", getReviews);

// Create a new review for an apparel
router.post("/:apparelId", createReview);

// Update a review
router.patch("/:id", updateReview);

// Delete a review
router.delete("/:id", deleteReview);

module.exports = router;
