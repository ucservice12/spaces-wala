import asyncHandler from 'express-async-handler';
import Subscription from '../models/subscriptionModel.js';
import User from '../models/userModel.js';

// Subscription plan details
const plans = {
  free: {
    maxListings: 2,
    featuredListings: 0,
    analytics: false,
    prioritySupport: false,
    enhancedVisibility: false,
    price: { amount: 0, currency: 'USD', interval: 'monthly' },
    durationInMonths: 12,
  },
  basic: {
    maxListings: 10,
    featuredListings: 1,
    analytics: false,
    prioritySupport: false,
    enhancedVisibility: false,
    price: { amount: 9.99, currency: 'USD', interval: 'monthly' },
    durationInMonths: 1,
  },
  premium: {
    maxListings: 30,
    featuredListings: 5,
    analytics: true,
    prioritySupport: false,
    enhancedVisibility: true,
    price: { amount: 29.99, currency: 'USD', interval: 'monthly' },
    durationInMonths: 1,
  },
  enterprise: {
    maxListings: 100,
    featuredListings: 20,
    analytics: true,
    prioritySupport: true,
    enhancedVisibility: true,
    price: { amount: 99.99, currency: 'USD', interval: 'monthly' },
    durationInMonths: 1,
  },
};

// @desc    Get subscription plans
// @route   GET /api/subscriptions/plans
// @access  Public
const getSubscriptionPlans = asyncHandler(async (req, res) => {
  res.json(plans);
});

// @desc    Create a subscription
// @route   POST /api/subscriptions
// @access  Private
const createSubscription = asyncHandler(async (req, res) => {
  const { plan, paymentMethod, paymentId, interval } = req.body;

  // Validate plan
  if (!plans[plan]) {
    res.status(400);
    throw new Error('Invalid subscription plan');
  }

  // Calculate end date based on plan duration
  const startDate = new Date();
  const endDate = new Date();
  const durationInMonths = interval === 'yearly' ? 12 : plans[plan].durationInMonths;
  endDate.setMonth(endDate.getMonth() + durationInMonths);

  // Adjust price for yearly subscriptions (10% discount)
  let price = { ...plans[plan].price };
  if (interval === 'yearly') {
    price.amount = parseFloat((price.amount * 12 * 0.9).toFixed(2));
    price.interval = 'yearly';
  }

  // Create the subscription
  const subscription = new Subscription({
    user: req.user._id,
    plan,
    features: {
      maxListings: plans[plan].maxListings,
      featuredListings: plans[plan].featuredListings,
      analytics: plans[plan].analytics,
      prioritySupport: plans[plan].prioritySupport,
      enhancedVisibility: plans[plan].enhancedVisibility,
    },
    price,
    startDate,
    endDate,
    isActive: true,
    paymentMethod: plan === 'free' ? 'free' : paymentMethod,
    paymentId,
    autoRenew: interval === 'yearly' ? false : true,
  });

  // If user already has a subscription, deactivate it
  await Subscription.updateMany(
    { user: req.user._id, isActive: true },
    { isActive: false }
  );

  // Save the new subscription
  const createdSubscription = await subscription.save();

  // Update user to agent if needed
  if (!req.user.isAgent && !req.user.isAdmin) {
    await User.findByIdAndUpdate(req.user._id, { isAgent: true });
  }

  res.status(201).json(createdSubscription);
});

// @desc    Get user's current subscription
// @route   GET /api/subscriptions/mysub
// @access  Private
const getMySubscription = asyncHandler(async (req, res) => {
  const subscription = await Subscription.findOne({
    user: req.user._id,
    isActive: true,
  }).sort({ createdAt: -1 });

  if (!subscription) {
    // If no active subscription, create a free one
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + plans.free.durationInMonths);

    const freeSubscription = new Subscription({
      user: req.user._id,
      plan: 'free',
      features: {
        maxListings: plans.free.maxListings,
        featuredListings: plans.free.featuredListings,
        analytics: plans.free.analytics,
        prioritySupport: plans.free.prioritySupport,
        enhancedVisibility: plans.free.enhancedVisibility,
      },
      price: plans.free.price,
      startDate,
      endDate,
      isActive: true,
      paymentMethod: 'free',
      autoRenew: true,
    });

    const createdSubscription = await freeSubscription.save();
    return res.json(createdSubscription);
  }

  res.json(subscription);
});

// @desc    Cancel subscription
// @route   PUT /api/subscriptions/cancel
// @access  Private
const cancelSubscription = asyncHandler(async (req, res) => {
  const subscription = await Subscription.findOne({
    user: req.user._id,
    isActive: true,
  });

  if (!subscription) {
    res.status(404);
    throw new Error('No active subscription found');
  }

  subscription.isActive = false;
  subscription.autoRenew = false;

  const updatedSubscription = await subscription.save();
  res.json(updatedSubscription);
});

// @desc    Get all subscriptions (admin only)
// @route   GET /api/subscriptions
// @access  Private/Admin
const getAllSubscriptions = asyncHandler(async (req, res) => {
  const pageSize = 20;
  const page = Number(req.query.pageNumber) || 1;
  
  const count = await Subscription.countDocuments({});
  
  const subscriptions = await Subscription.find({})
    .populate('user', 'name email isAgent')
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 });

  res.json({ subscriptions, page, pages: Math.ceil(count / pageSize), total: count });
});

export {
  getSubscriptionPlans,
  createSubscription,
  getMySubscription,
  cancelSubscription,
  getAllSubscriptions,
};