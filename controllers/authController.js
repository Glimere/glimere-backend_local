const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Auth = require('../models/authModel');
const User = require('../models/userModel'); // Assuming this is the correct path

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ userId: id }, process.env.SECRET_KEY, {
        expiresIn: '1h',
    });
};

// Register User
const registerUser = async (req, res) => {
    const { username, email, password, phone_number } = req.body;

    try {
        // Check if user exists
        const existingUser = await Auth.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in the Auth collection
        const userAuth = new Auth({
            username,
            email,
            password: hashedPassword,
            phone_number,
        });
        await userAuth.save();

        // Create corresponding user in the User collection
        const user = new User({
            user_id: userAuth._id, 
            first_name: '', // Assuming this will be updated later
            last_name: '',  // Assuming this will be updated later
            email,
            phone_number,
            address: {
                street: '', // Assuming this will be updated later
                city: '',   // Assuming this will be updated later
                state: '',  // Assuming this will be updated later
                postal_code: '', // Assuming this will be updated later
                country: '' // Assuming this will be updated later
            }
        });
        await user.save();

        res.status(201).json({
            _id: userAuth._id,
            username: userAuth.username,
            email: userAuth.email,
            role: userAuth.role,
            token: generateToken(userAuth._id),
            message: 'Registration successful',
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login User
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check for user email
        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // Generate token
        const token = generateToken(user._id);

        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            token,
            message: 'Login successful',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
};
