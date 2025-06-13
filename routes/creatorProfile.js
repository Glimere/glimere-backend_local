const express = require('express');
const {
  createOrUpdateCreatorProfile,
  getMyCreatorProfile,
  getCreatorProfileByUserId,
  deleteCreatorProfile
} = require('../controllers/creatorProfileController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createOrUpdateCreatorProfile);

router.get('/me', authMiddleware, getMyCreatorProfile);

router.get('/:userId', getCreatorProfileByUserId);

router.delete('/', authMiddleware, deleteCreatorProfile);

module.exports = router;
