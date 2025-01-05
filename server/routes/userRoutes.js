const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); 
const userController = require('../controllers/userController');  
const { verifyGoogleToken } = require('../controllers/googleAuthController');  
const bcrypt = require('bcryptjs');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Import your existing controller functions
const {
    createUser,
    loginUser,
    getAllUsers,
    getUserBySchoolId,
    updateUserBySchoolId,
    deleteUserBySchoolId,
    getTotalUsers,
    registerUser,
    registerStudent, 
    getTotalFirstYearStudents,
    getTotalSecondYearStudents,
    getTotalThirdYearStudents,
    getTotalFourthYearStudents,
    getTotalStudents,
    getTotalFaculty,
    getCurrentUser,
    getFacultyProfile,
    getFacultyBySchoolId,
    updateFacultyProfile,
    getStudents
} = require('../controllers/userController');

// Debug middleware
router.use((req, res, next) => {
    console.log('User Route:', req.method, req.path);
    console.log('Headers:', req.headers);
    next();
});

// Current user route
router.get('/current', getCurrentUser);

// User routes
router.get('/', getAllUsers);
router.get('/total', getTotalUsers);
router.get('/total-students', getTotalStudents);
router.get('/total-faculty', getTotalFaculty);
router.get('/total-first-year', getTotalFirstYearStudents);
router.get('/total-second-year', getTotalSecondYearStudents);
router.get('/total-third-year', getTotalThirdYearStudents);
router.get('/total-fourth-year', getTotalFourthYearStudents);
router.get('/faculty-profile', getFacultyProfile);
router.get('/faculty/:school_id', getFacultyBySchoolId);
router.get('/students', getStudents);
router.get('/:school_id', getUserBySchoolId);

// Update routes
router.put('/faculty-profile', updateFacultyProfile);
router.put('/:school_id', updateUserBySchoolId);

// Delete route
router.delete('/:school_id', deleteUserBySchoolId);

// Registration routes
router.post('/register', [
    // Validation middleware
    body('firstName').trim().notEmpty().withMessage('First name is required'),
    body('lastName').trim().notEmpty().withMessage('Last name is required'),
    body('middleInitial').trim().isLength({ max: 1 }).withMessage('Middle initial must be a single character'),
    body('school_id').trim().notEmpty().withMessage('ID is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('role').isIn(['student', 'faculty']).withMessage('Invalid role')
], registerUser);

router.post('/register-student', registerStudent);

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

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check if it's a Google user
        if (user.isGoogleUser) {
            return res.status(401).json({ message: 'Please use Google Sign-In' });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Return success response with token and user data
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

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

// Route to get all faculty members
router.get('/faculty', async (req, res) => {
    try {
      // Find all users with the role of 'faculty'
      const facultyMembers = await User.find({ role: 'faculty' });
      
      // If no faculty members found
      if (facultyMembers.length === 0) {
        return res.status(404).json({ message: 'No faculty members found' });
      }
      
      // Send the faculty data as JSON
      res.json(facultyMembers);
    } catch (error) {
      console.error('Error fetching faculty:', error);
      res.status(500).json({ message: 'Error fetching faculty data', error });
    }
  });

// Example array to hold faculty data, normally you'd connect to a database
let facultyData = [];
router.post('/addfaculty', (req, res) => {
    try {
      // Get the data sent in the request body
      let facultyList = req.body;
  
      // If the data is not an array, wrap it in an array to treat it as a single item
      if (!Array.isArray(facultyList)) {
        facultyList = [facultyList];
      }
  
      // Validate that each item in the list contains required fields
      facultyList.forEach(faculty => {
        if (!faculty.name || !faculty.email || !faculty.department) {
          return res.status(400).json({ error: 'Faculty data missing required fields.' });
        }
      });
  
      // Here we would typically save the data to a database (MongoDB, SQL, etc.)
      // For now, we're pushing it to an in-memory array
      facultyData.push(...facultyList);
  
      // Respond with a success message and the saved data
      res.status(201).json({
        message: 'Faculty data successfully added.',
        data: facultyList
      });
    } catch (error) {
      // Handle unexpected errors
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  });

module.exports = router;
