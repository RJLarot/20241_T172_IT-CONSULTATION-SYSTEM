const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    school_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },  
    contact_number: { type: String, default: '' },
    department: { type: String, default: '' },
    position: { type: String, default: '' },
    office_hours: { type: String, default: '' },
    specialization: { type: String, default: '' },
    consultation_hours: { type: String, default: '' },
    program: { type: String },
    year_level: { type: String },
    section: { type: String },
    topics_or_subjects: [String],
    academic_year: { type: String, match: /^\d{4}-\d{4}$/ },
    account_agreement: { type: Boolean, default: true },
    googleId: { type: String, unique: true, sparse: true },
    profilePicture: { type: String },
    role: { type: String, enum: ['student', 'faculty'], default: 'student' },
    isGoogleUser: { type: Boolean, default: false }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password') && !this.isGoogleUser && this.password) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
    if (!this.password) return false;
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
