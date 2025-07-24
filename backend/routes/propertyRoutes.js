import express from 'express';
import multer from 'multer';
import { storage } from '../utils/cloudinary.js';

import { protect } from '../middleware/protect.js';
import { postProperty } from '../controllers/propertyControllers.js';
const upload = multer({ storage });

const router = express.Router();

router.post('/post', protect, upload.array("images", 6), postProperty);

export default router
