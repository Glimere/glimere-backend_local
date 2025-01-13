const express = require('express');
const router = express.Router();
const {
  createShippingOption,
  getShippingOptions,
  getShippingOptionById,
  updateShippingOption,
  deleteShippingOption,
  addCourierToOption,
  updateCourierInOption,
  deleteCourierFromOption,
} = require('../controllers/shippingOptionController');
const authMiddleware = require('../middlewares/authMiddleware');


// Shipping Options CRUD
router.post('/', authMiddleware, createShippingOption);
router.get('/', authMiddleware, getShippingOptions);
router.get('/:id', authMiddleware, getShippingOptionById);
router.put('/:id', authMiddleware, updateShippingOption);
router.delete('/:id', authMiddleware, deleteShippingOption);

// Couriers CRUD within a shipping option
router.post('/:id/couriers', authMiddleware, addCourierToOption);
router.put('/:id/couriers/:courierId', authMiddleware, updateCourierInOption);
router.delete('/:id/couriers/:courierId', authMiddleware, deleteCourierFromOption);

module.exports = router;
