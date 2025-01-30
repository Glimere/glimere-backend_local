const multer = require('multer');
const path = require('path');
const mkdirp = require('mkdirp');
const Upload = require('../models/uploadModel'); // Import the upload model

// Set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = '';

        // Determine the folder based on file type
        if (file.mimetype.startsWith('image/')) {
            folder = 'uploads/images';
        } else if (file.mimetype.startsWith('video/')) {
            folder = 'uploads/videos';
        } else if (file.mimetype.startsWith('audio/')) {
            folder = 'uploads/audio';
        } else if (['model/gltf-binary', 'model/obj', 'model/fbx', 'model/gltf+json'].includes(file.mimetype)) {
            folder = 'uploads/3d_models';
        } else if (file.mimetype.startsWith('application/')) {
            folder = 'uploads/documents';
        } else {
            return cb(new Error('File type not supported'), false);
        }

        mkdirp(folder).then(() => cb(null, folder)).catch(err => cb(err));
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const originalName = file.originalname.replace(/\s+/g, '-'); // Replace spaces with hyphens
        cb(null, `${timestamp}-${originalName}`); // Prepend timestamp to original file name
    }
});


// Initialize multer with storage settings
const upload = multer({
    storage,
    limits: { fileSize: 100 * 1024 * 1024 }, // Set a file size limit of 10MB (adjust as needed)
    fileFilter: (req, file, cb) => {
        // Check for supported file types
        const allowedTypes = ['image/', 'video/', 'audio/', 'model/gltf-binary', 'model/obj', 'model/fbx', 'model/gltf', 'application/'];
        const isValidType = allowedTypes.some(type => file.mimetype.startsWith(type));
        if (isValidType) {
            cb(null, true);
        } else {
            cb(new Error('File type not supported'), false);
        }
    }
});

// Middleware function to handle upload and create upload record
const uploadHandler = async (req, res, next) => {
    upload.single('file')(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            console.error('Multer error:', err);
            return res.status(500).json({ message: 'File upload failed', error: err.message });
        } else if (err) {
            console.error('Unknown error:', err);
            return res.status(500).json({ message: 'File upload failed', error: err.message });
        }

        // Create upload record in the database
        try {
            const newUpload = new Upload({
                name: req.file.originalname, // Use the original file name
                url: req.file.path.replace(/\\/g, '/'), // Replace backslashes with forward slashes
                type: getFileType(req.file.mimetype) // Store the file type
            });

            // Save the upload to the database
            const savedUpload = await newUpload.save();

            // Attach the upload ID to the request object for further processing
            req.uploadId = savedUpload._id;

            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            console.error('Database error:', error);
            return res.status(500).json({ message: 'Failed to create upload record', error: error.message });
        }
    });
};

// Helper function to determine file type based on mimetype
const getFileType = (mimetype) => {
    if (mimetype.startsWith('image/')) {
        return 'image';
    } else if (mimetype.startsWith('video/')) {
        return 'video';
    } else if (mimetype.startsWith('audio/')) {
        return 'audio';
    } else if (['model/gltf-binary', 'model/obj', 'model/fbx', 'model/gltf'].includes(mimetype)) {
        return 'model';
    } else if (mimetype.startsWith('application/')) {
        return 'document';
    } else {
        throw new Error('Unsupported file type');
    }
};

module.exports = { upload, uploadHandler };
