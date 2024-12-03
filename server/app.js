// app.js

// Required modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // User routes
const authRoutes = require('./routes/authRoutes'); // Authentication routes
require('dotenv').config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;
const dbURI = process.env.MONGODB_URI;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Allow requests from the frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Explicitly allow PUT
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers
  preflightContinue: false,  // Pass the OPTIONS request to the next handler
  optionsSuccessStatus: 204, // For legacy browsers that send an OPTIONS request
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS settings
app.use(express.json()); // Parse incoming request bodies as JSON

// Set COOP and COEP headers to prevent cross-origin issues
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', userRoutes); // Routes for user-related functionality
app.use('/api/auth', authRoutes); // Authentication routes (if needed)

app.get('/api/test', (req, res) => {
  res.send('API is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
