const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  facultyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  scheduledDate: { type: Date, required: true },
  duration: { type: Number, default: 60 }, // in minutes
  meetingType: { type: String, enum: ['One-on-One', 'Group', 'Review', 'Assessment'], default: 'One-on-One' },
  status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled', 'Rescheduled'], default: 'Scheduled' },
  meetingLink: String,
  recordingUrl: String,
  recordingDuration: Number,
  notes: String,
  attendance: {
    faculty: Boolean,
    student: Boolean
  },
  topics: [String],
  outcomes: String,
  feedbackRating: { type: Number, min: 1, max: 5 },
  feedbackComments: String,
  reminderSent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meeting', meetingSchema);