const Apparel = require('../models/apparelModel')
const mongoose = require('mongoose')

// get all apparel
const getApparels = async (req, res)=> {
    const apparels = await Apparel.find({}).sort({createdAt: -1})

    res.status(200).json(apparels)
}

// get a single apparel
const getApparel = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such apparel'})
    }

    const apparel = await Apparel.findById(id)

    if (!apparel) {
        return res.status(404).json({error: 'No such apparel'})
    }

    res.status(200).json(apparel)
}

// create a new apparel
const createApparel = async (req, res) => {
    const { title, load, reps } = req.body

    try {
        const apparel = await Apparel.create({ title, load, reps })
        res.status(200).json(apparel)
    } catch (error) {
        res.status(400).json({ error: error.message })
    } 
}

// delete a apparel
const deleteApparel = async (req, res)=> {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such apparel'})
    }

    const apparel = await Apparel.findOneAndDelete({_id: id})

    if (!apparel) {
        return res.status(404).json({error: 'No such apparel'})
    }

    res.status(200).json(apparel)
}

// update a apparel
const updateApparel = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such apparel'})
    }

    const apparel = await Apparel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!apparel) {
        return res.status(404).json({error: 'No such apparel'})
    }

    res.status(200).json(apparel)
}

module.exports = {
    createApparel,
    getApparels,
    getApparel,
    deleteApparel,
    updateApparel
}