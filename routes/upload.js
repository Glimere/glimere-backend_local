// routes/upload.js

const express = require('express');
const { upload, uploadHandler } = require('../middlewares/upload'); // Import the upload middleware
const { uploadFile, getUploads, getUploadById, updateUpload, deleteUpload } = require('../controllers/uploadController'); // Import the upload controller

const router = express.Router();

// Define the upload route
router.post('/', upload.single('file'), uploadFile); // Handle file upload
router.get('/', getUploads); // Get all uploads
router.get('/:id', getUploadById); // Get upload by ID
router.put('/:id', upload.single('file'), updateUpload); // Update upload
router.delete('/:id', deleteUpload); // Delete upload

module.exports = router;
