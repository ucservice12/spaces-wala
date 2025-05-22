const Favorite = require('../models/favorite.model');
const Property = require('../models/property.model');
const AppError = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

// @desc    Get all favorites for current user
// @route   GET /api/favorites
// @access  Private
exports.getMyFavorites = catchAsync(async (req, res, next) => {
  const favorites = await Favorite.find({ user: req.user.id });
  
  res.status(200).json({
    success: true,
    count: favorites.length,
    data: {
      favorites
    }
  });
});

// @desc    Add property to favorites
// @route   POST /api/favorites
// @access  Private
exports.addToFavorites = catchAsync(async (req, res, next) => {
  const { property, notes } = req.body;
  
  if (!property) {
    return next(new AppError('Property ID is required', 400));
  }
  
  // Check if property exists
  const propertyExists = await Property.findById(property);
  if (!propertyExists) {
    return next(new AppError(`Property not found with id of ${property}`, 404));
  }
  
  // Check if already in favorites
  const existingFavorite = await Favorite.findOne({
    user: req.user.id,
    property
  });
  
  if (existingFavorite) {
    return next(new AppError('Property already in favorites', 400));
  }
  
  // Create favorite
  const favorite = await Favorite.create({
    user: req.user.id,
    property,
    notes
  });
  
  res.status(201).json({
    success: true,
    data: {
      favorite
    }
  });
});

// @desc    Remove property from favorites
// @route   DELETE /api/favorites/:id
// @access  Private
exports.removeFromFavorites = catchAsync(async (req, res, next) => {
  const favorite = await Favorite.findById(req.params.id);
  
  if (!favorite) {
    return next(new AppError(`Favorite not found with id of ${req.params.id}`, 404));
  }
  
  // Make sure user owns the favorite
  if (favorite.user.toString() !== req.user.id) {
    return next(new AppError('Not authorized to remove this favorite', 403));
  }
  
  await favorite.deleteOne();
  
  res.status(200).json({
    success: true,
    data: null
  });
});

// @desc    Update favorite notes
// @route   PATCH /api/favorites/:id
// @access  Private
exports.updateFavoriteNotes = catchAsync(async (req, res, next) => {
  const { notes } = req.body;
  
  if (!notes) {
    return next(new AppError('Notes are required', 400));
  }
  
  let favorite = await Favorite.findById(req.params.id);
  
  if (!favorite) {
    return next(new AppError(`Favorite not found with id of ${req.params.id}`, 404));
  }
  
  // Make sure user owns the favorite
  if (favorite.user.toString() !== req.user.id) {
    return next(new AppError('Not authorized to update this favorite', 403));
  }
  
  favorite = await Favorite.findByIdAndUpdate(
    req.params.id,
    { notes },
    { new: true, runValidators: true }
  );
  
  res.status(200).json({
    success: true,
    data: {
      favorite
    }
  });
});

// @desc    Check if property is in user's favorites
// @route   GET /api/favorites/check/:propertyId
// @access  Private
exports.checkFavorite = catchAsync(async (req, res, next) => {
  const favorite = await Favorite.findOne({
    user: req.user.id,
    property: req.params.propertyId
  });
  
  res.status(200).json({
    success: true,
    isFavorite: !!favorite,
    data: favorite ? { favorite } : null
  });
});

// @desc    Get all user's who favorited a property
// @route   GET /api/properties/:propertyId/favorites
// @access  Private
exports.getPropertyFavorites = catchAsync(async (req, res, next) => {
  const property = await Property.findById(req.params.propertyId);
  
  if (!property) {
    return next(new AppError(`Property not found with id of ${req.params.propertyId}`, 404));
  }
  
  // Make sure user is property owner or admin
  if (property.owner._id.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to view these favorites', 403));
  }
  
  const favorites = await Favorite.find({ property: req.params.propertyId })
    .populate({
      path: 'user',
      select: 'name email phone'
    });
  
  res.status(200).json({
    success: true,
    count: favorites.length,
    data: {
      favorites
    }
  });
});