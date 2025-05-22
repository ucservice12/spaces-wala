/**
 * Catch async errors and pass them to the error handler
 * @param {Function} fn - The async function to catch errors from
 * @returns {Function} The middleware function with error handling
 */
exports.catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};