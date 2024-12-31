// models/Like.js
const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    apparelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apparel',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Like', LikeSchema);
