import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const propertySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
      type: String,
      required: true,
      enum: ['Apartment', 'House', 'Villa', 'Plot', 'Commercial'],
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    features: {
      bedrooms: { type: Number, default: 0 },
      bathrooms: { type: Number, default: 0 },
      area: { type: Number, required: true }, // in sq.ft
      furnished: { type: Boolean, default: false },
      parking: { type: Boolean, default: false },
      garden: { type: Boolean, default: false },
      balcony: { type: Boolean, default: false },
      securitySystem: { type: Boolean, default: false },
    },
    propertyType: {
      type: String,
      required: true,
      enum: ['Rent', 'Sale'],
    },
    amenities: [
      {
        type: String,
      },
    ],
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      required: true,
      default: false,
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['Available', 'Sold', 'Rented', 'Pending'], 
      default: 'Available',
    },
  });

const Property = mongoose.model('Property', propertySchema);

export default Property;