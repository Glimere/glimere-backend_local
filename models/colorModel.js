const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const colorSchema = new Schema({
    name: { type: String, required: true },
    variant: { type: String, required: true },
    hexCode: { type: String, required: true },
    rgb: { type: String, required: true }
});

module.exports = mongoose.model('Color', colorSchema);
