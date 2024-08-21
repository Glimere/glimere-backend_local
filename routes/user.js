const express = require('express');

const {
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');


const router = express.Router();

router.use(authMiddleware);

// GET all Users
router.get('/', getUsers);

// GET a single User
router.get('/:id', getUser);

// DELETE a User
router.delete('/:id', deleteUser);

// UPDATE a User
router.patch('/:id', updateUser);

module.exports = router;