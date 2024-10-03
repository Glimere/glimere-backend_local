const express = require('express');

const {
    getMainCategories,
    getMainCategory,
    createMainCategory,
    deleteMainCategory,
    updateMainCategory
} = require('../controllers/mainCategoryController')

const router = express.Router();

//GET all Apparels
router.get('/', getMainCategories)

//GET a single Apparel
router.get('/:id', getMainCategory)

//POST a new Apparel
router.post('/', createMainCategory)

//DELETE a new Apparel
router.delete('/:id', deleteMainCategory)

//UPDATE a new Apparel
router.patch('/:id', updateMainCategory)

module.exports = router