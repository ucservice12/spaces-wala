const express = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { validateRequest } = require('../middleware/validationMiddleware');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    validateRequest,
  ],
  registerUser
);

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    validateRequest,
  ],
  loginUser
);

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get('/me', protect, getUserProfile);

module.exports = router;