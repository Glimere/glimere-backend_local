const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
    name: { type: String, required: true },
    main_category: { type: mongoose.Schema.Types.ObjectId, ref: 'MainCategory' }
}, { timestamps: true });

module.exports = mongoose.model('SubCategory', subCategorySchema);
