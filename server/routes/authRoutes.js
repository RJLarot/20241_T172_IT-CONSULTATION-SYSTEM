const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { verifyToken } = require('../middleware/auth');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Debug middleware - log all requests to auth routes
router.use((req, res, next) => {
  console.log('\nAuth Route Hit:');
  console.log('  Method:', req.method);
  console.log('  Path:', req.originalUrl);
  console.log('  Base URL:', req.baseUrl);
  console.log('  Route Path:', req.route?.path);
  console.log('  Headers:', JSON.stringify(req.headers, null, 2));
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('  Body:', JSON.stringify(req.body, null, 2));
  }
  next();
});

// Test route to verify auth router is working
router.get('/test', (req, res) => {
  console.log('Test route hit');
  res.json({ message: 'Auth routes are working' });
});

// Login route
router.post('/login', async (req, res) => {
  console.log('\nLogin route hit');
  try {
    const { email, password } = req.body;
    console.log('Login attempt for:', email);

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Google login route
router.post('/google-login', express.json(), async (req, res) => {
  console.log('\nGoogle login route hit');
  console.log('Request body:', req.body);
  
  try {
    const { token } = req.body;
    if (!token) {
      console.log('No token provided in request');
      return res.status(400).json({ message: 'No token provided' });
    }

    console.log('Verifying token with Google...');
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    
    const payload = ticket.getPayload();
    console.log('Google payload received:', {
      email: payload.email,
      given_name: payload.given_name,
      family_name: payload.family_name
    });

    const { email, given_name, family_name } = payload;

    // Check if user exists
    let user = await User.findOne({ email });
    console.log('Existing user found:', user ? 'Yes' : 'No');

    if (!user) {
      console.log('Creating new user for:', email);
      user = new User({
        email,
        firstName: given_name,
        lastName: family_name,
        role: 'student', // Default role
        password: await bcrypt.hash(Math.random().toString(36), 10) // Random password
      });
      await user.save();
      console.log('New user created successfully');
    }

    // Create JWT token
    const jwtToken = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    console.log('JWT token created for user:', user.email);

    const response = {
      token: jwtToken,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    };

    console.log('Sending response:', response);
    res.json(response);
  } catch (error) {
    console.error('Google login error:', error);
    res.status(401).json({ 
      message: 'Google authentication failed', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Register route
router.post('/register', async (req, res) => {
  console.log('\nRegister route hit');
  try {
    const { email, password, role, firstName, lastName } = req.body;
    console.log('Register attempt for:', email);

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = new User({
      email,
      password: hashedPassword,
      role,
      firstName,
      lastName
    });

    await user.save();
    console.log('New user registered:', email);

    // Create token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Get current user
router.get('/me', verifyToken, async (req, res) => {
  console.log('\nGet current user route hit');
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error while getting user data' });
  }
});

// Export the router
console.log('Auth routes loaded and exported');
module.exports = router;
