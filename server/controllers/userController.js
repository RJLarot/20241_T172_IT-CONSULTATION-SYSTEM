const User = require('../models/User'); // Import the User model

// Create a new user (registration)
exports.registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Store plaintext password directly (not recommended)
        const newUser = new User({ email, password });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Register a new student
exports.registerStudent = async (req, res) => {
    const { school_id, name, email, password, contact_number, program, year_level, section, topics_or_subjects, academic_year, account_agreement, google_user_id } = req.body;

    try {
        // Check if the student already exists by school ID or email
        const existingStudent = await User.findOne({ school_id });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student already exists' });
        }

        // Create a new student object
        const newStudent = new User({
            school_id,
            name,
            email,
            password, // Ideally, hash the password before saving it
            contact_number,
            program,
            year_level,
            section,
            topics_or_subjects,
            academic_year,  // Ensure academic_year is passed correctly
            account_agreement,  // Ensure account_agreement is passed
            google_user_id,  // Ensure google_user_id is passed
            role: 'student', // Set the role as student
        });

        // Save the new student to the database
        await newStudent.save();

        // Respond with the newly created student's data
        res.status(201).json(newStudent);  // Send the full student object in the response
    } catch (error) {
        // Log error details to the console for debugging
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Server error', error: error.message }); // Include the error message in the response
    }
};

// User login
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials!' });
        }

        // Directly compare plaintext password with stored password
        if (password !== user.password) { // Direct comparison
            return res.status(401).json({ message: 'Invalid credentials!' });
        }

        return res.status(200).json({ message: 'Login successful', user: { id: user._id, email: user.email } });
    } catch (error) {
        console.error('Server error during login:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user by school_id
exports.updateUserById = async (req, res) => {
    const { school_id } = req.params;
    const updatedData = req.body;

    console.log('School ID from request params:', school_id); // Log the school_id
    console.log('Updated data:', updatedData); // Log the updated data

    try {
        const user = await User.findOneAndUpdate({ school_id }, updatedData, {
            new: true, // Returns the updated document
            runValidators: true, // Applies any schema validation
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
// Controller for updating user by school_id
exports.updateUserBySchoolId = async (req, res) => {
    const { school_id } = req.params;
    const updatedData = req.body;

    console.log('School ID from request params:', school_id); // Should log the school_id
    console.log('Updated data:', updatedData); // Should log the data to be updated

    try {
        const user = await User.findOneAndUpdate({ school_id }, updatedData, {
            new: true, // Return updated document
            runValidators: true, // Validate schema
        });

        if (!user) {
            console.log(`No user found with school_id: ${school_id}`);
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('Updated user:', user);  // Log the updated user data
        res.json(user);  // Send the updated user data as response
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

  
exports.deleteUserBySchoolId = async (req, res) => {
    const { school_id } = req.params; // Extract school_id from request params

    try {
        // Find and delete the user by school_id
        const result = await User.deleteOne({ school_id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'User with this school ID not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Failed to delete user', error });
    }
};



// Function to get the total number of users
exports.getTotalUsers = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments(); // Get total number of users
        res.status(200).json({ totalUsers }); // Send the total as a response
    } catch (error) {
        console.error('Error fetching total users:', error);
        res.status(500).json({ message: 'Error fetching total users' });
    }
};

// Controller for getting total number of students
exports.getTotalStudents = async (req, res) => {
    try {
        const totalStudents = await User.countDocuments({ role: 'student' }); // Count all users where role is 'student'
        res.status(200).json({ totalStudents });
    } catch (error) {
        console.error('Error fetching total students:', error);
        res.status(500).json({ message: 'Error fetching total students' });
    }
};

// Controller for getting total number of faculty
exports.getTotalFaculty = async (req, res) => {
    try {
        const totalFaculty = await User.countDocuments({ role: 'faculty' }); // Count all users where role is 'faculty'
        res.status(200).json({ totalFaculty });
    } catch (error) {
        console.error('Error fetching total faculty:', error);
        res.status(500).json({ message: 'Error fetching total faculty' });
    }
};

// Controller to get the total number of 1st-year students
exports.getTotalFirstYearStudents = async (req, res) => {
    try {
        const totalFirstYearStudents = await User.countDocuments({ year_level: '1st year' });
        res.status(200).json({ totalFirstYearStudents });
    } catch (error) {
        console.error('Error fetching 1st year students:', error);
        res.status(500).json({ message: 'Error fetching 1st year students' });
    }
};

// Controller to get the total number of 2nd-year students
exports.getTotalSecondYearStudents = async (req, res) => {
    try {
        const totalSecondYearStudents = await User.countDocuments({ year_level: '2nd year' });
        res.status(200).json({ totalSecondYearStudents });
    } catch (error) {
        console.error('Error fetching 2nd year students:', error);
        res.status(500).json({ message: 'Error fetching 2nd year students' });
    }
};

// Controller to get the total number of 3rd-year students
exports.getTotalThirdYearStudents = async (req, res) => {
    try {
        const totalThirdYearStudents = await User.countDocuments({ year_level: '3rd year' });
        res.status(200).json({ totalThirdYearStudents });
    } catch (error) {
        console.error('Error fetching 3rd year students:', error);
        res.status(500).json({ message: 'Error fetching 3rd year students' });
    }
};

// Controller to get the total number of 4th-year students
exports.getTotalFourthYearStudents = async (req, res) => {
    try {
        const totalFourthYearStudents = await User.countDocuments({ year_level: '4th year' });
        res.status(200).json({ totalFourthYearStudents });
    } catch (error) {
        console.error('Error fetching 4th year students:', error);
        res.status(500).json({ message: 'Error fetching 4th year students' });
    }
};


exports.getUserBySchoolId = async (req, res) => {
    const { school_id } = req.params;

    try {
        const user = await User.findOne({ school_id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user by school_id:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
