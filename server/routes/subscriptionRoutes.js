import express from 'express';
import {
  getSubscriptionPlans,
  createSubscription,
  getMySubscription,
  cancelSubscription,
  getAllSubscriptions,
} from '../controllers/subscriptionController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/plans').get(getSubscriptionPlans);
router.route('/mysub').get(protect, getMySubscription);
router.route('/cancel').put(protect, cancelSubscription);

router.route('/')
  .post(protect, createSubscription)
  .get(protect, admin, getAllSubscriptions);

export default router;