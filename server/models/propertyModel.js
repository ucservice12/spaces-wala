const mongoose = require('mongoose');

const propertySchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
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
    propertyType: {
      type: String,
      required: [true, 'Please specify property type'],
      enum: ['apartment', 'house', 'villa', 'plot', 'commercial'],
    },
    status: {
      type: String,
      required: true,
      enum: ['for-sale', 'for-rent'],
      default: 'for-sale',
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
    },
    priceUnit: {
      type: String,
      enum: ['total', 'per-sqft'],
      default: 'total',
    },
    size: {
      type: Number,
      required: [true, 'Please add property size'],
    },
    sizeUnit: {
      type: String,
      enum: ['sqft', 'sqm', 'acres'],
      default: 'sqft',
    },
    bedrooms: {
      type: Number,
      required: function() {
        return ['apartment', 'house', 'villa'].includes(this.propertyType);
      },
    },
    bathrooms: {
      type: Number,
      required: function() {
        return ['apartment', 'house', 'villa'].includes(this.propertyType);
      },
    },
    furnishing: {
      type: String,
      enum: ['unfurnished', 'semi-furnished', 'fully-furnished'],
      default: 'unfurnished',
    },
    location: {
      address: {
        type: String,
        required: [true, 'Please add an address'],
      },
      city: {
        type: String,
        required: [true, 'Please add a city'],
      },
      state: {
        type: String,
        required: [true, 'Please add a state'],
      },
      country: {
        type: String,
        required: [true, 'Please add a country'],
        default: 'India',
      },
      pincode: {
        type: String,
        required: [true, 'Please add a pincode'],
      },
      coordinates: {
        type: {
          type: String,
          enum: ['Point'],
          default: 'Point',
        },
        coordinates: {
          type: [Number],
          required: true,
          index: '2dsphere',
        },
      },
    },
    amenities: [{
      type: String,
      enum: [
        'parking', 'lift', 'security', 'garden', 'swimming-pool',
        'gym', 'power-backup', 'gas-pipeline', 'club-house',
        'children-play-area', 'sports-facility'
      ],
    }],
    images: [{
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    }],
    isVerified: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    availableFrom: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Index for text search
propertySchema.index({
  title: 'text',
  description: 'text',
  'location.address': 'text',
  'location.city': 'text',
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;