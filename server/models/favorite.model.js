const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Favorite must belong to a user']
  },
  property: {
    type: mongoose.Schema.ObjectId,
    ref: 'Property',
    required: [true, 'Favorite must be for a property']
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [200, 'Notes cannot be more than 200 characters']
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create compound index for user and property to prevent duplicate favorites
favoriteSchema.index({ user: 1, property: 1 }, { unique: true });

// Always populate the property field
favoriteSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'property',
    select: 'title images address price status type'
  });
  next();
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;