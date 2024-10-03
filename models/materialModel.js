const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema for linking Upload ID to texture fields
const textureSchema = new Schema({
    name: { type: String, required: true },
    thumbnail: { type: mongoose.Schema.Types.ObjectId, ref: 'Upload', required: true }, // Reference to Upload model for thumbnail
    description: { type: String, default: '' },
    patternFile: { type: mongoose.Schema.Types.ObjectId, ref: 'Upload', default: '' } // Reference to Upload model for pattern file
});

const materialSchema = new Schema({
    type: { type: String, required: true },
    textures: textureSchema,
    colorVariants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Color', required: true }],
    supplier: { type: String, required: true },
    availability: { type: String, required: true },
    pricePerUnit: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Material', materialSchema);
