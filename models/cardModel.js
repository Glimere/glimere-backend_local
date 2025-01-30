const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cards: [
    {
      cardNumber: {
        type: String,
        required: true,
      },
      expiryDate: { type: String, required: true },
      cvv: { type: String, required: true },
      cardHolderName: { type: String, required: true }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Card', cardSchema);
