const Model = require('../models/modelModel'); // Import the model

// Create a new model
const createModel = async (req, res) => {
    try {
        // Validate input
        if (!req.body.name || !req.body.file) {
            return res.status(400).json({ message: 'Model name and file are required' });
        }

        // Create the model instance
        const newModel = new Model({
            name: req.body.name,
            file: req.body.file, // Save the file ID
            animations: req.body.animations || [],
            textures: req.body.textures || [],
            positions: req.body.positions || {},
            rotation: req.body.rotation || {},
            scale: req.body.scale || {}
        });

        // Save the model to the database
        await newModel.save();

        res.status(201).json(newModel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all models
const getModels = async (req, res) => {
    try {
        const models = await Model.find()
            .populate('file')
            .populate('animations')
            .populate('textures');
        res.status(200).json(models);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a model by ID
const getModelById = async (req, res) => {
    try {
        const model = await Model.findById(req.params.id)
            .populate('file')
            .populate('animations')
            .populate('textures');
        if (!model) {
            return res.status(404).json({ message: 'Model not found' });
        }
        res.status(200).json(model);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a model by ID
const updateModel = async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        if (!model) {
            return res.status(404).json({ message: 'Model not found' });
        }

        model.name = req.body.name || model.name;
        model.file = req.body.file || model.file;
        model.animations = req.body.animations || model.animations;
        model.textures = req.body.textures || model.textures;
        model.positions = req.body.positions || model.positions;
        model.rotation = req.body.rotation || model.rotation;
        model.scale = req.body.scale || model.scale;

        await model.save();

        res.status(200).json({ message: 'Model updated successfully', data: model });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a model by ID
const deleteModel = async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        if (!model) {
            return res.status(404).json({ message: 'Model not found' });
        }

        await model.remove();
        res.status(200).json({ message: 'Model deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createModel,
    getModels,
    getModelById,
    updateModel,
    deleteModel
};
