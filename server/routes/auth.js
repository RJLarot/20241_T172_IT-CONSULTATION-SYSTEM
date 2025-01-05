const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

// Initialize Google OAuth client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Debug middleware for auth routes
router.use((req, res, next) => {
  console.log('\nAuth Route Hit:');
  console.log('URL:', req.originalUrl);
  console.log('Method:', req.method);
  console.log('Body:', req.body);
  next();
});

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth routes are working' });
});

// Google login route
router.post('/google-login', async (req, res) => {
  try {
    console.log('Google login request received');
    const { token } = req.body;
    
    if (!token) {
      console.log('No token provided');
      return res.status(400).json({ message: 'Token is required' });
    }

    console.log('Verifying token with Google...');
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const { email, given_name, family_name } = ticket.getPayload();
    console.log('Google payload:', { email, given_name, family_name });

    let user = await User.findOne({ email });
    console.log('Existing user:', user ? 'Found' : 'Not found');

    if (!user) {
      console.log('Creating new user...');
      user = new User({
        email,
        firstName: given_name,
        lastName: family_name,
        role: 'student', // Default role
        password: await bcrypt.hash(Math.random().toString(36), 10)
      });
      await user.save();
      console.log('New user created');
    }

    const jwtToken = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

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

    console.log('Sending successful response');
    res.json(response);
  } catch (error) {
    console.error('Google login error:', error);
    res.status(401).json({ 
      message: 'Authentication failed',
      error: error.message 
    });
  }
});

module.exports = router;
