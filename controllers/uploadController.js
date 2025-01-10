// controllers/uploadController.js
const fs = require('fs');
const path = require('path'); // Ensure you import 'path'
require('dotenv').config();
const Upload = require('../models/uploadModel'); // Import the upload model

// Function to handle file upload
const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const fileUrl = `${process.env.GLIMERE_BASE_URL}/${req.file.path.replace(/\\/g, '/')}`;

        const newUpload = new Upload({
            name: req.body.name || req.file.filename, // Use the uploaded file name or fallback
            url: fileUrl,
            type: getFileType(req.file.mimetype) // Store the file type
        });

        const savedUpload = await newUpload.save();

        res.status(201).json(savedUpload);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Failed to create upload record', error: error.message });
    }
};

// Function to get all uploads
const getUploads = async (req, res) => {
    try {
        const uploads = await Upload.find();
        res.status(200).json(uploads);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Failed to retrieve uploads', error: error.message });
    }
};

// Function to get a specific upload by ID
const getUploadById = async (req, res) => {
    try {
        const upload = await Upload.findById(req.params.id);
        if (!upload) {
            return res.status(404).json({ message: 'Upload not found' });
        }
        res.status(200).json(upload);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Failed to retrieve upload', error: error.message });
    }
};

// Function to update an upload
const updateUpload = async (req, res) => {
    try {
        const upload = await Upload.findById(req.params.id);
        if (!upload) {
            return res.status(404).json({ message: 'Upload not found' });
        }

        const oldFilePath = path.join(__dirname,"..", upload.url.replace(process.env.GLIMERE_BASE_URL, '').replace(/^\//, '')); // Adjust the path to root directory
        const fileUrl = `${process.env.GLIMERE_BASE_URL}/${req.file.path.replace(/\\/g, '/')}`;

        if (req.file) {
            // Delete the old file from the uploads directory
            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
                console.log('Old file deleted successfully:', oldFilePath); // Debug logging
            } else {
                console.log('Old file not found at path:', oldFilePath); // Debug logging
            }

            upload.name = req.body.name || req.file.filename;
            upload.url = fileUrl;
            upload.type = getFileType(req.file.mimetype);
        } else {
            upload.name = req.body.name || upload.name;
        }

        const updatedUpload = await upload.save();
        res.status(200).json(updatedUpload);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Failed to update upload', error: error.message });
    }
};


// Function to delete an upload
const deleteUpload = async (req, res) => {
    try {
        const uploadId = req.params.id;

        // Find the upload by ID
        const upload = await Upload.findById(uploadId);
        if (!upload) {
            return res.status(404).json({ message: 'Upload not found' });
        }

        // Extract the relative path from the URL and get the file path
        const relativePath = upload.url.replace(process.env.GLIMERE_BASE_URL, '').replace(/^\//, '');
        const filePath = path.join(__dirname,"..", relativePath); // Adjust the path to root directory

        console.log('Deleting file at path:', filePath); // Debug logging

        // Delete the file from the uploads directory
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log('File deleted successfully');
        } else {
            console.log('File not found at path:', filePath); // Debug logging
        }

        // Delete the upload from the database
        await Upload.findByIdAndDelete(uploadId);

        res.status(200).json({ message: 'Upload deleted successfully' });
    } catch (error) {
        console.error('Failed to delete upload:', error);
        res.status(500).json({ message: 'Failed to delete upload', error: error.message });
    }
};


// Helper function to determine file type based on mimetype
const getFileType = (mimetype) => {
    if (mimetype.startsWith('image/')) {
        return 'image';
    } 
    if (mimetype.startsWith('video/')) {
        return 'video';
    } 
    if (mimetype.startsWith('audio/')) {
        return 'audio';
    } 
    if (['model/gltf-binary', 'model/obj', 'model/fbx', 'model/gltf+json'].includes(mimetype)) {
        return 'model';
    } 
    if (mimetype.startsWith('application/')) {
        return 'document';
    } 
    // Handle unexpected MIME types gracefully
    throw new Error(`Unsupported file type: ${mimetype}`);
};

module.exports = {
    uploadFile,
    getUploads,
    getUploadById,
    updateUpload,
    deleteUpload
};
