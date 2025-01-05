const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule
} = require('../controllers/scheduleController');

// Debug middleware
router.use((req, res, next) => {
  console.log(`Schedule Route: ${req.method} ${req.originalUrl}`);
  console.log('Request Body:', req.body);
  console.log('Request Headers:', req.headers);
  next();
});

// Test route
router.get('/test', (req, res) => {
  console.log('Test route hit');
  res.json({ message: 'Schedule routes are working' });
});

// Protected routes
router.use(protect);

router.route('/')
  .get(getSchedules)
  .post(createSchedule);

router.route('/:id')
  .put(updateSchedule)
  .delete(deleteSchedule);

module.exports = router;
