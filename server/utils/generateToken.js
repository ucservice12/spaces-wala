const jwt = require('jsonwebtoken');

/**
 * Generate JWT token with 2 hour expiry
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '2h', // Token expires in 2 hours as per requirement
  });
};

module.exports = generateToken;