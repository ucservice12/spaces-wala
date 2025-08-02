import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import userRouters from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import propertyRoutes from "./routes/propertyRoutes.js"
import searchRoutes from './routes/searchRoutes.js'
import shareRoutes from './routes/shareRoutes.js'

import { dbconnection } from './database/dbconnection.js';

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to DB
dbconnection();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const allowedOrigins = ['http://localhost:5173', 'http://localhost:3001', 'http://localhost:5174', 'https://spaceswala.com'];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

// Routes
app.get('/', (req, res) => {
    res.send("Spaces-wala API");
});

app.use("/api/user", userRouters);
app.use("/api/auth", authRoutes);
app.use("/api/property", propertyRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/share', shareRoutes)
// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
