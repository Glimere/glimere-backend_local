const jwt = require('jsonwebtoken');
const Auth = require('../models/authModel');

const authMiddleware = async (req, res, next) => {
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

        // Grant full access if the user is a super_admin
        if (req.user.role === 'super_admin') {
            req.isSuperAdmin = true; // Set a flag for later use
        }

        next();
    } catch (error) {
        console.log('Token verification failed:', error.message);
        res.status(400).json({ error: 'Invalid token.' });
    }
};

module.exports = authMiddleware;
