const Review = require("../models/reviewModel");
const Apparel = require("../models/apparelModel");
const mongoose = require("mongoose");

// Get all reviews for an apparel
const getReviews = async (req, res) => {
  const { apparelId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(apparelId)) {
    return res.status(404).json({ error: "Invalid apparel ID" });
  }

  try {
    const reviews = await Review.find({ apparel: apparelId }).populate("user", "username");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new review
const createReview = async (req, res) => {
  const { apparelId } = req.params;
  const { rating, comment, user } = req.body;

  if (!mongoose.Types.ObjectId.isValid(apparelId)) {
    return res.status(404).json({ error: "Invalid apparel ID" });
  }

  try {
    const review = await Review.create({ apparel: apparelId, rating, comment, user });

    // Update the apparel's average rating and total reviews
    const apparel = await Apparel.findById(apparelId);
    const reviews = await Review.find({ apparel: apparelId });

    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews;

    apparel.total_reviews = totalReviews;
    apparel.average_rating = averageRating;

    await apparel.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a review
const updateReview = async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid review ID" });
  }

  try {
    const review = await Review.findOneAndUpdate({ _id: id }, { rating, comment }, { new: true });

    if (!review) {
      return res.status(404).json({ error: "No such review" });
    }

    // Update the apparel's average rating and total reviews
    const apparelId = review.apparel;
    const apparel = await Apparel.findById(apparelId);
    const reviews = await Review.find({ apparel: apparelId });

    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews;

    apparel.total_reviews = totalReviews;
    apparel.average_rating = averageRating;

    await apparel.save();

    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a review
const deleteReview = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid review ID" });
  }

  try {
    const review = await Review.findOneAndDelete({ _id: id });

    if (!review) {
      return res.status(404).json({ error: "No such review" });
    }

    // Update the apparel's average rating and total reviews
    const apparelId = review.apparel;
    const apparel = await Apparel.findById(apparelId);
    const reviews = await Review.find({ apparel: apparelId });

    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews;

    apparel.total_reviews = totalReviews;
    apparel.average_rating = averageRating;

    await apparel.save();

    res.status(200).json({ message: "Review deleted successfully", review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getReviews,
  createReview,
  updateReview,
  deleteReview
};
