const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    school_id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact_number: { type: String, required: true },
    program: { type: String, required: true },
    year_level: { type: String, required: true },
    section: { type: String, required: true },
    topics_or_subjects: [String],
    academic_year: { type: String, required: true, match: /^\d{4}-\d{4}$/ },
    account_agreement: { type: Boolean, required: false },
    google_user_id: { type: String, unique: true, sparse: true },
    role: { type: String, required: true, enum: ['student', 'faculty'] }, // Role field
}, { timestamps: true });  // timestamps will auto-handle createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);

module.exports = User;
