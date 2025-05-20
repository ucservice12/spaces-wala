const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [2000, 'Description cannot be more than 2000 characters'],
    },
    type: {
      type: String,
      required: [true, 'Please specify property type'],
      enum: ['apartment', 'house', 'villa', 'plot', 'commercial', 'pg', 'others'],
    },
    propertyFor: {
      type: String,
      required: [true, 'Please specify if the property is for rent or sale'],
      enum: ['rent', 'sale'],
    },
    category: {
      type: String,
      required: [true, 'Please specify property category'],
      enum: ['residential', 'commercial', 'pg', 'plot'],
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
    },
    pricePerSqFt: {
      type: Number,
    },
    size: {
      type: Number,
      required: [true, 'Please add a size'],
    },
    sizeUnit: {
      type: String,
      required: [true, 'Please specify size unit'],
      enum: ['sqft', 'sqm', 'acre', 'marla', 'yard', 'bigha'],
      default: 'sqft',
    },
    bedrooms: {
      type: Number,
      default: 0,
    },
    bathrooms: {
      type: Number,
      default: 0,
    },
    furnishing: {
      type: String,
      enum: ['unfurnished', 'semi-furnished', 'fully-furnished'],
      default: 'unfurnished',
    },
    constructionStatus: {
      type: String,
      enum: ['under-construction', 'ready-to-move'],
      default: 'ready-to-move',
    },
    possessionBy: {
      type: Date,
    },
    amenities: {
      type: [String],
    },
    features: {
      type: [String],
    },
    address: {
      street: {
        type: String,
        required: [true, 'Please add street address'],
      },
      city: {
        type: String,
        required: [true, 'Please add city'],
      },
      state: {
        type: String,
        required: [true, 'Please add state'],
      },
      zipCode: {
        type: String,
        required: [true, 'Please add zip code'],
      },
      country: {
        type: String,
        required: [true, 'Please add country'],
        default: 'India',
      },
      landmark: String,
      location: {
        type: {
          type: String,
          enum: ['Point'],
          default: 'Point',
        },
        coordinates: {
          type: [Number],
          index: '2dsphere',
        },
      },
    },
    images: {
      type: [String],
      required: [true, 'Please add at least one image'],
    },
    floorPlans: [
      {
        image: String,
        description: String,
      },
    ],
    verificationStatus: {
      type: String,
      enum: ['pending', 'verified', 'rejected'],
      default: 'pending',
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    saves: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Create 2dsphere index for geospatial queries
propertySchema.index({ 'address.location': '2dsphere' });

// Calculate price per square foot before saving
propertySchema.pre('save', function (next) {
  if (this.price && this.size && this.size > 0) {
    this.pricePerSqFt = Math.round((this.price / this.size) * 100) / 100;
  }
  next();
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
