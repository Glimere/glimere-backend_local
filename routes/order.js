// routes/orderRoutes.js
const express = require('express');
const {
  createOrder,
  updateOrderStatus,
  deleteOrder,
  getOrder,
  getOrdersByUser,
  updateOrder
} = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');


const router = express.Router();

// Create an order
router.post('/', authMiddleware, createOrder);

// Get a single order
router.get('/:orderId', authMiddleware, getOrder);

// Get all orders for the authenticated user
router.get('/', authMiddleware, getOrdersByUser);

// Update an order status (or payment status)
router.patch('/:orderId', authMiddleware, updateOrderStatus);

// Delete an order
router.delete('/:orderId', authMiddleware, deleteOrder);

router.post('/:orderId', authMiddleware, updateOrder);

module.exports = router;
