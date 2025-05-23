const Profile = require('../models/profileModel');

/**
 * @desc    Get current user profile
 * @route   GET /api/profile/me
 * @access  Private
 */
const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id }).populate('user', 'name email');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Create or update user profile
 * @route   POST /api/profile
 * @access  Private
 */
const createUpdateProfile = async (req, res) => {
  try {
    const { bio, location, website, twitter, facebook, linkedin, instagram } = req.body;

    // Build profile object
    const profileFields = {
      user: req.user._id,
      bio: bio || '',
      location: location || '',
      website: website || '',
      social: {
        twitter: twitter || '',
        facebook: facebook || '',
        linkedin: linkedin || '',
        instagram: instagram || '',
      },
    };

    // Find and update profile
    let profile = await Profile.findOne({ user: req.user._id });

    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user._id },
        { $set: profileFields },
        { new: true }
      );
    } else {
      // Create
      profile = new Profile(profileFields);
      await profile.save();
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get all profiles
 * @route   GET /api/profile
 * @access  Public
 */
const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', 'name email');
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get profile by user ID
 * @route   GET /api/profile/user/:userId
 * @access  Public
 */
const getProfileByUserId = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId }).populate('user', 'name email');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Delete profile and user
 * @route   DELETE /api/profile
 * @access  Private
 */
const deleteProfile = async (req, res) => {
  try {
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user._id });
    // Remove user
    await User.findByIdAndRemove(req.user._id);

    res.json({ message: 'User and profile deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMyProfile,
  createUpdateProfile,
  getProfiles,
  getProfileByUserId,
  deleteProfile,
};