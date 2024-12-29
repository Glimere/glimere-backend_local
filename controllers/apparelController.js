const MainCategory = require("../models/mainCategoryModel");
const SubCategory = require("../models/subCategoryModel");
const SubSubCategory = require("../models/subSubCategoryModel");
const Brand = require("../models/brandModel");
const Material = require("../models/materialModel");
const Model = require("../models/modelModel");
const Size = require("../models/sizeModel");
const Apparel = require("../models/apparelModel");
const Review = require("../models/reviewModel");
const mongoose = require("mongoose");

// Get all apparels
const getApparels = async (req, res) => {
  try {
    const apparels = await Apparel.find({})
      .sort({ createdAt: -1 })
      .populate({
        path: "brand",
        populate: [
          {
            path: "logo",
            model: "Upload"
          },
        ]
      })
      .populate("main_category")
      .populate("sub_categories")
      .populate("sub_subcategories")
      .populate("apparel_images")
      .populate({
        path: "materials",
        populate: [
          {
            path: "textures",
            populate: [
              {
                path: "thumbnail",
                model: "Upload"
              },
              {
                path: "patternFile",
                model: "Upload"
              }
            ] // Ensure this is the correct model name for textures
          },
          {
            path: "colorVariants",
            model: "Color" // Ensure this is the correct model name for color variants
          }
        ]
      })
      .populate({
        path: "models",
        populate: [
          {
            path: "textures",
            model: "Upload" // Ensure this is the correct model name for textures
          },
          {
            path: "file",
            model: "Upload" // Ensure this is the correct model name for files
          },
          {
            path: "animations",
            model: "Upload" // Ensure this is the correct model name for animations
          }
        ]
      })
      .populate({
        path: "sizing_type",
        model: "Size",
        populate: [
          {
            path: "male",
            model: "Size",
          },
          {
            path: "female",
            model: "Size",
          },
        ],
      })
      .populate("sizes")
      .populate({
        path: "reviews",
        populate: {
          path: "user",
          model: "User" // Ensure this is the correct model name for users
        }
      });

    apparels.forEach(apparel => {
      if (apparel.sizing_type) {
        apparel.sizing_type.male = apparel.sizing_type.male.filter(maleSize => apparel.sizes.includes(maleSize._id.toString()));
        apparel.sizing_type.female = apparel.sizing_type.female.filter(femaleSize => apparel.sizes.includes(femaleSize._id.toString()));
      }
    });

    res.status(200).json(apparels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single apparel
const getApparel = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such apparel" });
  }

  try {
    const apparel = await Apparel.findById(id)
      .populate({
        path: "brand",
        populate: [
          {
            path: "logo",
            model: "Upload"
          },
        ]
      })
      .populate("main_category")
      .populate("sub_categories")
      .populate("sub_subcategories")
      .populate("apparel_images")
      .populate({
        path: "materials",
        populate: [
          {
            path: "textures",
            populate: [
              {
                path: "thumbnail",
                model: "Upload"
              },
              {
                path: "patternFile",
                model: "Upload"
              }
            ] // Ensure this is the correct model name for textures
          },
          {
            path: "colorVariants",
            model: "Color" // Ensure this is the correct model name for color variants
          }
        ]
      })
      .populate({
        path: "models",
        populate: [
          {
            path: "textures",
            model: "Upload" // Ensure this is the correct model name for textures
          },
          {
            path: "file",
            model: "Upload" // Ensure this is the correct model name for files
          },
          {
            path: "animations",
            model: "Upload" // Ensure this is the correct model name for animations
          }
        ]
      })
      .populate({
        path: "sizing_type",
        model: "Size",
        populate: [
          {
            path: "male",
            model: "Size",
          },
          {
            path: "female",
            model: "Size",
          },
        ],
      })
      .populate("sizes")
      .populate({
        path: "reviews",
        populate: {
          path: "user",
          model: "User" // Ensure this is the correct model name for users
        }
      });

    if (!apparel) {
      return res.status(404).json({ error: "No such apparel" });
    }

    if (apparel.sizing_type) {
      apparel.sizing_type.male = apparel.sizing_type.male.filter(maleSize => apparel.sizes.includes(maleSize._id.toString()));
      apparel.sizing_type.female = apparel.sizing_type.female.filter(femaleSize => apparel.sizes.includes(femaleSize._id.toString()));
    }

    res.status(200).json(apparel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new apparel
const createApparel = async (req, res) => {
  const {
    apparel_name,
    apparel_images,
    apparel_desc,
    apparel_price,
    discounted_price,
    discount_percentage,
    discount_start_date,
    discount_end_date,
    is_discounted,
    apparel_type,
    brand,
    main_category,
    sub_categories,
    sub_subcategories,
    materials,
    models,
    sizing_type,
    sizes,
    views,
    is_featured,
    number_sold
  } = req.body;

  try {
    const apparel = await Apparel.create({
      apparel_name,
      apparel_images,
      apparel_desc,
      apparel_price,
      discounted_price,
      discount_percentage,
      discount_start_date,
      discount_end_date,
      is_discounted,
      apparel_type,
      brand,
      main_category,
      sub_categories,
      sub_subcategories,
      materials,
      models,
      sizing_type,
      sizes,
      views,
      is_featured,
      number_sold,
      average_rating: 0,
      total_reviews: 0
    });

    // Update the categories to reference the new apparel item
    await Brand.findByIdAndUpdate(brand, { $push: { apparels: apparel._id } });
    await MainCategory.findByIdAndUpdate(main_category, {
      $push: { apparels: apparel._id },
    });
    await SubCategory.updateMany(
      { _id: { $in: sub_categories } },
      { $push: { apparels: apparel._id } }
    );
    await SubSubCategory.updateMany(
      { _id: { $in: sub_subcategories } },
      { $push: { apparels: apparel._id } }
    );

    res.status(200).json(apparel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an apparel
const deleteApparel = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such apparel" });
  }

  try {
    const apparel = await Apparel.findOneAndDelete({ _id: id });

    if (!apparel) {
      return res.status(404).json({ error: "No such apparel" });
    }

    res.status(200).json({ message: "Apparel deleted successfully", apparel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an apparel
const updateApparel = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such apparel" });
  }

  try {
    const apparel = await Apparel.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      { new: true }
    )
      .populate({
        path: "brand",
        populate: [
          {
            path: "logo",
            model: "Upload"
          },
        ]
      })
      .populate("main_category")
      .populate("sub_categories")
      .populate("sub_subcategories")
      .populate("apparel_images")
      .populate({
        path: "materials",
        populate: [
          {
            path: "textures",
            populate: [
              {
                path: "thumbnail",
                model: "Upload"
              },
              {
                path: "patternFile",
                model: "Upload"
              }
            ] // Ensure this is the correct model name for textures
          },
          {
            path: "colorVariants",
            model: "Color" // Ensure this is the correct model name for color variants
          }
        ]
      })
      .populate({
        path: "models",
        populate: [
          {
            path: "textures",
            model: "Upload" // Ensure this is the correct model name for textures
          },
          {
            path: "file",
            model: "Upload" // Ensure this is the correct model name for files
          },
          {
            path: "animations",
            model: "Upload" // Ensure this is the correct model name for animations
          }
        ]
      })
      .populate({
        path: "sizing_type",
        model: "Size",
        populate: [
          {
            path: "male",
            model: "Size",
          },
          {
            path: "female",
            model: "Size",
          },
        ],
      })
      .populate("sizes")
      .populate({
        path: "reviews",
        populate: {
          path: "user",
          model: "User" // Ensure this is the correct model name for users
        }
      });

    if (!apparel) {
      return res.status(404).json({ error: "No such apparel" });
    }

    if (apparel.sizing_type) {
      apparel.sizing_type.male = apparel.sizing_type.male.filter(maleSize => apparel.sizes.includes(maleSize._id.toString()));
      apparel.sizing_type.female = apparel.sizing_type.female.filter(femaleSize => apparel.sizes.includes(femaleSize._id.toString()));
    }

    res.status(200).json(apparel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getApparels,
  getApparel,
  createApparel,
  deleteApparel,
  updateApparel,
};
