const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    type: { 
        type: String, 
        required: true,
        enum: ['image', 'video', 'audio', 'document', 'model']
    }
}, { timestamps: true });

module.exports = mongoose.model('Upload', uploadSchema);
