const express = require('express');
const {
    getAllMeasurements,
    getMeasurement,
    createMeasurement,
    updateMeasurement,
    deleteMeasurement
} = require('../controllers/measurementController');

const router = express.Router();

// GET all Measurements (by type)
router.get('/', getAllMeasurements);

// GET a single Measurement (by type and id)
router.get('/:type/:id', getMeasurement);

// POST a new Measurement (by type)
router.post('/:type', createMeasurement);

// DELETE a Measurement (by type and id)
router.delete('/:type/:id', deleteMeasurement);

// UPDATE a Measurement (by type and id)
router.patch('/:type/:id', updateMeasurement);

module.exports = router;
