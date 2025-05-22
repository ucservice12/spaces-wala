const Property = require('../models/property.model');
const { catchAsync } = require('../utils/catchAsync');

// @desc    Search properties
// @route   GET /api/search
// @access  Public
exports.searchProperties = catchAsync(async (req, res, next) => {
  const {
    keyword,
    type,
    status,
    minPrice,
    maxPrice,
    minBedrooms,
    minBathrooms,
    city,
    state,
    features,
    amenities,
    furnishing,
    sort
  } = req.query;
  
  // Build query object
  let query = {};
  
  // Keyword search (searches in title and description)
  if (keyword) {
    query.$or = [
      { title: { $regex: keyword, $options: 'i' } },
      { description: { $regex: keyword, $options: 'i' } }
    ];
  }
  
  // Filter by type
  if (type) {
    query.type = type;
  }
  
  // Filter by status
  if (status) {
    query.status = status;
  }
  
  // Price range
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }
  
  // Bedrooms and bathrooms
  if (minBedrooms) query.bedrooms = { $gte: Number(minBedrooms) };
  if (minBathrooms) query.bathrooms = { $gte: Number(minBathrooms) };
  
  // Location filters
  if (city) query['address.city'] = { $regex: city, $options: 'i' };
  if (state) query['address.state'] = { $regex: state, $options: 'i' };
  
  // Features and amenities
  if (features) {
    const featuresList = features.split(',');
    query.features = { $all: featuresList };
  }
  
  if (amenities) {
    const amenitiesList = amenities.split(',');
    query.amenities = { $all: amenitiesList };
  }
  
  // Furnishing status
  if (furnishing) {
    query.furnishing = furnishing;
  }
  
  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;
  
  // Sorting
  let sortOption = '-createdAt'; // Default sort by newest
  
  if (sort) {
    // Map sort options to actual fields
    const sortMapping = {
      'newest': '-createdAt',
      'oldest': 'createdAt',
      'price-low': 'price',
      'price-high': '-price',
      'size-low': 'size',
      'size-high': '-size'
    };
    
    sortOption = sortMapping[sort] || '-createdAt';
  }
  
  // Execute query
  const properties = await Property.find(query)
    .sort(sortOption)
    .skip(skip)
    .limit(limit);
  
  // Get total count
  const total = await Property.countDocuments(query);
  
  res.status(200).json({
    success: true,
    count: properties.length,
    total,
    pagination: {
      page,
      limit,
      pages: Math.ceil(total / limit)
    },
    data: {
      properties
    }
  });
});

// @desc    Get search suggestions
// @route   GET /api/search/suggestions
// @access  Public
exports.getSearchSuggestions = catchAsync(async (req, res, next) => {
  const { keyword } = req.query;
  
  if (!keyword) {
    return res.status(200).json({
      success: true,
      data: {
        suggestions: []
      }
    });
  }
  
  // Find properties with matching title, city, or state
  const properties = await Property.find({
    $or: [
      { title: { $regex: keyword, $options: 'i' } },
      { 'address.city': { $regex: keyword, $options: 'i' } },
      { 'address.state': { $regex: keyword, $options: 'i' } }
    ]
  }).limit(5).select('title address.city address.state');
  
  // Extract suggestions
  const titleSuggestions = properties.map(p => p.title);
  const locationSuggestions = properties.map(p => `${p.address.city}, ${p.address.state}`);
  
  // Remove duplicates
  const suggestions = [...new Set([...titleSuggestions, ...locationSuggestions])].slice(0, 5);
  
  res.status(200).json({
    success: true,
    data: {
      suggestions
    }
  });
});

// @desc    Get popular searches
// @route   GET /api/search/popular
// @access  Public
exports.getPopularSearches = catchAsync(async (req, res, next) => {
  // This would typically be based on analytics or stored popular searches
  // For this example, we'll return popular cities
  
  // Find the cities with the most properties
  const popularCities = await Property.aggregate([
    {
      $group: {
        _id: '$address.city',
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } },
    { $limit: 5 }
  ]);
  
  const popularSearches = popularCities.map(city => city._id);
  
  res.status(200).json({
    success: true,
    data: {
      popularSearches
    }
  });
});

// @desc    Get property stats
// @route   GET /api/search/stats
// @access  Public
exports.getPropertyStats = catchAsync(async (req, res, next) => {
  const stats = {};
  
  // Total properties count
  stats.totalProperties = await Property.countDocuments();
  
  // Properties by type
  const typeStats = await Property.aggregate([
    {
      $group: {
        _id: '$type',
        count: { $sum: 1 }
      }
    }
  ]);
  
  stats.byType = {};
  typeStats.forEach(type => {
    stats.byType[type._id] = type.count;
  });
  
  // Properties by status
  const statusStats = await Property.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 }
      }
    }
  ]);
  
  stats.byStatus = {};
  statusStats.forEach(status => {
    stats.byStatus[status._id] = status.count;
  });
  
  // Average price
  const priceStats = await Property.aggregate([
    {
      $group: {
        _id: null,
        avgPrice: { $avg: '$price' }
      }
    }
  ]);
  
  stats.averagePrice = priceStats.length > 0 ? priceStats[0].avgPrice : 0;
  
  res.status(200).json({
    success: true,
    data: stats
  });
});