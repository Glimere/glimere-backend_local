require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import routes
const apparelRoutes = require('./routes/apparel');
const userRoutes = require('./routes/user'); // Add user routes
const authRoutes = require('./routes/auth');
// const categoryRoutes = require('./routes/categories'); // Add category routes

// Express app
const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:4000',
    // origin: 'https://www.glimere.com',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Default route for root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Glimere API!');
});

// Routes
app.use('/api/apparels', apparelRoutes);
app.use('/api/users', userRoutes); // Add users route
app.use('/api/auth', authRoutes); // Add users route
// app.use('/api/categories', categoryRoutes); // Add categories route

// Connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db & Listening on port ${process.env.PORT}!`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
