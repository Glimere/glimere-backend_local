const Sizing = require('../models/sizeModel');

const getAllMeasurements = async (req, res) => {
    try {
        const sizing = await Sizing.find();

        // Return both male and female sizes
        if (!sizing) {
            return res.status(404).json({ message: 'No measurement data found.' });
        }

        res.status(200).json({
            data: sizing,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMeasurement = async (req, res) => {
    try {
        const { type, id } = req.params;
        const sizing = await Sizing.findOne();

        let measurement;
        if (type === 'male') {
            measurement = sizing.male.id(id);
        } else if (type === 'female') {
            measurement = sizing.female.id(id);
        } else {
            return res.status(400).json({ message: 'Invalid type. Use "male" or "female".' });
        }

        if (!measurement) {
            return res.status(404).json({ message: 'Measurement not found.' });
        }

        res.status(200).json(measurement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMeasurement = async (req, res) => {
    try {
        const { type, measurement } = req.body;
        const sizing = await Sizing.findOne();

        if (type === 'male') {
            sizing.male.push(measurement);
        } else if (type === 'female') {
            sizing.female.push(measurement);
        } else {
            return res.status(400).json({ message: 'Invalid type. Use "male" or "female".' });
        }

        await sizing.save();
        res.status(201).json({ message: 'Measurement added successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateMeasurement = async (req, res) => {
    try {
        const { type, id } = req.params;
        const { measurement } = req.body;
        const sizing = await Sizing.findOne();

        let target;
        if (type === 'male') {
            target = sizing.male.id(id);
        } else if (type === 'female') {
            target = sizing.female.id(id);
        } else {
            return res.status(400).json({ message: 'Invalid type. Use "male" or "female".' });
        }

        if (!target) {
            return res.status(404).json({ message: 'Measurement not found.' });
        }

        Object.assign(target, measurement);
        await sizing.save();
        res.status(200).json({ message: 'Measurement updated successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteMeasurement = async (req, res) => {
    try {
        const { type, id } = req.params;
        const sizing = await Sizing.findOne();

        let target;
        if (type === 'male') {
            target = sizing.male.id(id);
            if (target) sizing.male.pull(target);
        } else if (type === 'female') {
            target = sizing.female.id(id);
            if (target) sizing.female.pull(target);
        } else {
            return res.status(400).json({ message: 'Invalid type. Use "male" or "female".' });
        }

        if (!target) {
            return res.status(404).json({ message: 'Measurement not found.' });
        }

        await sizing.save();
        res.status(200).json({ message: 'Measurement deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllMeasurements,
    getMeasurement,
    createMeasurement,
    updateMeasurement,
    deleteMeasurement
};
