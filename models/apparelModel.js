const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apparelSchema = new Schema({
    apparel_name: {
        type: String,
        required: true
    },
    apparel_desc: {
        type: String,
        required: true
    },
    apparel_price: {
        type: Number,
        required: true
    },
    discounted_price: {
        type: Number,
        default: null
    },
    discount_percentage: {
        type: Number,
        default: 0
    },
    discount_start_date: {
        type: Date,
        default: null
    },
    discount_end_date: {
        type: Date,
        default: null
    },
    is_discounted: {
        type: Boolean,
        default: false
    },
    apparel_type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    main_category: {
        type: String,
        required: true
    },
    sub_categories: [{
        type: String
    }],
    sub_subcategories: [{
        type: String
    }],
    materials: [{
        type: String
    }],
    models: [{
        type: String
    }],
    sizes: [{
        type: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('Apparel', apparelSchema);
