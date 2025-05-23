const express = require('express');
const { getMyProfile, createUpdateProfile, getProfiles, getProfileByUserId, deleteProfile } = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// @route   GET /api/profile/me
// @desc    Get current user profile
// @access  Private
router.get('/me', protect, getMyProfile);

// @route   POST /api/profile
// @desc    Create or update user profile
// @access  Private
router.post('/', protect, createUpdateProfile);

// @route   GET /api/profile
// @desc    Get all profiles
// @access  Public
router.get('/', getProfiles);

// @route   GET /api/profile/user/:userId
// @desc    Get profile by user ID
// @access  Public
router.get('/user/:userId', getProfileByUserId);

// @route   DELETE /api/profile
// @desc    Delete profile and user
// @access  Private
router.delete('/', protect, deleteProfile);

module.exports = router;