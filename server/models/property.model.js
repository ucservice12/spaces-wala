const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Property title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Property description is required'],
    trim: true
  },
  type: {
    type: String,
    required: [true, 'Property type is required'],
    enum: {
      values: ['apartment', 'house', 'condo', 'villa', 'land', 'commercial', 'industrial'],
      message: 'Type must be apartment, house, condo, villa, land, commercial, or industrial'
    }
  },
  status: {
    type: String,
    required: [true, 'Property status is required'],
    enum: {
      values: ['for-sale', 'for-rent', 'sold', 'rented'],
      message: 'Status must be for-sale, for-rent, sold, or rented'
    }
  },
  price: {
    type: Number,
    required: [true, 'Property price is required']
  },
  size: {
    type: Number,
    required: [true, 'Property size is required']
  },
  bedrooms: {
    type: Number,
    default: 0
  },
  bathrooms: {
    type: Number,
    default: 0
  },
  furnishing: {
    type: String,
    enum: {
      values: ['unfurnished', 'semi-furnished', 'fully-furnished'],
      message: 'Furnishing must be unfurnished, semi-furnished, or fully-furnished'
    },
    default: 'unfurnished'
  },
  constructionYear: Number,
  parkingSpaces: {
    type: Number,
    default: 0
  },
  address: {
    street: {
      type: String,
      required: [true, 'Street address is required']
    },
    city: {
      type: String,
      required: [true, 'City is required']
    },
    state: {
      type: String,
      required: [true, 'State is required']
    },
    postalCode: {
      type: String,
      required: [true, 'Postal code is required']
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      default: 'India'
    },
    location: {
      // GeoJSON Point
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        default: [0, 0]
      }
    }
  },
  features: {
    type: [String],
    default: []
  },
  amenities: {
    type: [String],
    default: []
  },
  images: {
    type: [String],
    default: ['default-property.jpg']
  },
  floorPlans: {
    type: [String],
    default: []
  },
  virtualTour: String,
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Property must belong to a user']
  },
  verified: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  },
  views: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for faster queries
propertySchema.index({ price: 1, status: 1 });
propertySchema.index({ 'address.city': 1, 'address.state': 1 });
propertySchema.index({ 'address.location': '2dsphere' });

// Virtual populate property's inquiries
propertySchema.virtual('inquiries', {
  ref: 'Inquiry',
  foreignField: 'property',
  localField: '_id'
});

// Virtual populate property's favorites count
propertySchema.virtual('favoritesCount', {
  ref: 'Favorite',
  foreignField: 'property',
  localField: '_id',
  count: true
});

// Only find active properties
propertySchema.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});

// Always populate the owner field with basic info
propertySchema.pre(/^find/, function(next) {
  this.populate({
    path: 'owner',
    select: 'name email phone'
  });
  next();
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;