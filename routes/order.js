// routes/orderRoutes.js
const express = require('express');
const {
  createOrder,
  updateOrderStatus,
  deleteOrder,
  getOrder,
  getOrdersByUser
} = require('../controllers/orderController');

const router = express.Router();

// Create an order
router.post('/', createOrder);

// Get a single order
router.get('/:orderId', getOrder);

// Get all orders for the authenticated user
router.get('/', getOrdersByUser);

// Update an order status (or payment status)
router.patch('/:orderId', updateOrderStatus);

// Delete an order
router.delete('/:orderId', deleteOrder);

module.exports = router;
