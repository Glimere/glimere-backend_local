const Size = require('../models/sizeModel');

const getAllSize = async (req, res) => {
    try {
        const sizing = await Size.find();

        // Return both male and female sizes
        if (!sizing) {
            return res.status(404).json({ message: 'No sizing data found.' });
        }

        res.status(200).json({
            data: sizing,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneSize = async (req, res) => {
    try {
        const { type, id } = req.params; // Get the type and id from route parameters
        const sizing = await Size.findOne();

        let target;
        if (type === 'male') {
            target = sizing.male.id(id);
        } else if (type === 'female') {
            target = sizing.female.id(id);
        } else {
            return res.status(400).json({ message: 'Invalid type. Use "male" or "female".' });
        }

        if (!target) {
            return res.status(404).json({ message: 'Size not found.' });
        }

        res.status(200).json(target);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSize = async (req, res) => {
    try {
        const { type, id } = req.params;
        const { sizingData } = req.body; // Assume sizingData contains the updated data
        const sizing = await Size.findOne();

        let target;
        if (type === 'male') {
            target = sizing.male.id(id);
        } else if (type === 'female') {
            target = sizing.female.id(id);
        } else {
            return res.status(400).json({ message: 'Invalid type. Use "male" or "female".' });
        }

        if (!target) {
            return res.status(404).json({ message: 'Size not found.' });
        }

        Object.assign(target, sizingData);
        await sizing.save();
        res.status(200).json({ message: 'Size updated successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update size by sizing type
const updateSizeBySizingType = async (req, res) => {
    try {
        const { sizingType, gender } = req.params;
        const { sizingData } = req.body; // Assume sizingData contains the updated data
        const sizing = await Size.findOne();

        let targetArray;
        if (gender === 'male') {
            targetArray = sizing.male;
        } else if (gender === 'female') {
            targetArray = sizing.female;
        } else {
            return res.status(400).json({ message: 'Invalid gender. Use "male" or "female".' });
        }

        targetArray.forEach(size => {
            if (size.sizing_type === sizingType) {
                Object.assign(size, sizingData);
            }
        });

        await sizing.save();
        res.status(200).json({ message: 'Sizes updated successfully by sizing type.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update size by short name and sizing type
const updateSizeByShortNameAndSizingType = async (req, res) => {
    try {
        const { shortName, sizingType, gender } = req.params;
        const { sizingData } = req.body; // Assume sizingData contains the updated data
        const sizing = await Size.findOne();

        let targetArray;
        if (gender === 'male') {
            targetArray = sizing.male;
        } else if (gender === 'female') {
            targetArray = sizing.female;
        } else {
            return res.status(400).json({ message: 'Invalid gender. Use "male" or "female".' });
        }

        targetArray.forEach(size => {
            if (size.shortName === shortName && size.sizing_type === sizingType) {
                Object.assign(size, sizingData);
            }
        });

        await sizing.save();
        res.status(200).json({ message: 'Sizes updated successfully by short name and sizing type.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllSize,
    getOneSize,
    updateSize,
    updateSizeBySizingType,
    updateSizeByShortNameAndSizingType
};
