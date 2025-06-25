const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subSubCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 100,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 300,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    main_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MainCategory",
    },
    sub_categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('SubSubCategory', subSubCategorySchema);
