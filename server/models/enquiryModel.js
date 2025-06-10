import mongoose from 'mongoose';

const enquirySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Property',
    },
    message: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    preferredContactMethod: {
      type: String,
      enum: ['email', 'phone', 'both'],
      default: 'email',
    },
    preferredViewingTime: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'viewed', 'closed'],
      default: 'pending',
    },
    agentNotes: {
      type: String,
    },
    isResolved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;