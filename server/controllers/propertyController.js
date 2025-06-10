import asyncHandler from 'express-async-handler';
import Property from '../models/propertyModel.js';

// @desc    Fetch all properties
// @route   GET /api/properties
// @access  Public
const getProperties = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
      title: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
    : {};

  const category = req.query.category ? { category: req.query.category } : {};
  const propertyType = req.query.propertyType ? { propertyType: req.query.propertyType } : {};
  const city = req.query.city ? { 'location.city': req.query.city } : {};

  // Price range filter
  const priceFilter = {};
  if (req.query.minPrice) {
    priceFilter.price = { ...priceFilter.price, $gte: Number(req.query.minPrice) };
  }
  if (req.query.maxPrice) {
    priceFilter.price = { ...priceFilter.price, $lte: Number(req.query.maxPrice) };
  }

  // Features filter
  const featuresFilter = {};
  if (req.query.bedrooms) {
    featuresFilter['features.bedrooms'] = { $gte: Number(req.query.bedrooms) };
  }
  if (req.query.bathrooms) {
    featuresFilter['features.bathrooms'] = { $gte: Number(req.query.bathrooms) };
  }
  if (req.query.furnished === 'true') {
    featuresFilter['features.furnished'] = true;
  }

  const count = await Property.countDocuments({
    ...keyword,
    ...category,
    ...propertyType,
    ...city,
    ...priceFilter,
    ...featuresFilter,
  });

  const properties = await Property.find({
    ...keyword,
    ...category,
    ...propertyType,
    ...city,
    ...priceFilter,
    ...featuresFilter,
  })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 });

  res.json({ properties, page, pages: Math.ceil(count / pageSize), total: count });
});

// @desc    Fetch single property
// @route   GET /api/properties/:id
// @access  Public
const getPropertyById = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id).populate('user', 'name email phone');

  if (property) {
    res.json(property);
  } else {
    res.status(404);
    throw new Error('Property not found');
  }
});

// @desc    Create a property
// @route   POST /api/properties
// @access  Private/Admin/Agent
const createProperty = asyncHandler(async (req, res) => {
  const {
    title,
    images,
    category,
    description,
    location,
    price,
    features,
    propertyType,
    amenities,
    dateAdded,
    isVerified,
    status,
  } = req.body;

  const property = new Property({
    user: req.user._id,
    title,
    images: images || ['https://via.placeholder.com/640x480.png?text=Property+Image'],
    category,
    description,
    location,
    price,
    features,
    propertyType,
    amenities,
    dateAdded,
    isVerified,
    status,
    rating: 0,
    numReviews: 0,
    reviews: [],
  });

  const createdProperty = await property.save();
  res.status(201).json(createdProperty);
});

// @desc    Update a property
// @route   PUT /api/properties/:id
// @access  Private/Admin/Agent
const updateProperty = asyncHandler(async (req, res) => {
  const {
    title,
    images,
    category,
    description,
    location,
    price,
    features,
    propertyType,
    amenities,
    isAvailable,
    isFeatured,
  } = req.body;

  const property = await Property.findById(req.params.id);

  if (property) {
    if (property.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      res.status(401);
      throw new Error('User not authorized to update this property');
    }

    property.title = title || property.title;
    property.images = images || property.images;
    property.category = category || property.category;
    property.description = description || property.description;
    property.location = location || property.location;
    property.price = price || property.price;
    property.features = features || property.features;
    property.propertyType = propertyType || property.propertyType;
    property.amenities = amenities || property.amenities;
    property.isAvailable = isAvailable !== undefined ? isAvailable : property.isAvailable;
    property.isFeatured = isFeatured !== undefined ? isFeatured : property.isFeatured;

    const updatedProperty = await property.save();
    res.json(updatedProperty);
  } else {
    res.status(404);
    throw new Error('Property not found');
  }
});

// @desc    Delete a property
// @route   DELETE /api/properties/:id
// @access  Private/Admin/Agent
const deleteProperty = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);

  if (property) {
    if (property.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      res.status(401);
      throw new Error('User not authorized to delete this property');
    }

    await Property.deleteOne({ _id: req.params.id });
    res.json({ message: 'Property removed' });
  } else {
    res.status(404);
    throw new Error('Property not found');
  }
});

// @desc    Create new review
// @route   POST /api/properties/:id/reviews
// @access  Private
const createPropertyReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const property = await Property.findById(req.params.id);

  if (property) {
    const alreadyReviewed = property.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Property already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    property.reviews.push(review);
    property.numReviews = property.reviews.length;
    property.rating =
      property.reviews.reduce((acc, item) => item.rating + acc, 0) / property.reviews.length;

    await property.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Property not found');
  }
});

// @desc    Get top rated properties
// @route   GET /api/properties/top
// @access  Public
const getTopProperties = asyncHandler(async (req, res) => {
  const properties = await Property.find({}).sort({ rating: -1 }).limit(4);

  res.json(properties);
});

// @desc    Get featured properties
// @route   GET /api/properties/featured
// @access  Public
const getFeaturedProperties = asyncHandler(async (req, res) => {
  const properties = await Property.find({ isFeatured: true }).limit(8);

  res.json(properties);
});

export {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  createPropertyReview,
  getTopProperties,
  getFeaturedProperties,
};
