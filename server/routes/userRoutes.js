const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you have a User model
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Use your Google client ID from .env
const userController = require('../controllers/userController');  // Adjust the path if needed
const { verifyGoogleToken } = require('../controllers/googleAuthController');  // Import the verifyGoogleToken function


const router = express.Router();
// Import express-validator
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
    registerStudent, // Add registerStudent function here
    getTotalFirstYearStudents,
    getTotalSecondYearStudents,
    getTotalThirdYearStudents,
    getTotalFourthYearStudents,
    getTotalStudents,
    getTotalFaculty,
} = require('../controllers/userController');

// Route to register a new student
router.post('/register/student', registerStudent); // Register student route

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
router.get('/students/total/first-year', getTotalFirstYearStudents);
router.get('/students/total/second-year', getTotalSecondYearStudents);
router.get('/students/total/third-year', getTotalThirdYearStudents);
router.get('/students/total/fourth-year', getTotalFourthYearStudents);

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

<<<<<<< HEAD
// Admin-only route to get all users (add middleware for authentication if necessary)
router.get('/users', getAllUsers); //!
router.get('/users/total', getTotalUsers);//!

// Route to get total number of students and faculty
router.get('/students/total', getTotalStudents);//!
router.get('/faculty/total', getTotalFaculty);

// Routes for user management by schoolID
router.get('/users/:school_id', getUserBySchoolId);

router.delete('/users/:school_id', deleteUserBySchoolId);

// Consolidated route for updating user by school_id
router.put('/users/:school_id', updateUserBySchoolId);
// POST route for handling Google login
router.post('/google-login', verifyGoogleToken);


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
  
=======
// Route to update user by school_id
router.put('/users/:school_id', updateUserById);  // Replaced with controller function

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
>>>>>>> QA

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
