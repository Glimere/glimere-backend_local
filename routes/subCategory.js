const express = require('express');

const {
    getSubCategories,
    getSubCategory,
    createSubCategory,
    deleteSubCategory,
    updateSubCategory
} = require('../controllers/subCategoryController')

const router = express.Router();

//GET all Apparels
router.get('/', getSubCategories)

//GET a single Apparel
router.get('/:id', getSubCategory)

//POST a new Apparel
router.post('/', createSubCategory)

//DELETE a new Apparel
router.delete('/:id', deleteSubCategory)

//UPDATE a new Apparel
router.patch('/:id', updateSubCategory)

module.exports = router