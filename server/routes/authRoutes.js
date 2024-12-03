const express = require('express');
const { verifyGoogleToken } = require('../auth');
const router = express.Router();


// POST route for handling Google login
router.post('/google-login', verifyGoogleToken);

module.exports = router;
