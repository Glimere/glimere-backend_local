const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mainCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    apparels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apparel'
    }]
}, { timestamps: true });

module.exports = mongoose.model('MainCategory', mainCategorySchema);
