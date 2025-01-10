// routes/likeRoutes.js
const express = require('express');
const router = express.Router();
const {
    likeApparel,
    unlikeApparel,
    getApparelLikes,
    getUserLikes
} = require('../controllers/likeController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/like', authMiddleware, likeApparel);
router.post('/unlike', authMiddleware, unlikeApparel);
router.get('/apparel/:apparelId', authMiddleware, getApparelLikes);
router.get('/user/:userId', authMiddleware, getUserLikes);

module.exports = router;
