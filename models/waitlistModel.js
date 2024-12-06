const mongoose = require('mongoose');

const WaitlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  purpose: {
    type: String,
    required: true,
    trim: true,
  },
  beta_testing: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true
});

// Create the model
const Waitlist = mongoose.model('Waitlist', WaitlistSchema);

module.exports = Waitlist;
