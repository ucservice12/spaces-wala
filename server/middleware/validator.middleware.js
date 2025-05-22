const { validationResult } = require('express-validator');
const AppError = require('../utils/appError');

/**
 * Middleware to check validation results
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return next(new AppError(errorMessages.join('. '), 400));
  }
  next();
};

module.exports = validate;