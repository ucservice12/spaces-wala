const express = require('express');
const notificationController = require('../controllers/notification.controller');
const { protect, restrictTo } = require('../middleware/auth.middleware');
const { body } = require('express-validator');
const validate = require('../middleware/validator.middleware');

const router = express.Router();

// All routes require authentication
router.use(protect);

// User notification routes
router.get('/', notificationController.getMyNotifications);
router.get('/unread-count', notificationController.getUnreadCount);
router.patch('/read-all', notificationController.markAllAsRead);

router.route('/:id')
  .delete(notificationController.deleteNotification);

router.patch('/:id/read', notificationController.markAsRead);

// Admin only routes
router.post('/system',
  restrictTo('admin'),
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('message').notEmpty().withMessage('Message is required'),
    body('recipients').optional().isArray().withMessage('Recipients must be an array')
  ],
  validate,
  notificationController.createSystemNotification
);

module.exports = router;