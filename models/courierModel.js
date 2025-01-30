const mongoose = require("mongoose");

// Location Schema
const LocationSchema = new mongoose.Schema({
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  addressLine: { type: String }, // Optional: Specific address details
  geoCoordinates: {
    latitude: { type: Number }, // Optional: Latitude for geolocation
    longitude: { type: Number }, // Optional: Longitude for geolocation
  },
});

// Courier Schema
const CourierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact_info: {
    email: { type: String, required: false },
    phone: { type: String, required: false },
  },
  approximateDeliveryTime: { type: String, required: true }, // Example: "1-3 business days"
  costRange: {
    min: { type: Number, required: true, min: 0 },
    max: { type: Number, required: true, min: 0 },
  },
  trackingURLTemplate: { type: String }, // Template to generate tracking URLs
  regions: [{ type: String }], // Regions the courier operates in
  location: LocationSchema, // Embed location data for the courier
});

module.exports = mongoose.model("Courier", CourierSchema);
