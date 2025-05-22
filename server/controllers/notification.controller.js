const Notification = require('../models/notification.model');
const AppError = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

// @desc    Get all notifications for current user
// @route   GET /api/notifications
// @access  Private
exports.getMyNotifications = catchAsync(async (req, res, next) => {
  // Add pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;
  
  // Get notifications for current user
  const notifications = await Notification.find({ recipient: req.user.id })
    .sort('-createdAt')
    .skip(skip)
    .limit(limit);
  
  // Get total count
  const total = await Notification.countDocuments({ recipient: req.user.id });
  
  // Get unread count
  const unreadCount = await Notification.countDocuments({
    recipient: req.user.id,
    read: false
  });
  
  res.status(200).json({
    success: true,
    count: notifications.length,
    total,
    unreadCount,
    pagination: {
      page,
      limit,
      pages: Math.ceil(total / limit)
    },
    data: {
      notifications
    }
  });
});

// @desc    Mark notification as read
// @route   PATCH /api/notifications/:id/read
// @access  Private
exports.markAsRead = catchAsync(async (req, res, next) => {
  const notification = await Notification.findById(req.params.id);
  
  if (!notification) {
    return next(new AppError(`Notification not found with id of ${req.params.id}`, 404));
  }
  
  // Make sure user is the recipient
  if (notification.recipient.toString() !== req.user.id) {
    return next(new AppError('Not authorized to update this notification', 403));
  }
  
  notification.read = true;
  await notification.save();
  
  res.status(200).json({
    success: true,
    data: {
      notification
    }
  });
});

// @desc    Mark all notifications as read
// @route   PATCH /api/notifications/read-all
// @access  Private
exports.markAllAsRead = catchAsync(async (req, res, next) => {
  await Notification.updateMany(
    { recipient: req.user.id, read: false },
    { read: true }
  );
  
  res.status(200).json({
    success: true,
    message: 'All notifications marked as read'
  });
});

// @desc    Delete notification
// @route   DELETE /api/notifications/:id
// @access  Private
exports.deleteNotification = catchAsync(async (req, res, next) => {
  const notification = await Notification.findById(req.params.id);
  
  if (!notification) {
    return next(new AppError(`Notification not found with id of ${req.params.id}`, 404));
  }
  
  // Make sure user is the recipient
  if (notification.recipient.toString() !== req.user.id) {
    return next(new AppError('Not authorized to delete this notification', 403));
  }
  
  await notification.deleteOne();
  
  res.status(200).json({
    success: true,
    data: null
  });
});

// @desc    Get unread notification count
// @route   GET /api/notifications/unread-count
// @access  Private
exports.getUnreadCount = catchAsync(async (req, res, next) => {
  const count = await Notification.countDocuments({
    recipient: req.user.id,
    read: false
  });
  
  res.status(200).json({
    success: true,
    data: {
      count
    }
  });
});

// @desc    Create system notification
// @route   POST /api/notifications/system
// @access  Private/Admin
exports.createSystemNotification = catchAsync(async (req, res, next) => {
  const { title, message, recipients } = req.body;
  
  if (!title || !message) {
    return next(new AppError('Title and message are required', 400));
  }
  
  let notificationPromises = [];
  
  // If specific recipients are provided
  if (recipients && recipients.length > 0) {
    notificationPromises = recipients.map(recipient => {
      return Notification.create({
        recipient,
        type: 'system',
        title,
        message,
        sender: req.user.id
      });
    });
  } else {
    // Get all users from notifications collection (unique recipients)
    const allRecipients = await Notification.distinct('recipient');
    
    notificationPromises = allRecipients.map(recipient => {
      return Notification.create({
        recipient,
        type: 'system',
        title,
        message,
        sender: req.user.id
      });
    });
  }
  
  await Promise.all(notificationPromises);
  
  res.status(201).json({
    success: true,
    message: 'System notifications created successfully'
  });
});