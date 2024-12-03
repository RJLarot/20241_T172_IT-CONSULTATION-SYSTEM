const { OAuth2Client } = require('google-auth-library');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assume you have a User model

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Your Google OAuth Client ID

// Verify Google ID Token and check if the email exists in the database
async function verifyGoogleToken(req, res) {
  const { token } = req.body;

  try {
    // Verify the ID token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID, // Your Google OAuth Client ID
    });

    // Get the payload (user info)
    const payload = ticket.getPayload();
    const email = payload.email;

    // Check if the email is already registered in MongoDB
    const user = await User.findOne({ email });

    if (user) {
      // If the user exists, return user data
      return res.status(200).json({ message: 'User found', user });
    } else {
      // If the user doesn't exist, return a message
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(400).json({ message: 'Invalid token', error });
  }
}

module.exports = { verifyGoogleToken };
