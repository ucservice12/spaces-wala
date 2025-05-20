import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

// Routes
import userRoutes from './routes/userRoutes';
import propertyRoutes from './routes/propertyRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/spaces-wala');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Routes
app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  app.use(express.static(path.join(__dirname, '../dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
  });
}

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
});
