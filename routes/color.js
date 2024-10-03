const express = require('express');
const { createColor, getColors, getColorById, updateColor, deleteColor } = require('../controllers/colorController');

const router = express.Router();

// Define routes
router.post('/', createColor); // Create a new color
router.get('/', getColors); // Get all colors
router.get('/:id', getColorById); // Get color by ID
router.put('/:id', updateColor); // Update color by ID
router.delete('/:id', deleteColor); // Delete color by ID

module.exports = router;
