import asyncHandler from 'express-async-handler';
import User from '../models/userModel';

// @desc    Register user
// @route   POST /api/users/register
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    phone,
  });

  if (user) {
    // Generate token
    const token = user.getSignedJwtToken();

    // Set cookie options
    const options = {
      expires: new Date(
        Date.now() + parseInt(process.env.COOKIE_EXPIRE || '30') * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    };

    res
      .status(201)
      .cookie('token', token, options)
      .json({
        success: true,
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          avatar: user.avatar,
        },
      });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  // Generate token
  const token = user.getSignedJwtToken();

  // Set cookie options
  const options = {
    expires: new Date(
      Date.now() + parseInt(process.env.COOKIE_EXPIRE || '30') * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res
    .status(200)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        avatar: user.avatar,
      },
    });
});

// @desc    Logout user / clear cookie
// @route   GET /api/users/logout
// @access  Private
export const logout = asyncHandler(async (req, res) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: 'User logged out successfully',
  });
});

// @desc    Get current logged in user
// @route   GET /api/users/me
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
    .select('-password')
    .populate('savedProperties');

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// @desc    Update user profile
// @route   PUT /api/users/me
// @access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, email, phone, avatar } = req.body;

  // Build update object
  const updateFields = {};
  if (name) updateFields.name = name;
  if (email) updateFields.email = email;
  if (phone) updateFields.phone = phone;
  if (avatar) updateFields.avatar = avatar;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $set: updateFields },
    { new: true, runValidators: true }
  ).select('-password');

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// @desc    Update password
// @route   PUT /api/users/updatepassword
// @access  Private
export const updatePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // Get user
  const user = await User.findById(req.user._id).select('+password');

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Check current password
  const isMatch = await user.matchPassword(currentPassword);

  if (!isMatch) {
    res.status(401);
    throw new Error('Current password is incorrect');
  }

  // Update password
  user.password = newPassword;
  await user.save();

  res.status(200).json({
    success: true,
    message: 'Password updated successfully',
  });
});

// @desc    Save a property to user's saved list
// @route   PUT /api/users/save/:propertyId
// @access  Private
export const saveProperty = asyncHandler(async (req, res) => {
  const propertyId = req.params.propertyId;

  // Check if property already saved
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Check if property is already saved
  if (user.savedProperties.includes(propertyId)) {
    res.status(400);
    throw new Error('Property already saved');
  }

  // Add property to saved list
  user.savedProperties.push(propertyId);
  await user.save();

  res.status(200).json({
    success: true,
    message: 'Property saved successfully',
  });
});

// @desc    Remove a property from user's saved list
// @route   DELETE /api/users/save/:propertyId
// @access  Private
export const unsaveProperty = asyncHandler(async (req, res) => {
  const propertyId = req.params.propertyId;

  // Get user
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Remove property from saved list
  user.savedProperties = user.savedProperties.filter(
    (id) => id.toString() !== propertyId
  );

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Property removed from saved list',
  });
});
