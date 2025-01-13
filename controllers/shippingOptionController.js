const ShippingOption = require('../models/shippingOptionModel');
const Courier = require('../models/courierModel');

// Create a new shipping option
const createShippingOption = async (req, res) => {
  const { name, description, couriers } = req.body;

  try {
    const newOption = new ShippingOption({ name, description, couriers: couriers });
    const savedOption = await newOption.save();
    res.status(201).json(savedOption);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all shipping options with couriers populated
const getShippingOptions = async (req, res) => {
  try {
    const options = await ShippingOption.find().populate('couriers');
    res.status(200).json(options);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single shipping option with couriers populated
const getShippingOptionById = async (req, res) => {
  const { id } = req.params;

  try {
    const option = await ShippingOption.findById(id).populate('couriers');
    if (!option) {
      return res.status(404).json({ error: 'Shipping option not found' });
    }
    res.status(200).json(option);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a shipping option
const updateShippingOption = async (req, res) => {
  const { id } = req.params;
  const { name, description, couriers } = req.body;

  try {
    const updatedOption = await ShippingOption.findByIdAndUpdate(
      id,
      { name, description, couriers: couriers },
      { new: true }
    ).populate('courier');
    if (!updatedOption) {
      return res.status(404).json({ error: 'Shipping option not found' });
    }
    res.status(200).json(updatedOption);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a shipping option
const deleteShippingOption = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOption = await ShippingOption.findByIdAndDelete(id);
    if (!deletedOption) {
      return res.status(404).json({ error: 'Shipping option not found' });
    }
    res.status(200).json({ message: 'Shipping option deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a courier to a shipping option
const addCourierToOption = async (req, res) => {
  const { id } = req.params;
  const { courierId } = req.body;

  try {
    const courier = await Courier.findById(courierId);
    if (!courier) {
      return res.status(404).json({ error: 'Courier not found' });
    }

    const option = await ShippingOption.findById(id);
    if (!option) {
      return res.status(404).json({ error: 'Shipping option not found' });
    }

    if (!option.courier.includes(courierId)) {
      option.courier.push(courierId);
      await option.save();
    }

    res.status(201).json(option);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a courier in a shipping option
const updateCourierInOption = async (req, res) => {
  const { id, courierId } = req.params;
  const courierData = req.body;

  try {
    const courier = await Courier.findByIdAndUpdate(courierId, courierData, { new: true });
    if (!courier) {
      return res.status(404).json({ error: 'Courier not found' });
    }

    const option = await ShippingOption.findById(id).populate('courier');
    if (!option) {
      return res.status(404).json({ error: 'Shipping option not found' });
    }

    res.status(200).json({ message: 'Courier updated successfully', courier });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a courier from a shipping option
const deleteCourierFromOption = async (req, res) => {
  const { id, courierId } = req.params;

  try {
    const option = await ShippingOption.findById(id);
    if (!option) {
      return res.status(404).json({ error: 'Shipping option not found' });
    }

    const courierIndex = option.courier.indexOf(courierId);
    if (courierIndex === -1) {
      return res.status(404).json({ error: 'Courier not found in this shipping option' });
    }

    option.courier.splice(courierIndex, 1);
    await option.save();

    res.status(200).json({ message: 'Courier removed from shipping option' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createShippingOption,
  getShippingOptions,
  getShippingOptionById,
  updateShippingOption,
  deleteShippingOption,
  addCourierToOption,
  updateCourierInOption,
  deleteCourierFromOption,
};
