const express = require('express');
const { uploadHandler } = require('../middlewares/upload'); // Import the upload handler
const { createModel, getModels, getModelById, updateModel, deleteModel } = require('../controllers/modelController'); // Import the model controller

const router = express.Router();

// Define the model routes
router.post('/', createModel); // Upload 3D model and create model
router.get('/', getModels); // Get all models
router.get('/:id', getModelById); // Get model by ID
router.put('/:id', uploadHandler, updateModel); // Update model
router.delete('/:id', deleteModel); // Delete model

module.exports = router;
