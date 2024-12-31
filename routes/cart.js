const express = require('express');
const {
  getCart,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity
} = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddlewareCart');

const router = express.Router();

router.get('/', authMiddleware, getCart);
router.post('/add', authMiddleware, addItemToCart);
router.post('/remove', authMiddleware, removeItemFromCart);
router.post('/update', authMiddleware, updateItemQuantity);

module.exports = router;
