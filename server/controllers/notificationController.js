import asyncHandler from 'express-async-handler';
import Notification from '../models/notificationModel.js';

// @desc    Get user's notifications
// @route   GET /api/notifications
// @access  Private
const getNotifications = asyncHandler(async (req, res) => {
  const pageSize = 20;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Notification.countDocuments({ user: req.user._id });
  
  const notifications = await Notification.find({ user: req.user._id })
    .populate('relatedProperty', 'title images')
    .populate('relatedEnquiry', 'message status')
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 });

  res.json({
    notifications,
    page,
    pages: Math.ceil(count / pageSize),
    unreadCount: await Notification.countDocuments({ 
      user: req.user._id,
      isRead: false 
    })
  });
});

// @desc    Mark notification as read
// @route   PUT /api/notifications/:id/read
// @access  Private
const markAsRead = asyncHandler(async (req, res) => {
  const notification = await Notification.findById(req.params.id);

  if (!notification) {
    res.status(404);
    throw new Error('Notification not found');
  }

  // Check if notification belongs to user
  if (notification.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  notification.isRead = true;
  await notification.save();

  res.json({ message: 'Notification marked as read' });
});

// @desc    Mark all notifications as read
// @route   PUT /api/notifications/read-all
// @access  Private
const markAllAsRead = asyncHandler(async (req, res) => {
  await Notification.updateMany(
    { user: req.user._id, isRead: false },
    { isRead: true }
  );

  res.json({ message: 'All notifications marked as read' });
});

// @desc    Delete notification
// @route   DELETE /api/notifications/:id
// @access  Private
const deleteNotification = asyncHandler(async (req, res) => {
  const notification = await Notification.findById(req.params.id);

  if (!notification) {
    res.status(404);
    throw new Error('Notification not found');
  }

  // Check if notification belongs to user
  if (notification.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  await Notification.deleteOne({ _id: req.params.id });
  res.json({ message: 'Notification removed' });
});

// @desc    Delete all read notifications
// @route   DELETE /api/notifications/read
// @access  Private
const deleteReadNotifications = asyncHandler(async (req, res) => {
  await Notification.deleteMany({ 
    user: req.user._id,
    isRead: true 
  });

  res.json({ message: 'All read notifications removed' });
});

// @desc    Get unread notifications count
// @route   GET /api/notifications/unread-count
// @access  Private
const getUnreadCount = asyncHandler(async (req, res) => {
  const count = await Notification.countDocuments({ 
    user: req.user._id,
    isRead: false 
  });

  res.json({ count });
});

export {
  getNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  deleteReadNotifications,
  getUnreadCount,
};