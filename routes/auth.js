const express = require('express');

const {
    registerUser,
    loginUser
} = require('../controllers/authController');

const router = express.Router();

// POST a new User
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);


module.exports = router;
