const express = require("express");
const router = express.Router();
const {
  createShippingFee,
  getShippingFees,
  getShippingFeeById,
  updateShippingFee,
  deleteShippingFee,
  getShippingFeeByQuery,
  addMultipleCities,
} = require("../controllers/shippingFeeController");

// Create a new shipping fee
router.post("/", createShippingFee);

// Get all shipping fees
router.get("/", getShippingFees);

// Get shipping fee by query
router.get("/query", getShippingFeeByQuery); // This route must come before `/:id`

// Get a shipping fee by ID
router.get("/:id", getShippingFeeById);

// Update a shipping fee
router.put("/:id", updateShippingFee);

// Delete a shipping fee
router.delete("/:id", deleteShippingFee);

// Add multiple cities to a shipping fee
router.post("/:id/cities", addMultipleCities);

module.exports = router;
