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
            model: "Upload",
          },
        ],
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
                model: "Upload",
              },
              {
                path: "patternFile",
                model: "Upload",
              },
            ], // Ensure this is the correct model name for textures
          },
          {
            path: "colorVariants",
            model: "Color", // Ensure this is the correct model name for color variants
          },
        ],
      })
      .populate({
        path: "models",
        populate: [
          {
            path: "textures",
            model: "Upload", // Ensure this is the correct model name for textures
          },
          {
            path: "file",
            model: "Upload", // Ensure this is the correct model name for files
          },
          {
            path: "animations",
            model: "Upload", // Ensure this is the correct model name for animations
          },
        ],
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
          model: "User",
        },
      })
      .populate("full_wear");
    // Loop through each apparel and fetch reviews
    for (let apparel of apparels) {
      if (apparel.sizing_type) {
        apparel.sizing_type.male = apparel.sizing_type.male.filter((maleSize) =>
          apparel.sizes.includes(maleSize._id.toString())
        );
        apparel.sizing_type.female = apparel.sizing_type.female.filter(
          (femaleSize) => apparel.sizes.includes(femaleSize._id.toString())
        );
      }

      // Fetch reviews related to this apparel
      const reviews = await Review.find({ apparel: apparel._id }).populate({
        path: "user",
        model: "User",
      });

      // Calculate total reviews and average rating
      const totalReviews = reviews.length;
      const averageRating =
        totalReviews > 0
          ? reviews.reduce((sum, review) => sum + review.rating, 0) /
            totalReviews
          : 0;

      // Attach calculated reviews and update apparel object
      apparel.total_reviews = totalReviews;
      apparel.average_rating = averageRating;
      apparel.reviews = reviews;
    }

    res.status(200).json(apparels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getApparel = async (req, res) => {
  const { id } = req.params;

  // Validate the ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such apparel" });
  }

  try {
    // Fetch the apparel and populate related data
    const apparel = await Apparel.findById(id)
      .populate({
        path: "brand",
        populate: [{ path: "logo", model: "Upload" }],
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
              { path: "thumbnail", model: "Upload" },
              { path: "patternFile", model: "Upload" },
            ],
          },
          { path: "colorVariants", model: "Color" },
        ],
      })
      .populate({
        path: "models",
        populate: [
          { path: "textures", model: "Upload" },
          { path: "file", model: "Upload" },
          { path: "animations", model: "Upload" },
        ],
      })
      .populate({
        path: "sizing_type",
        model: "Size",
        populate: [
          { path: "male", model: "Size" },
          { path: "female", model: "Size" },
        ],
      })
      .populate("sizes")
      .populate({
        path: "reviews",
        populate: {
          path: "user",
          model: "User",
        },
      })
      .populate("full_wear");
      
    // If the apparel is not found
    if (!apparel) {
      return res.status(404).json({ error: "No such apparel" });
    }

    // Filter male and female sizes based on the apparel's size options
    if (apparel.sizing_type) {
      apparel.sizing_type.male = apparel.sizing_type.male.filter((maleSize) =>
        apparel.sizes.includes(maleSize._id.toString())
      );
      apparel.sizing_type.female = apparel.sizing_type.female.filter(
        (femaleSize) => apparel.sizes.includes(femaleSize._id.toString())
      );
    }

    // Fetch the reviews for the specific apparel
    const reviews = await Review.find({ apparel: apparel._id }).populate({
      path: "user",
      model: "User",
    });

    // Calculate total reviews and average rating
    const totalReviews = reviews.length;
    const averageRating =
      totalReviews > 0
        ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
        : 0;

    // Attach the reviews, total reviews, and average rating to the apparel object
    apparel.total_reviews = totalReviews;
    apparel.average_rating = averageRating;
    apparel.reviews = reviews;

    // Send the updated apparel data as a response
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
    number_sold,
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
      total_reviews: 0,
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
            model: "Upload",
          },
        ],
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
                model: "Upload",
              },
              {
                path: "patternFile",
                model: "Upload",
              },
            ], // Ensure this is the correct model name for textures
          },
          {
            path: "colorVariants",
            model: "Color", // Ensure this is the correct model name for color variants
          },
        ],
      })
      .populate({
        path: "models",
        populate: [
          {
            path: "textures",
            model: "Upload", // Ensure this is the correct model name for textures
          },
          {
            path: "file",
            model: "Upload", // Ensure this is the correct model name for files
          },
          {
            path: "animations",
            model: "Upload", // Ensure this is the correct model name for animations
          },
        ],
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
          model: "User", // Ensure this is the correct model name for users
        },
      })
      .populate("full_wear");
    if (!apparel) {
      return res.status(404).json({ error: "No such apparel" });
    }
    // Filter male and female sizes based on the apparel's size options
    if (apparel.sizing_type) {
      apparel.sizing_type.male = apparel.sizing_type.male.filter((maleSize) =>
        apparel.sizes.includes(maleSize._id.toString())
      );
      apparel.sizing_type.female = apparel.sizing_type.female.filter(
        (femaleSize) => apparel.sizes.includes(femaleSize._id.toString())
      );
    }

    // Fetch the reviews for the specific apparel
    const reviews = await Review.find({ apparel: apparel._id }).populate({
      path: "user",
      model: "User",
    });

    // Calculate total reviews and average rating
    const totalReviews = reviews.length;
    const averageRating =
      totalReviews > 0
        ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
        : 0;

    // Attach the reviews, total reviews, and average rating to the apparel object
    apparel.total_reviews = totalReviews;
    apparel.average_rating = averageRating;
    apparel.reviews = reviews;

    res.status(200).json(apparel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const searchApparels = async (req, res) => {
  try {
      const searchTerm = req.query.searchTerm || "";
      const category = req.query.category || null;
      const priceMin = parseFloat(req.query.priceMin) || 0;
      const priceMax = parseFloat(req.query.priceMax) || Number.MAX_VALUE;

      const filters = {
          name: { $regex: searchTerm, $options: "i" }, // Case-insensitive regex for name
          price: { $gte: priceMin, $lte: priceMax },   // Filter by price range
      };

      if (category) {
          filters.category = category;
      }

      const apparels = await Apparel.find(filters).sort({ createdAt: -1 });

      if (apparels.length === 0) {
          return res.status(404).json({ message: "No apparels found" });
      }

      res.status(200).json(apparels);
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
  searchApparels
};
