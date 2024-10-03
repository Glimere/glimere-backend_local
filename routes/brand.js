const express = require('express');
const {
    getAllBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand
} = require('../controllers/brandController');

const router = express.Router();

// GET all Brands
router.get('/', getAllBrands);

// GET a single Brand by ID
router.get('/:id', getBrand);

// POST a new Brand
router.post('/', createBrand);

// PATCH a Brand by ID
router.patch('/:id', updateBrand);

// DELETE a Brand by ID
router.delete('/:id', deleteBrand);

module.exports = router;
