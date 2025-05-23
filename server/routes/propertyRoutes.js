const express = require('express');
const multer = require('multer');
const { check } = require('express-validator');
const { protect, admin } = require('../middleware/authMiddleware');
const { validateRequest } = require('../middleware/validationMiddleware');
const {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  searchProperties,
} = require('../controllers/propertyController');

const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload only images.'), false);
    }
  },
});

// @route   POST /api/properties
// @desc    Create a new property
// @access  Private
router.post(
  '/',
  [
    protect,
    upload.array('images', 5),
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('propertyType', 'Property type is required').not().isEmpty(),
    check('price', 'Price is required').isNumeric(),
    check('size', 'Size is required').isNumeric(),
    check('location.address', 'Address is required').not().isEmpty(),
    check('location.city', 'City is required').not().isEmpty(),
    check('location.state', 'State is required').not().isEmpty(),
    check('location.pincode', 'Pincode is required').not().isEmpty(),
    check('location.coordinates', 'Coordinates are required').isArray(),
    validateRequest,
  ],
  createProperty
);

// @route   GET /api/properties
// @desc    Get all properties with filters
// @access  Public
router.get('/', getProperties);

// @route   GET /api/properties/search
// @desc    Search properties
// @access  Public
router.get('/search', searchProperties);

// @route   GET /api/properties/:id
// @desc    Get property by ID
// @access  Public
router.get('/:id', getPropertyById);

// @route   PUT /api/properties/:id
// @desc    Update property
// @access  Private
router.put(
  '/:id',
  [
    protect,
    upload.array('images', 5),
    check('title', 'Title is required').optional(),
    check('price', 'Price must be numeric').optional().isNumeric(),
    check('size', 'Size must be numeric').optional().isNumeric(),
    validateRequest,
  ],
  updateProperty
);

// @route   DELETE /api/properties/:id
// @desc    Delete property
// @access  Private
router.delete('/:id', protect, deleteProperty);

module.exports = router;