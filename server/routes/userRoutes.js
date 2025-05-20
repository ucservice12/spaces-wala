import express from 'express';
import {
  registerUser,
  loginUser,
  logout,
  getUserProfile,
  updateUserProfile,
  updatePassword,
  saveProperty,
  unsaveProperty,
} from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);

// Profile routes
router.route('/me')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.put('/updatepassword', protect, updatePassword);

// Saved properties routes
router.route('/save/:propertyId')
  .put(protect, saveProperty)
  .delete(protect, unsaveProperty);

export default router;
