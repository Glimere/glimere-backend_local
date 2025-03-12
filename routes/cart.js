const express = require('express');
const {
  syncCart,
  getCart,
  addItemToCart,
  removeItemFromCart,
  removeItemsFromCart,
  updateItemQuantity
} = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getCart);
router.post('/add', authMiddleware, addItemToCart);
router.post('/sync', authMiddleware, syncCart);
router.post('/remove/:apparelId', authMiddleware, removeItemFromCart);
router.post('/update', authMiddleware, updateItemQuantity);
router.post('/remove-multiple', authMiddleware, removeItemsFromCart);

module.exports = router;
