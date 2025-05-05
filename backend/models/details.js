// models/Inquiry.js

import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact Number is required'],
    trim: true,
  },
  categories: {
    type: [String],
    required: [true, 'At least one category is required'],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: props => 'At least one category must be selected'
    }
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
  },
  requirement: {
    type: String,
    required: [true, 'Requirement is required'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Ensure the model is not compiled multiple times during dev reload
const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
