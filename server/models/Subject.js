const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subjectCode: {
    type: String,
    required: true,
    trim: true
  },
  subjectName: {
    type: String,
    required: true,
    trim: true
  },
  schedule: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday) \d{1,2}:\d{2} - \d{1,2}:\d{2}$/.test(v);
      },
      message: props => `${props.value} is not a valid schedule format! Use format: "Day HH:MM - HH:MM"`
    }
  },
  room: {
    type: String,
    required: true,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Create text index for search
subjectSchema.index({
  subjectCode: 'text',
  subjectName: 'text',
  room: 'text'
});

module.exports = mongoose.model('Subject', subjectSchema);
