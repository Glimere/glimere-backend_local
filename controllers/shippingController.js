const Shipping = require('../models/shippingModel');

// Add Shipping Address
const addShippingAddress = async (req, res) => {
  const { location_name, address, state, city, postalCode, country, phoneNumber } = req.body;

  try {
    let shipping = await Shipping.findOne({ user: req.user._id });

    if (!shipping) {
      shipping = new Shipping({ user: req.user._id, addresses: [] });
    }

    shipping.addresses.push({ location_name, state, address, city, postalCode, country, phoneNumber });
    await shipping.save();

    res.status(201).json(shipping);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Shipping Addresses
const getShippingAddresses = async (req, res) => {
  try {
    const shipping = await Shipping.findOne({ user: req.user._id });

    if (!shipping) {
      return res.status(404).json({ error: 'No shipping addresses found' });
    }

    res.status(200).json(shipping.addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Shipping Address
const updateShippingAddress = async (req, res) => {
  const { addressId } = req.params;
  const { location_name, state, address, city, postalCode, country, phoneNumber } = req.body;

  try {
    const shipping = await Shipping.findOne({ user: req.user._id });

    if (!shipping) {
      return res.status(404).json({ error: 'Shipping addresses not found' });
    }

    const existingAddress = shipping.addresses.id(addressId);

    if (!existingAddress) {
      return res.status(404).json({ error: 'Address not found' });
    }

    // Update fields
    existingAddress.state = state || existingAddress.state;
    existingAddress.location_name = location_name || existingAddress.location_name;
    existingAddress.address = address || existingAddress.address;
    existingAddress.city = city || existingAddress.city;
    existingAddress.postalCode = postalCode || existingAddress.postalCode;
    existingAddress.country = country || existingAddress.country;
    existingAddress.phoneNumber = phoneNumber || existingAddress.phoneNumber;

    await shipping.save();
    res.status(200).json(shipping);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove Shipping Address
const removeShippingAddress = async (req, res) => {
  const { addressId } = req.params;

  try {
    const shipping = await Shipping.findOne({ user: req.user._id });

    if (!shipping) {
      return res.status(404).json({ error: 'Shipping addresses not found' });
    }

    const addressIndex = shipping.addresses.findIndex(
      (address) => address._id.toString() === addressId
    );

    if (addressIndex === -1) {
      return res.status(404).json({ error: 'Address not found' });
    }

    // Remove the address from the array
    shipping.addresses.splice(addressIndex, 1);
    await shipping.save();

    res.status(200).json({ message: 'Address removed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { addShippingAddress, getShippingAddresses, updateShippingAddress, removeShippingAddress };
