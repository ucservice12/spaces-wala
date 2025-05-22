const Property = require('../models/property.model');
const User = require('../models/user.model');
const AppError = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');
const Notification = require('../models/notification.model');
const cloudinary = require('../utils/cloudinaryUtils');

// @desc    Get all properties
// @route   GET /api/properties
// @access  Public
exports.getAllProperties = catchAsync(async (req, res, next) => {
  let query = {};
  
  // Build filter object
  const {
    type, 
    status, 
    minPrice, 
    maxPrice, 
    minBedrooms, 
    city, 
    state,
    featured
  } = req.query;
  
  if (type) query.type = type;
  if (status) query.status = status;
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }
  if (minBedrooms) query.bedrooms = { $gte: Number(minBedrooms) };
  if (city) query['address.city'] = { $regex: city, $options: 'i' };
  if (state) query['address.state'] = { $regex: state, $options: 'i' };
  if (featured) query.featured = featured === 'true';
  
  // Add pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;
  
  // Add sorting
  let sort = {};
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    sort = sortBy;
  } else {
    sort = '-createdAt'; // Default sort by newest
  }
  
  // Execute query
  const properties = await Property.find(query)
    .sort(sort)
    .skip(skip)
    .limit(limit);
  
  // Get total count for pagination
  const total = await Property.countDocuments(query);
  
  res.status(200).json({
    success: true,
    count: properties.length,
    total,
    pagination: {
      page,
      limit,
      pages: Math.ceil(total / limit)
    },
    data: {
      properties
    }
  });
});

// @desc    Get single property
// @route   GET /api/properties/:id
// @access  Public
exports.getProperty = catchAsync(async (req, res, next) => {
  const property = await Property.findById(req.params.id)
    .populate('inquiries')
    .populate({
      path: 'owner',
      select: 'name email phone avatar'
    });
  
  if (!property) {
    return next(new AppError(`Property not found with id of ${req.params.id}`, 404));
  }
  
  // Increment views
  property.views += 1;
  await property.save({ validateBeforeSave: false });
  
  res.status(200).json({
    success: true,
    data: {
      property
    }
  });
});

// @desc    Create new property
// @route   POST /api/properties
// @access  Private
exports.createProperty = catchAsync(async (req, res, next) => {
  // Add user to req.body
  req.body.owner = req.user.id;
  
  // Create property
  const property = await Property.create(req.body);
  
  res.status(201).json({
    success: true,
    data: {
      property
    }
  });
});

// @desc    Update property
// @route   PATCH /api/properties/:id
// @access  Private
exports.updateProperty = catchAsync(async (req, res, next) => {
  let property = await Property.findById(req.params.id);
  
  if (!property) {
    return next(new AppError(`Property not found with id of ${req.params.id}`, 404));
  }
  
  // Make sure user is property owner or admin
  if (property.owner.id.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError(`User ${req.user.id} is not authorized to update this property`, 403));
  }
  
  // Track if price or status changed for notifications
  const priceChanged = req.body.price && req.body.price !== property.price;
  const statusChanged = req.body.status && req.body.status !== property.status;
  
  // Update property
  property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  
  // Send notifications if price or status changed
  if (priceChanged || statusChanged) {
    // Find users who have favorited this property
    const favoritedBy = await Favorite.find({ property: property._id }).select('user');
    const userIds = favoritedBy.map(fav => fav.user);
    
    // Create notification for each user
    const notificationPromises = userIds.map(userId => {
      let notificationType, notificationTitle, notificationMessage;
      
      if (priceChanged) {
        notificationType = 'price-change';
        notificationTitle = 'Price Update';
        notificationMessage = `The price of ${property.title} has been updated to ${property.price}`;
      } else if (statusChanged) {
        notificationType = 'status-change';
        notificationTitle = 'Status Update';
        notificationMessage = `The status of ${property.title} has been updated to ${property.status}`;
      }
      
      return Notification.create({
        recipient: userId,
        sender: req.user.id,
        type: notificationType,
        title: notificationTitle,
        message: notificationMessage,
        relatedProperty: property._id,
        link: `/properties/${property._id}`
      });
    });
    
    await Promise.all(notificationPromises);
  }
  
  res.status(200).json({
    success: true,
    data: {
      property
    }
  });
});

// @desc    Delete property
// @route   DELETE /api/properties/:id
// @access  Private
exports.deleteProperty = catchAsync(async (req, res, next) => {
  const property = await Property.findById(req.params.id);
  
  if (!property) {
    return next(new AppError(`Property not found with id of ${req.params.id}`, 404));
  }
  
  // Make sure user is property owner or admin
  if (property.owner.id.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError(`User ${req.user.id} is not authorized to delete this property`, 403));
  }
  
  // Set property to inactive instead of deleting
  property.active = false;
  await property.save();
  
  res.status(200).json({
    success: true,
    data: null
  });
});

// @desc    Upload property images
// @route   POST /api/properties/:id/images
// @access  Private
exports.uploadPropertyImages = catchAsync(async (req, res, next) => {
  const property = await Property.findById(req.params.id);
  
  if (!property) {
    return next(new AppError(`Property not found with id of ${req.params.id}`, 404));
  }
  
  // Make sure user is property owner or admin
  if (property.owner.id.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError(`User ${req.user.id} is not authorized to update this property`, 403));
  }
  
  if (!req.files) {
    return next(new AppError('Please upload at least one image', 400));
  }
  
  // Upload images to cloudinary
  const uploadPromises = req.files.map(file => {
    return cloudinary.uploader.upload(file.path, {
      folder: `housing/properties/${property._id}`,
      resource_type: 'image'
    });
  });
  
  const uploadResults = await Promise.all(uploadPromises);
  const imageUrls = uploadResults.map(result => result.secure_url);
  
  // Add new images to property
  property.images = [...property.images, ...imageUrls];
  await property.save();
  
  res.status(200).json({
    success: true,
    data: {
      images: property.images
    }
  });
});

// @desc    Set property as featured
// @route   PATCH /api/properties/:id/featured
// @access  Private/Admin
exports.setFeatured = catchAsync(async (req, res, next) => {
  const { featured } = req.body;
  
  if (featured === undefined) {
    return next(new AppError('Featured status is required', 400));
  }
  
  const property = await Property.findByIdAndUpdate(
    req.params.id,
    { featured },
    { new: true, runValidators: true }
  );
  
  if (!property) {
    return next(new AppError(`Property not found with id of ${req.params.id}`, 404));
  }
  
  res.status(200).json({
    success: true,
    data: {
      property
    }
  });
});

// @desc    Get similar properties
// @route   GET /api/properties/:id/similar
// @access  Public
exports.getSimilarProperties = catchAsync(async (req, res, next) => {
  const property = await Property.findById(req.params.id);
  
  if (!property) {
    return next(new AppError(`Property not found with id of ${req.params.id}`, 404));
  }
  
  // Find properties with similar type, city, and price range
  const similarProperties = await Property.find({
    _id: { $ne: property._id }, // Exclude current property
    type: property.type,
    'address.city': property.address.city,
    price: {
      $gte: property.price * 0.8, // 80% of the price
      $lte: property.price * 1.2  // 120% of the price
    }
  }).limit(4);
  
  res.status(200).json({
    success: true,
    count: similarProperties.length,
    data: {
      properties: similarProperties
    }
  });
});