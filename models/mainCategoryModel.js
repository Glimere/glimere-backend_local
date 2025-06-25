const mongoose = require("mongoose");

const mainCategorySchema = new mongoose.Schema(
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
    apparels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Apparel",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("MainCategory", mainCategorySchema);
