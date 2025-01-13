const express = require('express');
const router = express.Router();
const {
  createCourier,
  getCouriers,
  getCourierById,
  updateCourier,
  deleteCourier
} = require('../controllers/courierController');

// Create a new courier
router.post('/', createCourier);

// Get all couriers
router.get('/', getCouriers);

// Get a single courier by ID
router.get('/:id', getCourierById);

// Update a courier
router.put('/:id', updateCourier);

// Delete a courier
router.delete('/:id', deleteCourier);

module.exports = router;
