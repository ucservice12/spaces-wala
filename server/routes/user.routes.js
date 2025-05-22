const express = require('express');
const userController = require('../controllers/user.controller');
const { protect, restrictTo } = require('../middleware/auth.middleware');
const { body } = require('express-validator');
const validate = require('../middleware/validator.middleware');

const router = express.Router();

// Apply protect middleware to all routes
router.use(protect);

// Profile routes (for current user)
router.get('/me', userController.getUser);
router.patch('/me', 
  [
    body('name').optional(),
    body('email').optional().isEmail().withMessage('Please provide a valid email'),
    body('phone').optional().matches(/^[0-9]{10}$/).withMessage('Please provide a valid 10-digit phone number')
  ],
  validate,
  userController.updateMe
);
router.delete('/me', userController.deleteMe);

// Admin only routes
router.use(restrictTo('admin'));

router.route('/')
  .get(userController.getAllUsers)
  .post(
    [
      body('name').notEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Please provide a valid email'),
      body('phone').matches(/^[0-9]{10}$/).withMessage('Please provide a valid 10-digit phone number'),
      body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
      body('passwordConfirm').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }
        return true;
      })
    ],
    validate,
    userController.createUser
  );

router.route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// Get user statistics
router.get('/stats', userController.getUserStats);

// Get user properties
router.get('/:id/properties', userController.getUserProperties);

module.exports = router;