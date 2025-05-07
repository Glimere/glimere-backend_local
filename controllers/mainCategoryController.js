const MainCategory = require('../models/mainCategoryModel');
const mongoose = require('mongoose');

// Get all main categories
const getMainCategories = async (req, res) => {
    try {
        const mainCategories = await MainCategory.find({}).populate('apparels').sort({ createdAt: -1 });
        res.status(200).json(mainCategories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get a single main category
const getMainCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such main category' });
    }

    try {
        const mainCategory = await MainCategory.findById(id).populate('apparels');
        if (!mainCategory) {
            return res.status(404).json({ error: 'No such main category' });
        }
        res.status(200).json(mainCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Create a new main category
const createMainCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const mainCategory = await MainCategory.create({ name });
        res.status(200).json(mainCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log('error.message', error.message);
    }
}

// Delete a main category
const deleteMainCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such main category' });
    }

    try {
        const mainCategory = await MainCategory.findOneAndDelete({ _id: id });
        if (!mainCategory) {
            return res.status(404).json({ error: 'No such main category' });
        }
        res.status(200).json(mainCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Update a main category
const updateMainCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such main category' });
    }

    try {
        const mainCategory = await MainCategory.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
        if (!mainCategory) {
            return res.status(404).json({ error: 'No such main category' });
        }
        res.status(200).json(mainCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getMainCategories,
    getMainCategory,
    createMainCategory,
    deleteMainCategory,
    updateMainCategory
}
