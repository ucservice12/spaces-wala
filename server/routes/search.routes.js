const express = require('express');
const searchController = require('../controllers/search.controller');

const router = express.Router();

// All routes are public
router.get('/', searchController.searchProperties);
router.get('/suggestions', searchController.getSearchSuggestions);
router.get('/popular', searchController.getPopularSearches);
router.get('/stats', searchController.getPropertyStats);

module.exports = router;