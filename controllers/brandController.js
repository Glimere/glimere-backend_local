const Brand = require("../models/brandModel");
const Apparel = require("../models/apparelModel"); // Assuming you have an Apparel model
const Upload = require("../models/uploadModel"); // Assuming you have an Upload model

const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find()
      .populate("apparels")
      .populate("logo")
      .populate("coverImage"); // Populate coverImage
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id)
      .populate("apparels")
      .populate("logo")
      .populate("coverImage"); // Populate coverImage

    if (!brand) {
      return res.status(404).json({ message: "Brand not found." });
    }

    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBrand = async (req, res) => {
  try {
    const {
      name,
      description,
      logo,
      coverImage,
      website,
      country,
      established,
      contactInfo,
      socialMediaLinks,
      apparels,
      views,
    } = req.body;

    // Validate logo and coverImage
    if (logo) {
      const logoExists = await Upload.findById(logo);
      if (!logoExists) {
        return res.status(400).json({ message: "Invalid logo ID provided." });
      }
    }
    if (coverImage) {
      const coverImageExists = await Upload.findById(coverImage);
      if (!coverImageExists) {
        return res.status(400).json({ message: "Invalid cover image ID provided." });
      }
    }

    // Validate apparels
    if (apparels && apparels.length > 0) {
      const invalidApparelIds = await Promise.all(
        apparels.map(async (id) => {
          const apparelExists = await Apparel.findById(id);
          return apparelExists ? null : id;
        })
      );

      const invalidIds = invalidApparelIds.filter((id) => id !== null);
      if (invalidIds.length > 0) {
        return res.status(400).json({
          message: `Invalid apparel IDs provided: ${invalidIds.join(", ")}`,
        });
      }
    }

    const newBrand = new Brand({
      name,
      description,
      logo,
      coverImage,
      website,
      country,
      established,
      contactInfo,
      socialMediaLinks: socialMediaLinks || {}, // Default to empty object
      apparels: apparels || [], // Default to empty array
      views: views || 0, // Default to 0
    });

    await newBrand.save();

    res.status(201).json({ message: "Brand created successfully.", brand: newBrand });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      logo,
      coverImage,
      website,
      country,
      established,
      contactInfo,
      socialMediaLinks,
      apparels,
      views,
    } = req.body;

    const brand = await Brand.findById(id);

    if (!brand) {
      return res.status(404).json({ message: "Brand not found." });
    }

    // Validate logo and coverImage
    if (logo) {
      const logoExists = await Upload.findById(logo);
      if (!logoExists) {
        return res.status(400).json({ message: "Invalid logo ID provided." });
      }
      brand.logo = logo;
    }
    if (coverImage) {
      const coverImageExists = await Upload.findById(coverImage);
      if (!coverImageExists) {
        return res.status(400).json({ message: "Invalid cover image ID provided." });
      }
      brand.coverImage = coverImage;
    }

    // Validate apparels
    if (apparels && apparels.length > 0) {
      const invalidApparelIds = await Promise.all(
        apparels.map(async (id) => {
          const apparelExists = await Apparel.findById(id);
          return apparelExists ? null : id;
        })
      );

      const invalidIds = invalidApparelIds.filter((id) => id !== null);
      if (invalidIds.length > 0) {
        return res.status(400).json({
          message: `Invalid apparel IDs provided: ${invalidIds.join(", ")}`,
        });
      }
      brand.apparels = apparels;
    }

    // Update other fields
    brand.name = name || brand.name;
    brand.description = description || brand.description;
    brand.website = website || brand.website;
    brand.country = country || brand.country;
    brand.established = established || brand.established;
    brand.contactInfo = contactInfo || brand.contactInfo;
    brand.socialMediaLinks = socialMediaLinks || brand.socialMediaLinks;
    brand.views = views || brand.views;

    await brand.save();

    res.status(200).json({ message: "Brand updated successfully.", brand });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBrand = async (req, res) => {
  const { id } = req.params;

  try {
    const brand = await Brand.findOneAndDelete({ _id: id });

    if (!brand) {
      return res.status(404).json({ message: "Brand not found." });
    }
    res.status(200).json({ message: "Brand deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
};
