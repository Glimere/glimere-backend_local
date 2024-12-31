const User = require('../models/userModel'); // Ensure you're using the correct user model
const jwt = require('jsonwebtoken');
const Auth = require('../models/authModel');

const authMiddlewareCart = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.user = await Auth.findById(decoded.userId).select('-password');

        if (!req.user) {
          console.log('Invalid token: User not found');
          return res.status(401).json({ error: 'Invalid token.' });
      }

        next();
    } catch (error) {
        console.log('Token verification failed:', error.message);
        res.status(400).json({ error: 'Invalid token.' });
    }
};

module.exports = authMiddlewareCart;
