const express = require('express');
const { addCard, getCards, updateCard, removeCard } = require('../controllers/cardController');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', auth, addCard);
router.get('/', auth, getCards);
router.put('/:cardId', auth, updateCard); // Update card
router.delete('/:cardId', auth, removeCard); // Remove card

module.exports = router;
