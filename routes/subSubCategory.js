const express = require('express');

const {
    getSubSubCategories,
    getSubSubCategory,
    createSubSubCategory,
    deleteSubSubCategory,
    updateSubSubCategory
} = require('../controllers/subSubCategoryController')

const router = express.Router();

//GET all Apparels
router.get('/', getSubSubCategories)

//GET a single Apparel
router.get('/:id', getSubSubCategory)

//POST a new Apparel
router.post('/', createSubSubCategory)

//DELETE a new Apparel
router.delete('/:id', deleteSubSubCategory)

//UPDATE a new Apparel
router.patch('/:id', updateSubSubCategory)

module.exports = router