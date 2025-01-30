const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  addresses: [
    {
      location_name: { type: String, required: false },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: false },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      phoneNumber: { type: String, required: true }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Shipping', shippingSchema);
