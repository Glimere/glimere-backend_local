const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const positionSchema = new Schema({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true }
});

const rotationSchema = new Schema({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true }
});

const scaleSchema = new Schema({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true }
});

const modelSchema = new Schema({
    name: { type: String, required: true },
    file: { type: mongoose.Schema.Types.ObjectId, ref: 'Upload', required: true }, // Reference to the Upload model for the main model file
    animations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Upload', required: true }], // Array of references to the Upload model for 3D models
    textures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Upload', required: true }], // Array of references to the Upload model for images
    positions: positionSchema,
    rotation: rotationSchema,
    scale: scaleSchema
}, { timestamps: true });

module.exports = mongoose.model('Model', modelSchema);
