import asyncHandler from 'express-async-handler';
import Enquiry from '../models/enquiryModel.js';
import Property from '../models/propertyModel.js';

// @desc    Create a new enquiry
// @route   POST /api/enquiries
// @access  Private
const createEnquiry = asyncHandler(async (req, res) => {
  const {
    propertyId,
    message,
    phone,
    email,
    preferredContactMethod,
    preferredViewingTime,
  } = req.body;

  // Check if property exists
  const property = await Property.findById(propertyId);
  
  if (!property) {
    res.status(404);
    throw new Error('Property not found');
  }

  const enquiry = new Enquiry({
    user: req.user._id,
    property: propertyId,
    message,
    phone: phone || req.user.phone,
    email: email || req.user.email,
    preferredContactMethod,
    preferredViewingTime: preferredViewingTime || null,
  });

  const createdEnquiry = await enquiry.save();
  res.status(201).json(createdEnquiry);
});

// @desc    Get user's enquiries
// @route   GET /api/enquiries/myenquiries
// @access  Private
const getMyEnquiries = asyncHandler(async (req, res) => {
  const enquiries = await Enquiry.find({ user: req.user._id })
    .populate('property', 'title images location price')
    .sort({ createdAt: -1 });

  res.json(enquiries);
});

// @desc    Get enquiries for agent's properties
// @route   GET /api/enquiries/agent
// @access  Private/Agent
const getAgentEnquiries = asyncHandler(async (req, res) => {
  // First find all properties of the agent
  const properties = await Property.find({ user: req.user._id }).select('_id');
  const propertyIds = properties.map(prop => prop._id);

  // Then find all enquiries for these properties
  const enquiries = await Enquiry.find({ property: { $in: propertyIds } })
    .populate('property', 'title images location price')
    .populate('user', 'name email phone')
    .sort({ createdAt: -1 });

  res.json(enquiries);
});

// @desc    Update enquiry status
// @route   PUT /api/enquiries/:id
// @access  Private/Agent
const updateEnquiry = asyncHandler(async (req, res) => {
  const { status, agentNotes, isResolved } = req.body;

  const enquiry = await Enquiry.findById(req.params.id);

  if (!enquiry) {
    res.status(404);
    throw new Error('Enquiry not found');
  }

  // Verify the property belongs to the agent
  const property = await Property.findById(enquiry.property);
  
  if (!property) {
    res.status(404);
    throw new Error('Property not found');
  }

  // Check if the user is the property owner or an admin
  if (property.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
    res.status(401);
    throw new Error('Not authorized to update this enquiry');
  }

  enquiry.status = status || enquiry.status;
  enquiry.agentNotes = agentNotes || enquiry.agentNotes;
  enquiry.isResolved = isResolved !== undefined ? isResolved : enquiry.isResolved;

  const updatedEnquiry = await enquiry.save();
  res.json(updatedEnquiry);
});

// @desc    Get all enquiries (admin only)
// @route   GET /api/enquiries
// @access  Private/Admin
const getAllEnquiries = asyncHandler(async (req, res) => {
  const pageSize = 20;
  const page = Number(req.query.pageNumber) || 1;
  
  const count = await Enquiry.countDocuments({});
  
  const enquiries = await Enquiry.find({})
    .populate('property', 'title images location price')
    .populate('user', 'name email')
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 });

  res.json({ enquiries, page, pages: Math.ceil(count / pageSize), total: count });
});

export {
  createEnquiry,
  getMyEnquiries,
  getAgentEnquiries,
  updateEnquiry,
  getAllEnquiries,
};