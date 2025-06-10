import express from 'express';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { protect } from '../middleware/authMiddleware.js';
import fs from 'fs';
import { fileURLToPath } from 'url';

const router = express.Router();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  },
});

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|webp/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Images only!'));
  }
}

// Initialize upload middleware
const upload = multer({
  storage,
  limits: { fileSize: 5000000 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// @desc    Upload single image
// @route   POST /api/upload
// @access  Private
router.post('/', protect, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  
  const relativePath = `/uploads/${req.file.filename}`;
  res.json({ path: relativePath });
});

// @desc    Upload multiple images (up to 6)
// @route   POST /api/upload/multiple
// @access  Private
router.post('/multiple', protect, upload.array('images', 6), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }
  
  const paths = req.files.map(file => `/uploads/${file.filename}`);
  res.json({ paths });
});

// @desc    Delete an image
// @route   DELETE /api/upload/:filename
// @access  Private
router.delete('/:filename', protect, (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(uploadDir, filename);

  // Check if file exists
  if (!fs.existsSync(filepath)) {
    return res.status(404).json({ message: 'File not found' });
  }

  // Delete the file
  fs.unlinkSync(filepath);
  res.json({ message: 'File deleted successfully' });
});

export default router;