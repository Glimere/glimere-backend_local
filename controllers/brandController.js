const Brand = require('../models/brandModel');

const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const brand = await Brand.findById(id);

        if (!brand) {
            return res.status(404).json({ message: 'Brand not found.' });
        }

        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBrand = async (req, res) => {
    try {
        const { name, description, logo, website, country, established, contactInfo, socialMediaLinks } = req.body;
        const newBrand = new Brand({ name, description, logo, website, country, established, contactInfo, socialMediaLinks });

        await newBrand.save();
        res.status(201).json({ message: 'Brand created successfully.', brand: newBrand });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, logo, website, country, established, contactInfo, socialMediaLinks } = req.body;

        const brand = await Brand.findById(id);

        if (!brand) {
            return res.status(404).json({ message: 'Brand not found.' });
        }

        brand.name = name || brand.name;
        brand.description = description || brand.description;
        brand.logo = logo || brand.logo;
        brand.website = website || brand.website;
        brand.country = country || brand.country;
        brand.established = established || brand.established;
        brand.contactInfo = contactInfo || brand.contactInfo;
        brand.socialMediaLinks = socialMediaLinks || brand.socialMediaLinks;

        await brand.save();
        res.status(200).json({ message: 'Brand updated successfully.', brand });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const brand = await Brand.findById(id);

        if (!brand) {
            return res.status(404).json({ message: 'Brand not found.' });
        }

        await brand.remove();
        res.status(200).json({ message: 'Brand deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand
};
