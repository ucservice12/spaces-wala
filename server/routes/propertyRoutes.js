import express from 'express';
import {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  createPropertyReview,
  getTopProperties,
  getFeaturedProperties,
} from '../controllers/propertyController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProperties).post(protect, createProperty);
router.get('/top', getTopProperties);
router.get('/featured', getFeaturedProperties);
router
  .route('/:id')
  .get(getPropertyById)
  .put(protect, updateProperty)
  .delete(protect, deleteProperty);
router.route('/:id/reviews').post(protect, createPropertyReview);

export default router;