const express = require('express');
const { verifyGoogleToken } = require('../auth');
const router = express.Router();


// POST route for handling Google login
router.post('/google-login', verifyGoogleToken);

module.exports = router;

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
