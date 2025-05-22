const express = require('express');
const propertyController = require('../controllers/property.controller');
const { protect, restrictTo } = require('../middleware/auth.middleware');
const { body } = require('express-validator');
const validate = require('../middleware/validator.middleware');
const multer = require('multer');

const router = express.Router();

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Public routes
router.get('/', propertyController.getAllProperties);
router.get('/:id', propertyController.getProperty);
router.get('/:id/similar', propertyController.getSimilarProperties);

// Protected routes
router.use(protect);

// Property creation and management
router.post('/',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('type').isIn(['apartment', 'house', 'condo', 'villa', 'land', 'commercial', 'industrial'])
      .withMessage('Valid property type is required'),
    body('status').isIn(['for-sale', 'for-rent', 'sold', 'rented'])
      .withMessage('Valid status is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('size').isNumeric().withMessage('Size must be a number'),
    body('address.street').notEmpty().withMessage('Street address is required'),
    body('address.city').notEmpty().withMessage('City is required'),
    body('address.state').notEmpty().withMessage('State is required'),
    body('address.postalCode').notEmpty().withMessage('Postal code is required')
  ],
  validate,
  propertyController.createProperty
);

router.route('/:id')
  .patch(propertyController.updateProperty)
  .delete(propertyController.deleteProperty);

// Image upload
router.post('/:id/images', upload.array('images', 10), propertyController.uploadPropertyImages);

// Set property as featured (admin only)
router.patch('/:id/featured', restrictTo('admin'), propertyController.setFeatured);

module.exports = router;