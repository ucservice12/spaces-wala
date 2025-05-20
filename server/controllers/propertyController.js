import asyncHandler from 'express-async-handler';
import Property from '../models/propertyModel';

// @desc    Get all properties with filtering, sorting, pagination
// @route   GET /api/properties
// @access  Public
export const getProperties = asyncHandler(async (req, res) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach(param => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

  // Finding resource
  query = Property.find(JSON.parse(queryStr));

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Property.countDocuments(JSON.parse(queryStr));

  query = query.skip(startIndex).limit(limit);

  // Populate owner details
  query = query.populate({
    path: 'owner',
    select: 'name email phone avatar',
  });

  // Executing query
  const properties = await query;

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.status(200).json({
    success: true,
    count: properties.length,
    pagination,
    total,
    data: properties,
  });
});

// @desc    Get single property
// @route   GET /api/properties/:id
// @access  Public
export const getProperty = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id).populate({
    path: 'owner',
    select: 'name email phone avatar',
  });

  if (!property) {
    res.status(404);
    throw new Error(`Property not found with id of ${req.params.id}`);
  }

  // Increment views
  await Property.findByIdAndUpdate(
    req.params.id,
    { $inc: { views: 1 } },
    { new: true }
  );

  res.status(200).json({
    success: true,
    data: property,
  });
});

// @desc    Create new property
// @route   POST /api/properties
// @access  Private
export const createProperty = asyncHandler(async (req, res) => {
  // Add user to req.body
  req.body.owner = req.user._id;

  const property = await Property.create(req.body);

  res.status(201).json({
    success: true,
    data: property,
  });
});

// @desc    Update property
// @route   PUT /api/properties/:id
// @access  Private
export const updateProperty = asyncHandler(async (req, res) => {
  let property = await Property.findById(req.params.id);

  if (!property) {
    res.status(404);
    throw new Error(`Property not found with id of ${req.params.id}`);
  }

  // Make sure user is property owner or admin
  if (
    property.owner.toString() !== req.user._id.toString() &&
    req.user.role !== 'admin'
  ) {
    res.status(401);
    throw new Error(
      `User ${req.user._id} is not authorized to update this property`
    );
  }

  property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: property,
  });
});

// @desc    Delete property
// @route   DELETE /api/properties/:id
// @access  Private
export const deleteProperty = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    res.status(404);
    throw new Error(`Property not found with id of ${req.params.id}`);
  }

  // Make sure user is property owner or admin
  if (
    property.owner.toString() !== req.user._id.toString() &&
    req.user.role !== 'admin'
  ) {
    res.status(401);
    throw new Error(
      `User ${req.user._id} is not authorized to delete this property`
    );
  }

  await property.deleteOne();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc    Get properties within radius
// @route   GET /api/properties/radius/:zipcode/:distance
// @access  Public
export const getPropertiesInRadius = asyncHandler(async (req, res) => {
  const { zipcode, distance } = req.params;

  // Get lat/lng from geocoder
  // This is a simplified example, in a real app you'd use a geocoding service
  const lat = 40.7128; // Example: New York
  const lng = -74.006;

  // Calc radius using radians
  // Divide dist by radius of Earth (3,963 mi / 6,378 km)
  const radius = parseInt(distance) / 3963;

  const properties = await Property.find({
    'address.location': {
      $geoWithin: { $centerSphere: [[lng, lat], radius] },
    },
  });

  res.status(200).json({
    success: true,
    count: properties.length,
    data: properties,
  });
});

// @desc    Get similar properties
// @route   GET /api/properties/:id/similar
// @access  Public
export const getSimilarProperties = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    res.status(404);
    throw new Error(`Property not found with id of ${req.params.id}`);
  }

  // Find properties with similar type and in the same city
  const similarProperties = await Property.find({
    _id: { $ne: req.params.id },
    type: property.type,
    'address.city': property.address.city,
  })
    .limit(4)
    .populate({
      path: 'owner',
      select: 'name email phone avatar',
    });

  res.status(200).json({
    success: true,
    count: similarProperties.length,
    data: similarProperties,
  });
});

// @desc    Get user properties
// @route   GET /api/properties/user
// @access  Private
export const getUserProperties = asyncHandler(async (req, res) => {
  const properties = await Property.find({ owner: req.user._id });

  res.status(200).json({
    success: true,
    count: properties.length,
    data: properties,
  });
});
