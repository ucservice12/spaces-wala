import asyncHandler from 'express-async-handler';
import Property from '../models/propertyModel.js';
import User from '../models/userModel.js';

// @desc    Get property analytics (counts by category, type, etc.)
// @route   GET /api/analytics/properties
// @access  Private/Admin
const getPropertyAnalytics = asyncHandler(async (req, res) => {
  // Get counts by category
  const categoryCounts = await Property.aggregate([
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 },
    },
  ]);

  // Get counts by property type
  const propertyTypeCounts = await Property.aggregate([
    {
      $group: {
        _id: '$propertyType',
        count: { $sum: 1 },
      },
    },
  ]);

  // Get counts by city
  const cityCounts = await Property.aggregate([
    {
      $group: {
        _id: '$location.city',
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $limit: 10,
    },
  ]);

  // Get counts by availability
  const availabilityCounts = await Property.aggregate([
    {
      $group: {
        _id: '$isAvailable',
        count: { $sum: 1 },
      },
    },
  ]);

  // Get price ranges
  const priceStats = await Property.aggregate([
    {
      $group: {
        _id: null,
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
  ]);

  // Get recent activity (new listings in the last month)
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  const recentActivity = await Property.countDocuments({
    createdAt: { $gte: lastMonth },
  });

  res.json({
    categoryCounts,
    propertyTypeCounts,
    cityCounts,
    availabilityCounts,
    priceStats: priceStats[0] || {},
    recentActivity,
  });
});

// @desc    Get user analytics (counts by role, etc.)
// @route   GET /api/analytics/users
// @access  Private/Admin
const getUserAnalytics = asyncHandler(async (req, res) => {
  // Total users count
  const totalUsers = await User.countDocuments();

  // Count by role
  const roleCounts = {
    admin: await User.countDocuments({ isAdmin: true }),
    agent: await User.countDocuments({ isAgent: true, isAdmin: false }),
    regular: await User.countDocuments({ isAgent: false, isAdmin: false }),
  };

  // New users in last month
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  
  const newUsers = await User.countDocuments({
    createdAt: { $gte: lastMonth },
  });

  // User activity - favorites count
  const favoriteStats = await User.aggregate([
    {
      $project: {
        favoritesCount: { $size: '$favorites' },
      },
    },
    {
      $group: {
        _id: null,
        totalFavorites: { $sum: '$favoritesCount' },
        avgFavorites: { $avg: '$favoritesCount' },
        maxFavorites: { $max: '$favoritesCount' },
      },
    },
  ]);

  res.json({
    totalUsers,
    roleCounts,
    newUsers,
    favoriteStats: favoriteStats[0] || {},
  });
});

export { getPropertyAnalytics, getUserAnalytics };