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

// Get a shipping fee by ID
router.get("/:id", getShippingFeeById);

// Get shipping fee by query
router.get("/query", getShippingFeeByQuery); // Add this route

// Update a shipping fee
router.put("/:id", updateShippingFee);

// Delete a shipping fee
router.delete("/:id", deleteShippingFee);

router.delete("/:id/cities", addMultipleCities);

module.exports = router;
