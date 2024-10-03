const Color = require('../models/colorModel'); // Import the Color model

// Create a new color
const createColor = async (req, res) => {
    try {
        const { name, hexCode, variant, rgb } = req.body;

        // Validate input
        if (!name || !hexCode || !rgb || !variant) {
            return res.status(400).json({ message: 'Name, hexCode, and rgb are required fields' });
        }

        // Create the color instance
        const newColor = new Color({
            name,
            hexCode,
            variant,
            rgb
        });

        // Save the color to the database
        await newColor.save();

        res.status(201).json({
            status: 'success',
            message: 'Color created successfully',
            data: newColor
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all colors
const getColors = async (req, res) => {
    try {
        const colors = await Color.find();
        res.status(200).json({
            status: 'success',
            data: colors
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a color by ID
const getColorById = async (req, res) => {
    try {
        const color = await Color.findById(req.params.id);
        if (!color) {
            return res.status(404).json({ message: 'Color not found' });
        }
        res.status(200).json({
            status: 'success',
            data: color
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a color by ID
const updateColor = async (req, res) => {
    try {
        const { name, hexCode, rgb, variant } = req.body;

        const color = await Color.findById(req.params.id);
        if (!color) {
            return res.status(404).json({ message: 'Color not found' });
        }

        color.name = name || color.name;
        color.hexCode = hexCode || color.hexCode;
        color.variant = variant || color.variant;
        color.rgb = rgb || color.rgb;

        await color.save();

        res.status(200).json({ message: 'Color updated successfully', data: color });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a color by ID
const deleteColor = async (req, res) => {
    try {
        const color = await Color.findById(req.params.id);
        if (!color) {
            return res.status(404).json({ message: 'Color not found' });
        }

        await color.remove();
        res.status(200).json({ message: 'Color deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createColor,
    getColors,
    getColorById,
    updateColor,
    deleteColor
};
