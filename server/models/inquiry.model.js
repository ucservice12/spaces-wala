const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Inquiry must belong to a user']
  },
  property: {
    type: mongoose.Schema.ObjectId,
    ref: 'Property',
    required: [true, 'Inquiry must be about a property']
  },
  message: {
    type: String,
    required: [true, 'Inquiry message is required'],
    trim: true,
    maxlength: [500, 'Message cannot be more than 500 characters']
  },
  type: {
    type: String,
    enum: {
      values: ['viewing', 'question', 'offer', 'other'],
      message: 'Type must be viewing, question, offer, or other'
    },
    default: 'question'
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'replied', 'closed'],
      message: 'Status must be pending, replied, or closed'
    },
    default: 'pending'
  },
  replies: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Reply must belong to a user']
      },
      message: {
        type: String,
        required: [true, 'Reply message is required'],
        trim: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  preferredContactMethod: {
    type: String,
    enum: {
      values: ['email', 'phone'],
      message: 'Contact method must be email or phone'
    },
    default: 'email'
  },
  preferredViewingDate: Date,
  read: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create compound index for user and property to prevent duplicate inquiries
inquirySchema.index({ user: 1, property: 1 }, { unique: false });

// Always populate the user and property fields
inquirySchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name email phone'
  }).populate({
    path: 'property',
    select: 'title images address owner'
  });
  next();
});

// Populate user for replies
inquirySchema.pre(/^find/, function(next) {
  this.populate({
    path: 'replies.user',
    select: 'name email role'
  });
  next();
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

module.exports = Inquiry;