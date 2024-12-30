const express = require('express');
const {
  getCart,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity
} = require('../controllers/cartController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, getCart);
router.post('/add', auth, addItemToCart);
router.post('/remove', auth, removeItemFromCart);
router.post('/update', auth, updateItemQuantity);

module.exports = router;
