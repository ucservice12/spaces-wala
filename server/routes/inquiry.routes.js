const express = require('express');
const inquiryController = require('../controllers/inquiry.controller');
const { protect, restrictTo } = require('../middleware/auth.middleware');
const { body } = require('express-validator');
const validate = require('../middleware/validator.middleware');

const router = express.Router();

// All routes require authentication
router.use(protect);

// Get user's inquiries
router.get('/me', inquiryController.getMyInquiries);

// Create inquiry
router.post('/',
  [
    body('property').isMongoId().withMessage('Valid property ID is required'),
    body('message').notEmpty().withMessage('Message is required').isLength({ max: 500 })
      .withMessage('Message cannot be more than 500 characters'),
    body('type').optional().isIn(['viewing', 'question', 'offer', 'other'])
      .withMessage('Invalid inquiry type'),
    body('preferredContactMethod').optional().isIn(['email', 'phone'])
      .withMessage('Contact method must be email or phone')
  ],
  validate,
  inquiryController.createInquiry
);

// Get, reply to, and update specific inquiry
router.route('/:id')
  .get(inquiryController.getInquiry);

// Reply to inquiry
router.post('/:id/replies',
  [
    body('message').notEmpty().withMessage('Reply message is required')
  ],
  validate,
  inquiryController.replyToInquiry
);

// Update inquiry status
router.patch('/:id/status',
  [
    body('status').isIn(['pending', 'replied', 'closed']).withMessage('Invalid status')
  ],
  validate,
  inquiryController.updateInquiryStatus
);

// Admin routes
router.use(restrictTo('admin'));
router.get('/', inquiryController.getAllInquiries);

module.exports = router;