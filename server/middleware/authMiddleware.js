const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;
  console.log('Auth Middleware - Headers:', req.headers);

  try {
    // Check for token in Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];
      console.log('Auth Middleware - Token:', token);

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Auth Middleware - Decoded Token:', decoded);

      // Get user from token
      const user = await User.findById(decoded.id).select('-password');
      console.log('Auth Middleware - User:', user);

      if (!user) {
        console.log('Auth Middleware - User not found');
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      // Add user to request object
      req.user = user;
      next();
    } else {
      console.log('Auth Middleware - No token provided');
      res.status(401).json({ message: 'Not authorized, no token' });
    }
  } catch (error) {
    console.error('Auth Middleware - Error:', error);
    if (error.name === 'JsonWebTokenError') {
      res.status(401).json({ message: 'Not authorized, invalid token' });
    } else if (error.name === 'TokenExpiredError') {
      res.status(401).json({ message: 'Not authorized, token expired' });
    } else {
      res.status(401).json({ message: 'Not authorized', error: error.message });
    }
  }
};

module.exports = { protect };
