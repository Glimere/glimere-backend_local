const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Auth = require('../models/authModel');

// Register a new user
const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existingUser = await Auth.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' }); // 409 for conflict
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Auth({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'Registration successful', user }); // 201 for resource created
    } catch (error) {
        next(error); // Forward error to the error-handling middleware
    }
};

// Login with an existing user
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
            expiresIn: '1 hour',
        });

        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        next(error); // Forward error to the error-handling middleware
    }
};

module.exports = {
    registerUser,
    loginUser,
};
