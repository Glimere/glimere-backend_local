const SubSubCategory = require('../models/subSubCategoryModel');
const mongoose = require('mongoose');

// Get all sub-sub categories
const getSubSubCategories = async (req, res) => {
    try {
        const subSubCategories = await SubSubCategory.find({})
            .populate('main_category')
            .populate('sub_category')
            .sort({ createdAt: -1 });
        res.status(200).json(subSubCategories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get a single sub-sub category
const getSubSubCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such sub-sub category' });
    }

    try {
        const subSubCategory = await SubSubCategory.findById(id)
            .populate('main_category')
            .populate('sub_category');
        if (!subSubCategory) {
            return res.status(404).json({ error: 'No such sub-sub category' });
        }
        res.status(200).json(subSubCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Create a new sub-sub category
const createSubSubCategory = async (req, res) => {
    const { name, main_category, sub_category } = req.body;

    if (!mongoose.Types.ObjectId.isValid(main_category) || !mongoose.Types.ObjectId.isValid(sub_category)) {
        return res.status(400).json({ error: 'Invalid category ID' });
    }

    try {
        const subSubCategory = await SubSubCategory.create({ name, main_category, sub_category });
        res.status(200).json(subSubCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a sub-sub category
const deleteSubSubCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such sub-sub category' });
    }

    try {
        const subSubCategory = await SubSubCategory.findOneAndDelete({ _id: id });
        if (!subSubCategory) {
            return res.status(404).json({ error: 'No such sub-sub category' });
        }
        res.status(200).json(subSubCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Update a sub-sub category
const updateSubSubCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such sub-sub category' });
    }

    try {
        const subSubCategory = await SubSubCategory.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        );
        if (!subSubCategory) {
            return res.status(404).json({ error: 'No such sub-sub category' });
        }
        res.status(200).json(subSubCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getSubSubCategories,
    getSubSubCategory,
    createSubSubCategory,
    deleteSubSubCategory,
    updateSubSubCategory
}
