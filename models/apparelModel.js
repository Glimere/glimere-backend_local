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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    main_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MainCategory',
        required: true
    },
    sub_categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory'
    }],
    sub_subcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubSubCategory'
    }],
    materials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Material'
    }],
    models: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model'
    }],
    sizing_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Size'
    },
    sizes: [{type: String,
        required: true}]

}, { timestamps: true });

module.exports = mongoose.model('Apparel', apparelSchema);
