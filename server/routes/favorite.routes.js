const express = require('express');
const favoriteController = require('../controllers/favorite.controller');
const { protect } = require('../middleware/auth.middleware');
const { body } = require('express-validator');
const validate = require('../middleware/validator.middleware');

const router = express.Router();

// All routes require authentication
router.use(protect);

// Get user's favorites
router.get('/', favoriteController.getMyFavorites);

// Add to favorites
router.post('/',
  [
    body('property').isMongoId().withMessage('Valid property ID is required'),
    body('notes').optional().isLength({ max: 200 }).withMessage('Notes cannot be more than 200 characters')
  ],
  validate,
  favoriteController.addToFavorites
);

// Check if property is in favorites
router.get('/check/:propertyId', favoriteController.checkFavorite);

// Remove from favorites and update notes
router.route('/:id')
  .delete(favoriteController.removeFromFavorites)
  .patch(
    [
      body('notes').notEmpty().withMessage('Notes are required').isLength({ max: 200 })
        .withMessage('Notes cannot be more than 200 characters')
    ],
    validate,
    favoriteController.updateFavoriteNotes
  );

module.exports = router;