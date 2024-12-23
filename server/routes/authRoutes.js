const express = require('express');
const { verifyGoogleToken } = require('../auth');
const router = express.Router();


// POST route for handling Google login
router.post('/google-login', verifyGoogleToken);

module.exports = router;
//GOOGLE_CLIENT_ID=295099131481-l6mgeh805cerlvbav583lb8tuqm4trrb.apps.googleusercontent.com
//GOOGLE_CLIENT_SECRET=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
//JWT_SECRET=i_love_pingpong

//6LfYa4YqAAAAACwKqbwlXqecTZsyjFY2eG_-KZ_Q
//6LfYa4YqAAAAAOFvZRnLc0s7zzauZw-53m4OJuoz