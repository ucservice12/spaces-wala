import express from 'express';
import { fetchlocations } from '../controllers/searchRoutes.js';

const router = express.Router();

router.get('/places', fetchlocations);

export default router;
