const User = require('../models/user.model');
const AppError = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');
const Property = require('../models/property.model');
const Inquiry = require('../models/inquiry.model');
const Favorite = require('../models/favorite.model');

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    count: users.length,
    data: {
      users
    }
  });
});

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private/Admin
exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError(`User not found with id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {
      user
    }
  });
});

// @desc    Create user
// @route   POST /api/users
// @access  Private/Admin
exports.createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: {
      user
    }
  });
});

// @desc    Update user
// @route   PATCH /api/users/:id
// @access  Private/Admin
exports.updateUser = catchAsync(async (req, res, next) => {
  // Don't allow password updates via this route
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for password updates. Please use /auth/update-password', 400));
  }

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!user) {
    return next(new AppError(`User not found with id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {
      user
    }
  });
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return next(new AppError(`User not found with id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: null
  });
});

// @desc    Update current user profile
// @route   PATCH /api/users/me
// @access  Private
exports.updateMe = catchAsync(async (req, res, next) => {
  // Don't allow password updates via this route
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for password updates. Please use /auth/update-password', 400));
  }

  // Filter out unwanted fields that should not be updated
  const filteredBody = filterObj(req.body, 'name', 'email', 'phone', 'address', 'preferences');

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: {
      user: updatedUser
    }
  });
});

// @desc    Delete current user (set inactive)
// @route   DELETE /api/users/me
// @access  Private
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(200).json({
    success: true,
    data: null
  });
});

// @desc    Get user statistics
// @route   GET /api/users/stats
// @access  Private/Admin
exports.getUserStats = catchAsync(async (req, res, next) => {
  const stats = {};
  
  // Total user count
  stats.totalUsers = await User.countDocuments();
  
  // User roles breakdown
  const roleCounts = await User.aggregate([
    {
      $group: {
        _id: '$role',
        count: { $sum: 1 }
      }
    }
  ]);
  
  stats.roleBreakdown = {};
  roleCounts.forEach(role => {
    stats.roleBreakdown[role._id] = role.count;
  });
  
  // New users in last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  stats.newUsersLastMonth = await User.countDocuments({
    createdAt: { $gte: thirtyDaysAgo }
  });
  
  res.status(200).json({
    success: true,
    data: stats
  });
});

// @desc    Get user properties
// @route   GET /api/users/:id/properties
// @access  Private
exports.getUserProperties = catchAsync(async (req, res, next) => {
  const userId = req.params.id === 'me' ? req.user.id : req.params.id;
  
  // Check if user exists
  const user = await User.findById(userId);
  if (!user) {
    return next(new AppError(`User not found with id of ${userId}`, 404));
  }
  
  // Check permission - only allow users to see their own properties or admins to see any
  if (userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to access this user\'s properties', 403));
  }
  
  const properties = await Property.find({ owner: userId });
  
  res.status(200).json({
    success: true,
    count: properties.length,
    data: {
      properties
    }
  });
});

// Helper function to filter object
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};