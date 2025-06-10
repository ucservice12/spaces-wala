import express from 'express';
import {
  createEnquiry,
  getMyEnquiries,
  getAgentEnquiries,
  updateEnquiry,
  getAllEnquiries,
} from '../controllers/enquiryController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { agent } from '../middleware/agentMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, createEnquiry)
  .get(protect, admin, getAllEnquiries);

router.route('/myenquiries').get(protect, getMyEnquiries);
router.route('/agent').get(protect, agent, getAgentEnquiries);
router.route('/:id').put(protect, agent, updateEnquiry);

export default router;