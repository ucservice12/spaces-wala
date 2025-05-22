const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipient: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Notification must have a recipient']
  },
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  type: {
    type: String,
    enum: {
      values: [
        'property-inquiry', 
        'inquiry-reply', 
        'property-update', 
        'price-change',
        'status-change',
        'system'
      ],
      message: 'Invalid notification type'
    },
    required: [true, 'Notification type is required']
  },
  title: {
    type: String,
    required: [true, 'Notification title is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Notification message is required'],
    trim: true
  },
  read: {
    type: Boolean,
    default: false
  },
  relatedProperty: {
    type: mongoose.Schema.ObjectId,
    ref: 'Property'
  },
  relatedInquiry: {
    type: mongoose.Schema.ObjectId,
    ref: 'Inquiry'
  },
  link: String
}, {
  timestamps: true
});

// Index to improve read performance
notificationSchema.index({ recipient: 1, read: 1, createdAt: -1 });

// Populate related entities
notificationSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'sender',
    select: 'name avatar'
  });
  
  // Conditionally populate based on notification type
  if (this._conditions.type === 'property-inquiry' || 
      this._conditions.type === 'property-update' || 
      this._conditions.type === 'price-change' ||
      this._conditions.type === 'status-change') {
    this.populate({
      path: 'relatedProperty',
      select: 'title images address'
    });
  }
  
  if (this._conditions.type === 'inquiry-reply') {
    this.populate({
      path: 'relatedInquiry',
      select: 'property message'
    });
  }
  
  next();
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;