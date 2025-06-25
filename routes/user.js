const express = require('express');

const {
    getCurrentUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const admin = require("../middlewares/authMiddleware");


const router = express.Router();

router.use(auth);

router.get("/me", auth, getCurrentUser);

// GET all Users
router.get('/', admin, getUsers);

// GET a single User
router.get('/:id', getUser);

// DELETE a User
router.delete('/:id', auth, deleteUser);

// UPDATE a User
router.patch('/:id', admin, updateUser);

module.exports = router;