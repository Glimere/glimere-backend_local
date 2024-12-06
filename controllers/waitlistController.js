const Waitlist = require('../models/waitlistModel');

// Create a new waitlist entry
exports.createWaitlistEntry = async (req, res) => {
  try {
    const { name, email, country, purpose, beta_testing } = req.body;

    // Create a new waitlist entry
    const newEntry = new Waitlist({
      name,
      email,
      country,
      purpose,
      beta_testing
    });

    // Save the entry to the database
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all waitlist entries
exports.getAllWaitlistEntries = async (req, res) => {
  try {
    const entries = await Waitlist.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single waitlist entry by ID
exports.getWaitlistEntryById = async (req, res) => {
  try {
    const entry = await Waitlist.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Waitlist entry not found' });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a waitlist entry by ID
exports.updateWaitlistEntryById = async (req, res) => {
  try {
    const { name, email, country, purpose, beta_testing } = req.body;

    // Find the entry by ID and update it
    const updatedEntry = await Waitlist.findByIdAndUpdate(
      req.params.id,
      { name, email, country, purpose, beta_testing },
      { new: true, runValidators: true }
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: 'Waitlist entry not found' });
    }

    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a waitlist entry by ID
exports.deleteWaitlistEntryById = async (req, res) => {
  try {
    const deletedEntry = await Waitlist.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ message: 'Waitlist entry not found' });
    }
    res.status(200).json({ message: 'Waitlist entry deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
