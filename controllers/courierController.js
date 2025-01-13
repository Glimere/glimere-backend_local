const Courier = require('../models/courierModel');

// Create Courier
const createCourier = async (req, res) => {
  try {
    const courier = new Courier(req.body);
    await courier.save();
    res.status(201).json(courier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Couriers
const getCouriers = async (req, res) => {
  try {
    const couriers = await Courier.find();
    res.status(200).json(couriers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Courier by ID
const getCourierById = async (req, res) => {
  try {
    const courier = await Courier.findById(req.params.id);
    if (!courier) {
      return res.status(404).json({ error: 'Courier not found' });
    }
    res.status(200).json(courier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Courier
const updateCourier = async (req, res) => {
  try {
    const courier = await Courier.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!courier) {
      return res.status(404).json({ error: 'Courier not found' });
    }
    res.status(200).json(courier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Courier
const deleteCourier = async (req, res) => {
  try {
    const courier = await Courier.findByIdAndDelete(req.params.id);
    if (!courier) {
      return res.status(404).json({ error: 'Courier not found' });
    }
    res.status(200).json({ message: 'Courier deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCourier,
  getCouriers,
  getCourierById,
  updateCourier,
  deleteCourier
};
