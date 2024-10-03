const SubCategory = require('../models/subCategoryModel');
const mongoose = require('mongoose');

// Get all subcategories
const getSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find({})
            .populate('main_category')
            .sort({ createdAt: -1 });
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single subcategory
const getSubCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such subcategory' });
    }

    try {
        const subCategory = await SubCategory.findById(id)
            .populate('main_category');
        if (!subCategory) {
            return res.status(404).json({ error: 'No such subcategory' });
        }
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create a new subcategory
const createSubCategory = async (req, res) => {
    const { name, main_category } = req.body;

    if (!mongoose.Types.ObjectId.isValid(main_category)) {
        return res.status(400).json({ error: 'Invalid main category ID' });
    }

    try {
        const subCategory = await SubCategory.create({ name, main_category });
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a subcategory
const deleteSubCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such subcategory' });
    }

    try {
        const subCategory = await SubCategory.findOneAndDelete({ _id: id });
        if (!subCategory) {
            return res.status(404).json({ error: 'No such subcategory' });
        }
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a subcategory
const updateSubCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such subcategory' });
    }

    try {
        const subCategory = await SubCategory.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        );
        if (!subCategory) {
            return res.status(404).json({ error: 'No such subcategory' });
        }
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getSubCategories,
    getSubCategory,
    createSubCategory,
    deleteSubCategory,
    updateSubCategory
};
