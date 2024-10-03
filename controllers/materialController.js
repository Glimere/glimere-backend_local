const Material = require('../models/materialModel');
const Upload = require('../models/uploadModel');
const Color = require('../models/colorModel');

// Create a new material
const createMaterial = async (req, res) => {
    try {
        const { type, textures, colorVariants, supplier, availability, pricePerUnit } = req.body;

        if (!type || !supplier || !availability || !pricePerUnit) {
            return res.status(400).json({ message: 'Type, supplier, availability, and price per unit are required' });
        }

        const validatedTextures = await validateTextures(textures);
        const validatedColorVariants = await validateColorVariants(colorVariants);

        const newMaterial = new Material({
            type,
            textures: validatedTextures,
            colorVariants: validatedColorVariants,
            supplier,
            availability,
            pricePerUnit
        });

        await newMaterial.save();

        res.status(201).json({
            status: 'success',
            message: 'Material created successfully',
            data: newMaterial
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all materials
const getMaterials = async (req, res) => {
    try {
        const materials = await Material.find()
            .populate('textures.thumbnail')
            .populate('textures.patternFile')
            .populate('colorVariants');
        res.status(200).json({
            status: 'success',
            data: materials
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a material by ID
const getMaterialById = async (req, res) => {
    try {
        const material = await Material.findById(req.params.id)
            .populate('textures.thumbnail')
            .populate('textures.patternFile')
            .populate('colorVariants');
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.status(200).json({
            status: 'success',
            data: material
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a material by ID
const updateMaterial = async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }

        const { type, textures, colorVariants, supplier, availability, pricePerUnit } = req.body;

        const validatedTextures = await validateTextures(textures);
        const validatedColorVariants = await validateColorVariants(colorVariants);

        material.type = type || material.type;
        material.textures = validatedTextures || material.textures;
        material.colorVariants = validatedColorVariants || material.colorVariants;
        material.supplier = supplier || material.supplier;
        material.availability = availability || material.availability;
        material.pricePerUnit = pricePerUnit || material.pricePerUnit;

        await material.save();

        res.status(200).json({
            status: 'success',
            message: 'Material updated successfully',
            data: material
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a material by ID
const deleteMaterial = async (req, res) => {
    try {
        const material = await Material.findByIdAndDelete(req.params.id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }

        res.status(200).json({ message: 'Material deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Helper function to validate and populate textures
const validateTextures = async (textures) => {
    if (!textures || typeof textures !== 'object') {
        return {};
    }

    const { name, thumbnail, description, patternFile } = textures;

    if (!name || !thumbnail) {
        throw new Error('Name and thumbnail are required for each texture');
    }

    const validatedThumbnail = await Upload.findById(thumbnail);
    const validatedPatternFile = patternFile ? await Upload.findById(patternFile) : null;

    if (validatedThumbnail) {
        return {
            name,
            thumbnail: validatedThumbnail._id,
            description: description || '',
            patternFile: validatedPatternFile ? validatedPatternFile._id : ''
        };
    } else {
        throw new Error('Invalid texture references');
    }
};

// Helper function to validate and populate color variants
const validateColorVariants = async (colorVariants) => {
    if (!colorVariants || !Array.isArray(colorVariants)) {
        return [];
    }

    const validatedColorVariants = [];
    for (const colorId of colorVariants) {
        const validatedColor = await Color.findById(colorId);

        if (validatedColor) {
            validatedColorVariants.push(validatedColor._id);
        }
    }

    return validatedColorVariants;
};

module.exports = {
    createMaterial,
    getMaterials,
    getMaterialById,
    updateMaterial,
    deleteMaterial
};
