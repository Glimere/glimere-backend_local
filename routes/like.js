// routes/likeRoutes.js
const express = require('express');
const router = express.Router();
const {
    likeApparel,
    unlikeApparel,
    getApparelLikes
} = require('../controllers/likeController');
const authMiddleware = require('../middlewares/authMiddlewareAlt');


router.post('/like', authMiddleware, likeApparel);
router.post('/unlike', authMiddleware, unlikeApparel);
router.get('/:apparelId', authMiddleware, getApparelLikes);

module.exports = router;
