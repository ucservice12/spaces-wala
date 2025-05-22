const Inquiry = require('../models/inquiry.model');
const Property = require('../models/property.model');
const User = require('../models/user.model');
const AppError = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');
const Notification = require('../models/notification.model');

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
exports.getAllInquiries = catchAsync(async (req, res, next) => {
  // Allow filtering by status
  let query = {};
  if (req.query.status) {
    query.status = req.query.status;
  }
  
  const inquiries = await Inquiry.find(query);
  
  res.status(200).json({
    success: true,
    count: inquiries.length,
    data: {
      inquiries
    }
  });
});

// @desc    Get single inquiry
// @route   GET /api/inquiries/:id
// @access  Private
exports.getInquiry = catchAsync(async (req, res, next) => {
  const inquiry = await Inquiry.findById(req.params.id);
  
  if (!inquiry) {
    return next(new AppError(`Inquiry not found with id of ${req.params.id}`, 404));
  }
  
  // Make sure user is inquiry sender, property owner, or admin
  if (
    inquiry.user._id.toString() !== req.user.id &&
    inquiry.property.owner._id.toString() !== req.user.id &&
    req.user.role !== 'admin'
  ) {
    return next(new AppError('Not authorized to access this inquiry', 403));
  }
  
  // Mark as read if property owner or admin is viewing
  if (
    inquiry.property.owner._id.toString() === req.user.id ||
    req.user.role === 'admin'
  ) {
    inquiry.read = true;
    await inquiry.save({ validateBeforeSave: false });
  }
  
  res.status(200).json({
    success: true,
    data: {
      inquiry
    }
  });
});

// @desc    Create new inquiry
// @route   POST /api/inquiries
// @access  Private
exports.createInquiry = catchAsync(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;
  
  // Check if property exists
  const property = await Property.findById(req.body.property);
  if (!property) {
    return next(new AppError(`Property not found with id of ${req.body.property}`, 404));
  }
  
  // Create inquiry
  const inquiry = await Inquiry.create(req.body);
  
  // Create notification for property owner
  await Notification.create({
    recipient: property.owner._id,
    sender: req.user.id,
    type: 'property-inquiry',
    title: 'New Property Inquiry',
    message: `You have a new inquiry for ${property.title}`,
    relatedProperty: property._id,
    relatedInquiry: inquiry._id,
    link: `/inquiries/${inquiry._id}`
  });
  
  res.status(201).json({
    success: true,
    data: {
      inquiry
    }
  });
});

// @desc    Reply to inquiry
// @route   POST /api/inquiries/:id/replies
// @access  Private
exports.replyToInquiry = catchAsync(async (req, res, next) => {
  const inquiry = await Inquiry.findById(req.params.id);
  
  if (!inquiry) {
    return next(new AppError(`Inquiry not found with id of ${req.params.id}`, 404));
  }
  
  // Make sure user is inquiry sender or property owner
  if (
    inquiry.user._id.toString() !== req.user.id &&
    inquiry.property.owner._id.toString() !== req.user.id &&
    req.user.role !== 'admin'
  ) {
    return next(new AppError('Not authorized to reply to this inquiry', 403));
  }
  
  // Add reply
  const reply = {
    user: req.user.id,
    message: req.body.message
  };
  
  inquiry.replies.push(reply);
  inquiry.status = 'replied';
  
  // Save the updated inquiry
  await inquiry.save();
  
  // Create notification for the other party
  const recipient = 
    inquiry.user._id.toString() === req.user.id
      ? inquiry.property.owner._id
      : inquiry.user._id;
  
  await Notification.create({
    recipient,
    sender: req.user.id,
    type: 'inquiry-reply',
    title: 'New Reply to Your Inquiry',
    message: `There is a new reply to the inquiry about ${inquiry.property.title}`,
    relatedProperty: inquiry.property._id,
    relatedInquiry: inquiry._id,
    link: `/inquiries/${inquiry._id}`
  });
  
  // Get fresh data with populated fields
  const updatedInquiry = await Inquiry.findById(req.params.id);
  
  res.status(200).json({
    success: true,
    data: {
      inquiry: updatedInquiry
    }
  });
});

// @desc    Update inquiry status
// @route   PATCH /api/inquiries/:id/status
// @access  Private
exports.updateInquiryStatus = catchAsync(async (req, res, next) => {
  const { status } = req.body;
  
  if (!status) {
    return next(new AppError('Status is required', 400));
  }
  
  let inquiry = await Inquiry.findById(req.params.id);
  
  if (!inquiry) {
    return next(new AppError(`Inquiry not found with id of ${req.params.id}`, 404));
  }
  
  // Make sure user is property owner or admin
  if (
    inquiry.property.owner._id.toString() !== req.user.id &&
    req.user.role !== 'admin'
  ) {
    return next(new AppError('Not authorized to update this inquiry', 403));
  }
  
  // Update status
  inquiry.status = status;
  await inquiry.save();
  
  // Refresh to get populated data
  inquiry = await Inquiry.findById(req.params.id);
  
  res.status(200).json({
    success: true,
    data: {
      inquiry
    }
  });
});

// @desc    Get user's inquiries
// @route   GET /api/inquiries/me
// @access  Private
exports.getMyInquiries = catchAsync(async (req, res, next) => {
  const inquiries = await Inquiry.find({ user: req.user.id });
  
  res.status(200).json({
    success: true,
    count: inquiries.length,
    data: {
      inquiries
    }
  });
});

// @desc    Get property inquiries
// @route   GET /api/properties/:propertyId/inquiries
// @access  Private
exports.getPropertyInquiries = catchAsync(async (req, res, next) => {
  const property = await Property.findById(req.params.propertyId);
  
  if (!property) {
    return next(new AppError(`Property not found with id of ${req.params.propertyId}`, 404));
  }
  
  // Make sure user is property owner or admin
  if (property.owner._id.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to view these inquiries', 403));
  }
  
  const inquiries = await Inquiry.find({ property: req.params.propertyId });
  
  res.status(200).json({
    success: true,
    count: inquiries.length,
    data: {
      inquiries
    }
  });
});