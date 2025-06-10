// Middleware to check if a user is an agent
const agent = (req, res, next) => {
  if (req.user && (req.user.isAgent || req.user.isAdmin)) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an agent');
  }
};

export { agent };