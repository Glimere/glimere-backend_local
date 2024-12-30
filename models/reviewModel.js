const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    apparel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Apparel',
      required: true
    }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Review', reviewSchema);