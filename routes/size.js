const express = require('express');

const {
    getAllSize,
    getOneSize,
    updateSize,
    updateSizeBySizingType,
    updateSizeByShortNameAndSizingType,
} = require('../controllers/sizeController')

const router = express.Router();

// Get all sizes by type (male/female)
router.get('/', getAllSize);

// Get one size by type and id
router.get('/:type/:id', getOneSize);

// Update size by type and id
router.put('/:type/:id', updateSize);

// Update sizes by sizing type and gender
router.put('/sizingType/:sizingType/:gender', updateSizeBySizingType);

// Update sizes by short name, sizing type, and gender
router.put('/shortName/:shortName/sizingType/:sizingType/:gender', updateSizeByShortNameAndSizingType);

module.exports = router