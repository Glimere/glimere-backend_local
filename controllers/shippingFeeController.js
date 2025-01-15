const ShippingFee = require("../models/shippingFeeModel");
const ShippingOption = require("../models/shippingOptionModel");

// Create a new shipping fee
const createShippingFee = async (req, res) => {
  const { country, state, city, shipping_option, fee, shipping_type } =
    req.body;

  try {
    const option = await ShippingOption.findById(shipping_option);
    if (!option) {
      return res.status(404).json({ error: "Shipping option not found" });
    }

    const newShippingFee = new ShippingFee({
      country,
      state,
      city,
      shipping_option,
      fee,
      shipping_type,
    });

    const savedFee = await newShippingFee.save();
    res.status(201).json(savedFee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all shipping fees
const getShippingFees = async (req, res) => {
  try {
    const fees = await ShippingFee.find().populate({
      path: "shipping_option",
      populate: {
        path: "couriers",
        model: "Courier", // Reference the Courier model
      },
    });
    res.status(200).json(fees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get shipping fees by ID
const getShippingFeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const fee = await ShippingFee.findById(id).populate({
      path: "shipping_option",
      populate: {
        path: "couriers",
        model: "Courier", // Reference the Courier model
      },
    });
    if (!fee) {
      return res.status(404).json({ error: "Shipping fee not found" });
    }
    res.status(200).json(fee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a shipping fee
const updateShippingFee = async (req, res) => {
  const { id } = req.params;
  const { country, state, city, fee, shipping_type } = req.body;

  try {
    const updatedFee = await ShippingFee.findByIdAndUpdate(
      id,
      { country, state, city, fee, shipping_type },
      { new: true }
    ).populate("shipping_option");

    if (!updatedFee) {
      return res.status(404).json({ error: "Shipping fee not found" });
    }

    res.status(200).json(updatedFee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a shipping fee
const deleteShippingFee = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFee = await ShippingFee.findByIdAndDelete(id);
    if (!deletedFee) {
      return res.status(404).json({ error: "Shipping fee not found" });
    }

    res.status(200).json({ message: "Shipping fee deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getShippingFeeByQuery = async (req, res) => {
  const { country, state, city, shipping_type, shipping_option } = req.query;

  try {
    // Build the query object
    const query = {};
    if (country) query.country = country;
    if (state) query.state = state;
    if (shipping_type) query.shipping_type = shipping_type;

    // Check if shipping_option is a valid ObjectId
    if (shipping_option) {
      if (!mongoose.Types.ObjectId.isValid(shipping_option)) {
        return res.status(400).json({
          status: "error",
          message: "Invalid shipping_option ID",
        });
      }
      query.shipping_option = shipping_option;
    }

    // Fetch matching shipping fees
    const fees = await ShippingFee.find(query).populate({
      path: "shipping_option",
      populate: {
        path: "couriers",
        model: "Courier", // Reference the Courier model
      },
    });
    
    if (!fees.length) {
      return res.status(404).json({ error: "No matching shipping fees found" });
    }

    // Filter by city if provided
    if (city) {
      fees.forEach((fee) => {
        fee.city = fee.city.filter((c) =>
          c.name.toLowerCase().includes(city.toLowerCase())
        );
      });

      // Check if any city matches
      const noCityMatch = fees.every((fee) => fee.city.length === 0);
      if (noCityMatch) {
        return res
          .status(404)
          .json({
            error:
              "No city matches the given input in the specified shipping fees",
          });
      }
    }

    res.status(200).json(fees);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "There was an error",
      data: { error: error.message },
    });
  }
};

// Add multiple cities to a shipping fee
const addMultipleCities = async (req, res) => {
  const { id } = req.params; // ID of the ShippingFee document
  const { cities } = req.body; // Array of cities to add, e.g., [{ name: "Ikeja", fee: 1500 }, { name: "Yaba", fee: 2000 }]

  if (!Array.isArray(cities) || cities.length === 0) {
    return res.status(400).json({ error: "Cities must be a non-empty array." });
  }

  try {
    const shippingFee = await ShippingFee.findById(id);
    if (!shippingFee) {
      return res.status(404).json({ error: "Shipping fee not found." });
    }

    // Add new cities to the `city` array
    shippingFee.city.push(...cities);

    // Save the updated document
    await shippingFee.save();

    res.status(200).json({
      message: "Cities added successfully.",
      updatedShippingFee: shippingFee,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createShippingFee,
  getShippingFees,
  getShippingFeeById,
  updateShippingFee,
  deleteShippingFee,
  getShippingFeeByQuery,
  addMultipleCities,
};
