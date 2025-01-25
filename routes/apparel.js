const express = require('express');

const {
    createApparel,
    getApparels,
    getApparel,
    deleteApparel,
    updateApparel,
    searchApparels,
    getFeaturedApparels
} = require('../controllers/apparelController')

const router = express.Router();

router.get('/search', searchApparels);

//GET all Apparels
router.get('/', getApparels)
router.get('/featured', getFeaturedApparels)

//GET a single Apparel
router.get('/:id', getApparel)

//POST a new Apparel
router.post('/', createApparel)

//DELETE a new Apparel
router.delete('/:id', deleteApparel)

//UPDATE a new Apparel
router.patch('/:id', updateApparel)

module.exports = router