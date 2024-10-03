const express = require('express');
const {
    createMaterial,
    getMaterials,
    getMaterialById,
    updateMaterial,
    deleteMaterial
} = require('../controllers/materialController');

const router = express.Router();

// Define routes for materials
router.post('/', createMaterial); // Create a new material
router.get('/', getMaterials); // Get all materials
router.get('/:id', getMaterialById); // Get material by ID
router.put('/:id', updateMaterial); // Update material by ID
router.delete('/:id', deleteMaterial); // Delete material by ID

module.exports = router;
