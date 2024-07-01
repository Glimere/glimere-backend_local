require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/apparel')

// express app
const app = express()

// Middleware
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:4000',
    // origin: 'https://www.glimere.com',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen for requests 
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & Listening on port 4000!')
        })
    })
    .catch((error) => {
        console.log(error)
    })


