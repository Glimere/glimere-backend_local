const Card = require('../models/cardModel');

// Add Card
const addCard = async (req, res) => {
  const { cardNumber, expiryDate, cvv, cardHolderName } = req.body;

  try {
    let card = await Card.findOne({ user: req.user._id });

    if (!card) {
      card = new Card({ user: req.user._id, cards: [] });
    }

    card.cards.push({ cardNumber, expiryDate, cvv, cardHolderName });
    await card.save();

    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Cards
const getCards = async (req, res) => {
  try {
    const card = await Card.findOne({ user: req.user._id });

    if (!card) {
      return res.status(404).json({ error: 'No cards found' });
    }

    res.status(200).json(card.cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Card
const updateCard = async (req, res) => {
  const { cardId } = req.params;
  const { cardNumber, expiryDate, cvv, cardHolderName } = req.body;

  try {
    const card = await Card.findOne({ user: req.user._id });

    if (!card) {
      return res.status(404).json({ error: 'No cards found' });
    }

    const existingCard = card.cards.id(cardId);

    if (!existingCard) {
      return res.status(404).json({ error: 'Card not found' });
    }

    // Update fields
    existingCard.cardNumber = cardNumber || existingCard.cardNumber;
    existingCard.expiryDate = expiryDate || existingCard.expiryDate;
    existingCard.cvv = cvv || existingCard.cvv;
    existingCard.cardHolderName = cardHolderName || existingCard.cardHolderName;

    await card.save();
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove Card
const removeCard = async (req, res) => {
  const { cardId } = req.params;

  try {
    const card = await Card.findOne({ user: req.user._id });

    if (!card) {
      return res.status(404).json({ error: 'No cards found' });
    }

    const existingCard = card.cards.id(cardId);

    if (!existingCard) {
      return res.status(404).json({ error: 'Card not found' });
    }

    existingCard.remove();
    await card.save();

    res.status(200).json({ message: 'Card removed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addCard, getCards, updateCard, removeCard };
