import mongoose from 'mongoose';

const subscriptionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    plan: {
      type: String,
      required: true,
      enum: ['free', 'basic', 'premium', 'enterprise'],
      default: 'free',
    },
    features: {
      maxListings: { type: Number, required: true },
      featuredListings: { type: Number, required: true },
      analytics: { type: Boolean, default: false },
      prioritySupport: { type: Boolean, default: false },
      enhancedVisibility: { type: Boolean, default: false },
    },
    price: {
      amount: { type: Number, required: true },
      currency: { type: String, default: 'USD' },
      interval: { type: String, enum: ['monthly', 'yearly'], default: 'monthly' },
    },
    startDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    endDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    paymentMethod: {
      type: String,
      enum: ['credit_card', 'paypal', 'bank_transfer', 'free'],
      default: 'free',
    },
    paymentId: {
      type: String,
    },
    autoRenew: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;