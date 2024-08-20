const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  connections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  }],
  jobPostings: [{
    title: String,
    description: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Profile', profileSchema);
