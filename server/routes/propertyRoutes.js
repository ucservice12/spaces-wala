import express from 'express';
import {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
  getPropertiesInRadius,
  getSimilarProperties,
  getUserProperties,
} from '../controllers/propertyController';
import { protect, authorize } from '../middleware/authMiddleware';

const router = express.Router();

// Get all properties and create a new property
router
  .route('/')
  .get(getProperties)
  .post(protect, createProperty);

// Get properties within a radius
router.route('/radius/:zipcode/:distance').get(getPropertiesInRadius);

// Get user properties
router.route('/user').get(protect, getUserProperties);

// Get, update, and delete property by ID
router
  .route('/:id')
  .get(getProperty)
  .put(protect, updateProperty)
  .delete(protect, deleteProperty);

// Get similar properties
router.route('/:id/similar').get(getSimilarProperties);

export default router;
