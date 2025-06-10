import express from 'express';
import {
  getPropertyAnalytics,
  getUserAnalytics,
} from '../controllers/analyticsController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/properties').get(protect, admin, getPropertyAnalytics);
router.route('/users').get(protect, admin, getUserAnalytics);

export default router;