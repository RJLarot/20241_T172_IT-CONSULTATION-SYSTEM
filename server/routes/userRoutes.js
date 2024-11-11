const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you have a User model
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Use your Google client ID from .env
const userController = require('../controllers/userController');  // Adjust the path if needed

// Import express-validator
const { body, validationResult } = require('express-validator');

// Import your existing controller functions
const {
    createUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    getTotalUsers,
    registerUser,
    registerStudent, // Add registerStudent function here
} = require('../controllers/userController');

// Route to register a new student
router.post('/register/student', userController.registerStudent); // Register student route

// Route to get all students
router.get('/students', async (req, res) => {
    try {
        // Find all users where role is 'student'
        const students = await User.find({ role: 'student' });
        if (!students.length) {
            return res.status(404).json({ message: 'No students found' });
        }
        res.json(students);  // Send the list of students
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Error fetching students', error });
    }
});

// Route to get the total number of students in each year
router.get('/students/total/first-year', userController.getTotalFirstYearStudents);
router.get('/students/total/second-year', userController.getTotalSecondYearStudents);
router.get('/students/total/third-year', userController.getTotalThirdYearStudents);
router.get('/students/total/fourth-year', userController.getTotalFourthYearStudents);

// Google Login route
router.post('/google-login', async (req, res) => {
    const { idToken } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { sub: google_user_id, email, name, picture } = payload;

        let user = await User.findOne({ google_user_id });
        if (!user) {
            user = new User({
                google_user_id,
                email,
                name,
                picture,
            });
            await user.save();
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            token,
            user: {
                name: user.name,
                email: user.email,
                picture: user.picture,
            },
        });
    } catch (error) {
        console.error('Error during Google login:', error);
        res.status(400).json({ error: 'Invalid Google token' });
    }
});

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// Forgot Password Route
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const resetToken = user.generateResetToken();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

        await transporter.sendMail({
            to: email,
            subject: 'Password Reset',
            text: `Click the following link to reset your password: ${resetUrl}`,
        });

        res.status(200).json({ message: 'Reset link sent to your email' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending reset link' });
    }
});

router.put('/api/users/:school_id', async (req, res) => {
    const { school_id } = req.params;
    console.log('School ID:', school_id);  // Log the school_id
    console.log('Request Body:', req.body);  // Log the data sent in the body
    
    const updatedData = req.body;
  
    try {
      const student = await User.findOneAndUpdate({ school_id }, updatedData, {
        new: true,
        runValidators: true,
      });
  
      if (!student) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(student);
    } catch (error) {
      console.error('Error updating student:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
// Admin-only route to get all users (add middleware for authentication if necessary)
router.get('/users', getAllUsers);
router.get('/users/total', getTotalUsers);

// Route to get total number of students and faculty
router.get('/students/total', userController.getTotalStudents);
router.get('/faculty/total', userController.getTotalFaculty);

// Routes for user management by schoolID
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

module.exports = router;
