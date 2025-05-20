import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';

// Protect routes
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Get token from header or cookies
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies?.token) {
    // Set token from cookie
    token = req.cookies.token;
  }

  // Make sure token exists
  if (!token) {
    res.status(401);
    throw new Error('Not authorized to access this route');
  }

  try {
    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'secret'
    );

    // Get user from the token
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      res.status(401);
      throw new Error('User not found');
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error('Not authorized to access this route');
  }
});

// Grant access to specific roles
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      res.status(401);
      throw new Error('Not authorized to access this route');
    }

    if (!roles.includes(req.user.role)) {
      res.status(403);
      throw new Error(
        `User role ${req.user.role} is not authorized to access this route`
      );
    }
    next();
  };
};
