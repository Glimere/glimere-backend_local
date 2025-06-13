const CreatorProfile = require('../models/creatorprofileModel');

// Create or update a creator profile
exports.createOrUpdateCreatorProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    // Attach user ID to profile data
    const profileData = {
      ...req.body,
      user: userId
    };

    console.log('profileData', profileData)

    let profile = await CreatorProfile.findOne({ user: userId });

    if (profile) {
      // If profile exists, replace it fully
      await CreatorProfile.deleteOne({ user: userId });
    }

    // Now create new profile
    const newProfile = await CreatorProfile.create(profileData);

    res.status(200).json({
      status: 'success',
      message: 'Profile saved successfully',
      data: newProfile
    });
  } catch (error) {
    console.error('Error saving profile:', error.message);
    res.status(500).json({ status: 'error', error: error.message });
  }
};

// Get logged-in user's creator profile
exports.getMyCreatorProfile = async (req, res) => {
  try {
    const profile = await CreatorProfile.findOne({ user: req.user._id });

    if (!profile) {
      return res.status(404).json({ error: 'Creator profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a creator profile by user ID (admin or public use)
exports.getCreatorProfileByUserId = async (req, res) => {
  try {
    const profile = await CreatorProfile.findOne({ user: req.params.userId });

    if (!profile) {
      return res.status(404).json({ error: 'Creator profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a creator profile
exports.deleteCreatorProfile = async (req, res) => {
  try {
    const result = await CreatorProfile.findOneAndDelete({ user: req.user._id });

    if (!result) {
      return res.status(404).json({ error: 'Creator profile not found' });
    }

    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
