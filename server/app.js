const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Use only userRoutes for auth and user management

require('dotenv').config();

const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const dbURI = process.env.MONGODB_URI; // Get the connection string from the .env file

mongoose.connect(dbURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Middleware
app.use(cors()); // Allow CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
app.use('/api', userRoutes); // Use userRoutes for all authentication and user management
// Route to get total number of students

app.get('/api/test', (req, res) => {
    res.send('API is running');
});
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });  // Sort by creation date in descending order
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students' });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/api/register/student', async (req, res) => {
  const studentData = req.body;
  console.log('Received student data:', studentData);  // Log the data received from frontend
  try {
    // Proceed with inserting the student data into the database
    const newStudent = new Student(studentData);
    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    console.error('Error registering student:', error);  // Log error for debugging
    res.status(500).send('Internal server error man');  // Return a more descriptive error response
  }
});