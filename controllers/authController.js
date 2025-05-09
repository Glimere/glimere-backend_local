const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Auth = require('../models/authModel');
const User = require('../models/userModel');
const mongoose = require("mongoose");

// Generate JWT Token
const generateToken = (user) => {
    const { _id, first_name, last_name, email, phone_number, role, address } = user;
    return jwt.sign(
        {
            _id,
            first_name,
            last_name,
            email,
            phone_number,
            role,
            address,
        },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
};


// Register User
const registerUser = async (req, res) => {
    const {first_name, last_name, email, password, phone_number, role, address } = req.body;

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
            _id: new mongoose.Types.ObjectId(),
            first_name,
            last_name, 
            email,
            password: hashedPassword,
            phone_number,
            role,
            address,
        });
        await userAuth.save();

        const user = new User({
            _id: userAuth._id,
            user_id: userAuth._id,
            first_name,
            last_name, 
            email,
            phone_number,
            address: {
                street: address?.street || '', 
                city: address?.city || '', 
                state: address?.state || '',
                postal_code: address?.postal_code || '',
                country: address?.country || '',
                nearest_bus_stop: address?.nearest_bus_stop || '',
            }
        });
        await user.save();

        res.status(201).json({
            _id: userAuth._id,
            username: userAuth.username,
            email: userAuth.email,
            role: userAuth.role,
            token: generateToken(userAuth),
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
        const token = generateToken(user);

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
