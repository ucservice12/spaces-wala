const User = require('../models/user.model');
const AppError = require('../utils/appError');
const jwtUtils = require('../utils/jwtUtils');
const { catchAsync } = require('../utils/catchAsync');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.register = catchAsync(async (req, res, next) => {
  const { name, email, phone, password, passwordConfirm, role } = req.body;

  // Prevent non-admins from creating admin accounts
  if (role === 'admin') {
    return next(new AppError('You cannot create an admin account', 403));
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(new AppError('Email is already registered', 400));
  }

  // Create new user
  const user = await User.create({
    name,
    email,
    phone,
    password,
    passwordConfirm,
    role: role || 'user' // Default to user role
  });

  // Generate tokens
  const token = jwtUtils.generateToken({ id: user._id });
  const refreshToken = jwtUtils.generateRefreshToken({ id: user._id });

  // Remove password from output
  user.password = undefined;

  res.status(201).json({
    success: true,
    token,
    refreshToken,
    data: {
      user
    }
  });
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  // Check if user exists and password is correct
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // Generate tokens
  const token = jwtUtils.generateToken({ id: user._id });
  const refreshToken = jwtUtils.generateRefreshToken({ id: user._id });

  // Remove password from output
  user.password = undefined;

  res.status(200).json({
    success: true,
    token,
    refreshToken,
    data: {
      user
    }
  });
});

// @desc    Refresh token
// @route   POST /api/auth/refresh-token
// @access  Public
exports.refreshToken = catchAsync(async (req, res, next) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return next(new AppError('Please provide refresh token', 400));
  }

  // Verify refresh token
  const decoded = jwtUtils.verifyRefreshToken(refreshToken);
  if (!decoded) {
    return next(new AppError('Invalid refresh token', 401));
  }

  // Check if user exists
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new AppError('The user belonging to this token no longer exists', 401));
  }

  // Generate new tokens
  const token = jwtUtils.generateToken({ id: user._id });
  const newRefreshToken = jwtUtils.generateRefreshToken({ id: user._id });

  res.status(200).json({
    success: true,
    token,
    refreshToken: newRefreshToken
  });
});

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = catchAsync(async (req, res, next) => {
  // User is already available in req.user due to the protect middleware
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: {
      user
    }
  });
});

// @desc    Update password
// @route   PATCH /api/auth/update-password
// @access  Private
exports.updatePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, password, passwordConfirm } = req.body;

  // Get user from collection
  const user = await User.findById(req.user.id).select('+password');

  // Check current password
  if (!(await user.correctPassword(currentPassword, user.password))) {
    return next(new AppError('Your current password is incorrect', 401));
  }

  // Update password
  user.password = password;
  user.passwordConfirm = passwordConfirm;
  await user.save();

  // Generate new tokens
  const token = jwtUtils.generateToken({ id: user._id });
  const refreshToken = jwtUtils.generateRefreshToken({ id: user._id });

  // Remove password from output
  user.password = undefined;

  res.status(200).json({
    success: true,
    token,
    refreshToken,
    data: {
      user
    }
  });
});

// @desc    Forgot password
// @route   POST /api/auth/forgot-password
// @access  Public
exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with that email address', 404));
  }

  // 2) Generate random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  // In a real application, you would send an email with a link containing the reset token
  // For this example, we'll just return the token

  res.status(200).json({
    success: true,
    message: 'Token sent to email!',
    resetToken // In production, you wouldn't expose this
  });
});

// @desc    Reset password
// @route   PATCH /api/auth/reset-password/:token
// @access  Public
exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3) Update changedPasswordAt property for the user
  // This is handled by the pre-save middleware

  // 4) Log the user in, send JWT
  const token = jwtUtils.generateToken({ id: user._id });
  const refreshToken = jwtUtils.generateRefreshToken({ id: user._id });

  res.status(200).json({
    success: true,
    token,
    refreshToken
  });
});

// @desc    Logout user / clear cookie
// @route   GET /api/auth/logout
// @access  Private
exports.logout = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Successfully logged out'
  });
};