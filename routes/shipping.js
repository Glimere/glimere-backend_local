const express = require('express');
const { addShippingAddress, getShippingAddresses, updateShippingAddress, removeShippingAddress } = require('../controllers/shippingController');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', auth, addShippingAddress);
router.get('/', auth, getShippingAddresses);
router.put('/:addressId', auth, updateShippingAddress); // Update address
router.delete('/:addressId', auth, removeShippingAddress); // Remove address

module.exports = router;
