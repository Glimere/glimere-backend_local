const Apparel = require('../models/apparelModel');
const mongoose = require('mongoose');

// Get all apparels
const getApparels = async (req, res) => {
    try {
        const apparels = await Apparel.find({}).sort({ createdAt: -1 });
        res.status(200).json(apparels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single apparel
const getApparel = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such apparel' });
    }

    try {
        const apparel = await Apparel.findById(id);
        if (!apparel) {
            return res.status(404).json({ error: 'No such apparel' });
        }
        res.status(200).json(apparel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new apparel
const createApparel = async (req, res) => {
    const { 
        apparel_name, 
        apparel_desc, 
        apparel_price, 
        discounted_price, 
        discount_percentage, 
        discount_start_date, 
        discount_end_date, 
        is_discounted, 
        apparel_type, 
        brand, 
        main_category, 
        sub_categories, 
        sub_subcategories, 
        materials, 
        models, 
        sizes 
    } = req.body;

    try {
        const apparel = await Apparel.create({ 
            apparel_name, 
            apparel_desc, 
            apparel_price, 
            discounted_price, 
            discount_percentage, 
            discount_start_date, 
            discount_end_date, 
            is_discounted, 
            apparel_type, 
            brand, 
            main_category, 
            sub_categories, 
            sub_subcategories, 
            materials, 
            models, 
            sizes 
        });
        res.status(201).json(apparel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an apparel
const deleteApparel = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such apparel' });
    }

    try {
        const apparel = await Apparel.findOneAndDelete({ _id: id });

        if (!apparel) {
            return res.status(404).json({ error: 'No such apparel' });
        }

        res.status(200).json({ message: 'Apparel deleted successfully', apparel });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an apparel
const updateApparel = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such apparel' });
    }

    try {
        const apparel = await Apparel.findOneAndUpdate({ _id: id }, {
            ...req.body
        }, { new: true });

        if (!apparel) {
            return res.status(404).json({ error: 'No such apparel' });
        }

        res.status(200).json(apparel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createApparel,
    getApparels,
    getApparel,
    deleteApparel,
    updateApparel
};
