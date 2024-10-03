const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subSubCategorySchema = new Schema({
    name: { type: String, required: true },
    main_category: { type: mongoose.Schema.Types.ObjectId, ref: 'MainCategory' },
    sub_category: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }
}, { timestamps: true });

module.exports = mongoose.model('SubSubCategory', subSubCategorySchema);
