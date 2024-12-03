import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as XLSX from 'xlsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCalendarAlt, faChevronUp, faChevronDown, faCalendar, faBook, faListAlt, faChalkboardTeacher, faCogs } from '@fortawesome/free-solid-svg-icons';
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import './sortingcolumn.css';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// Import FontAwesomeIcon component

// Import the specific icons you are using
import { faCheckCircle, faTrash, faExclamationTriangle, faInfoCircle, faCog } from '@fortawesome/free-solid-svg-icons';

const AppointmentCards = () => {
  // State hooks to manage different parts of the component's state
  const [loading, setLoading] = useState(true); // Loading state
  const [students, setStudents] = useState([]); // List of students
  const [limit, setLimit] = useState(5); // Number of students per page
  const [searchQuery, setSearchQuery] = useState(''); // Search query for filtering students
  const [faculty, setFaculty] = useState([]); // State to store faculty data
  const [newStudent, setNewStudent] = useState({
    school_id: '',
    name: '',
    email: '',
    password: '',
    contact_number: '',
    program: '',
    year_level: '',
    section: '',
    topics_or_subjects: '',
    academic_year: '',
  });
  
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [itemsPerPage] = useState(5); // Number of items per page for pagination
  const [errorMessage, setErrorMessage] = useState(''); // Error message for failed API calls
  const [sortConfig, setSortConfig] = useState({ key: 'school_id', direction: 'asc' }); // Sorting configuration
  const [sortedStudents, setSortedStudents] = useState([]); // Sorted list of students
  const [isHovered, setIsHovered] = useState(false); // Hover state for UI interactions
  const [showViewModal, setShowViewModal] = useState(false); // Modal visibility for viewing student
  const [selectedStudent, setSelectedStudent] = useState(null); // Selected student for view/update actions
  const [selectedFaculty, setSelectedFaculty] = useState(null); // Selected student for view/update actions

  const [formData, setFormData] = useState({
    school_id: '',
    name: '',
    email: '',
    contact_number: '',
    program: '',
    year_level: '',
    section: '',
    topics_or_subjects: '',
    academic_year: '',
  });


  useEffect(() => {
    if (selectedFaculty) {
      setFormData({
        schoolId: selectedFaculty.school_id || '',
        name: selectedFaculty.name || '',
        email: selectedFaculty.email || '',
        contactNumber: selectedFaculty.contact_number || '',
        program: selectedFaculty.program || '',
        yearLevel: selectedFaculty.year_level || '',
        section: selectedFaculty.section || '',
        topicsOrSubjects: selectedFaculty.topics_or_subjects.join(', ') || '', // Assuming it's an array
        academicYear: selectedFaculty.academic_year || '',
      });
    }
  }, [selectedFaculty]); // Run when selectedStudent changes //UPDATE NI SIYA


    // Fetch faculty data from the backend
    useEffect(() => {
      const fetchFaculty = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/faculty');
          const data = await response.json();
  
          // If the response has data, update the faculty state
          if (Array.isArray(data)) {
            setFaculty(data);
          } else {
            console.log('No faculty members found');
          }
        } catch (error) {
          console.error('Error fetching faculty data:', error);
        } finally {
          setLoading(false); // Set loading to false once data is fetched
        }
      };
  
      fetchFaculty();
    }, []); 
  // Effect to fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, []); //UPDATE SAD NI SYA
  // Effect to sort the students whenever the list or sorting configuration changes
  useEffect(() => {
    const sortedData = [...students].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    setSortedStudents(sortedData);
  }, [students, sortConfig]);
  // Fetch students from API
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/students');
      if (!response.ok) throw new Error('Failed to fetch students');
      const data = await response.json();
      // Filter students who are 'student' role and have a name
      const filteredStudents = data.filter(student => student.role === 'student' && student.name);
      setStudents(filteredStudents);
    } catch (error) {
      setErrorMessage('Error fetching students. Please try again later.');
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };
  // Export student data to a PDF file
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Bukidnon State University", 14, 10);
    doc.setFontSize(12);
    doc.text("College of Technology", 14, 15);
    doc.line(14, 28, 195, 28);

    const columns = ["ID", "Name", "Program", "Year", "Section"];
    const data = faculty.map(faculty => [faculty.school_id, faculty.name, faculty.program, faculty.year_level, faculty.section]);

    doc.autoTable({ head: [columns], body: data, startY: 20, theme: "grid", margin: { top: 10, left: 10, right: 10, bottom: 10 } });
    doc.save("student-list.pdf");
  };
  // Export student data to an Excel file
  const exportToExcel = () => {
  // Create a new workbook
  const wb = XLSX.utils.book_new();
  // Clean up the students data to ensure arrays are joined into strings
  const cleanedStudents = students.map(student => {
    if (Array.isArray(student.topics_or_subjects)) {
      // Join array into a string (you can use other delimiters like commas or semicolons)
      student.topics_or_subjects = student.topics_or_subjects.join(', ');
    }
    return student;
  });
  // Convert cleaned data to a worksheet
  const ws = XLSX.utils.json_to_sheet(cleanedStudents);
  // Append the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Students');
  // Write the file
  XLSX.writeFile(wb, 'Students.xlsx');
};
  // Handle the change in number of students per page
  const handleLimitChange = (event) => {
    const newLimit = parseInt(event.target.value, 10);
    if (!isNaN(newLimit) && newLimit > 0) {
      setLimit(newLimit);
      setCurrentPage(1); // Reset to first page
    }
  };
  // Filter students based on the search query
  const filteredStudents = students.filter(student => 
    student && student.name && student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Limit the number of students per page
  const limitedStudents = filteredStudents.slice(0, limit);

  // Handle sorting of student data
  const handleSort = (column) => {
    const direction = sortConfig.key === column && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key: column, direction });
  };

  // Pagination logic
  const indexOfLastStudent = currentPage * limit;
  const indexOfFirstStudent = indexOfLastStudent - limit;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(filteredStudents.length / limit);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // Handle the view action for a student
  const handleView = (schoolId) => {
    const faculty = currentFaculty.find(faculty => faculty.school_id === schoolId);
    setSelectedFaculty(faculty);
    setShowViewModal(true); // Open the View Modal
  };

  // Close the View Modal
  const handleCloseViewModal = () => {
    setShowViewModal(false);
    setSelectedFaculty(null);
  };


const [showModal, setShowModal] = useState(false); // Matches modal state


const handleInputChangePut = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value, // Update the specific form field
  }));
 
};

const handleCloseUpdateModal = () => {
  setShowModal(false); // Close the modal
  setSelectedStudent(null); // Reset selected student when modal is closed
};

const handleUpdateSubmit = async (event) => {
  event.preventDefault();
  console.log('Form data before submission:', formData);

  // Validate that required fields are not empty
  if (
    !formData.name ||
    !formData.email ||
    !formData.contactNumber ||
    !formData.academicYear ||
    !formData.yearLevel ||
    !formData.program ||
    !formData.section ||
    !formData.topicsOrSubjects
  ) {
    alert('Please fill out all required fields.');
    return; // Exit early if validation fails
  }

  // Proceed with form submission if validation passes
  setError(''); // Clear any previous error

  // Step 1: Close the modal immediately before showing SweetAlert
  handleCloseUpdateModal(); // Close modal on button click

  // Step 2: Show SweetAlert confirmation before updating
  const confirmUpdate = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to update this student?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, update student!',
    cancelButtonText: 'Cancel',
  });

  // Step 3: If the user confirms, proceed with the update
  if (confirmUpdate.isConfirmed) {
    const updatedData = {
      school_id: formData.schoolId,
      name: formData.name,
      email: formData.email,
      contact_number: formData.contactNumber,
      academic_year: formData.academicYear,
      year_level: formData.yearLevel,
      program: formData.program,
      section: formData.section,
      topics_or_subjects: formData.topicsOrSubjects
        .split(',')
        .map((subject) => subject.trim()), // Ensure it's an array for backend compatibility
    };

    console.log('Updating student with data:', updatedData);

    try {
      const studentId = selectedStudent?.school_id;
      if (!studentId) {
        alert('Student ID is missing');
        return;
      }

      const response = await fetch(`http://localhost:5000/api/users/${studentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || 'Failed to update student');
      }

      const updatedStudent = await response.json();
      console.log('Student updated:', updatedStudent);

      // Step 4: Show SweetAlert success after update
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Student updated successfully!',
        confirmButtonText: 'OK',
      });

    } catch (error) {
      console.error('Error updating student:', error.message);

      // Step 5: Show SweetAlert error message if the update failed
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred while updating the student. Please try again later.',
        confirmButtonText: 'OK',
        position: 'top-end', // Position the alert at the top-right
        toast: true, // Make it a toast
        timer: 3000, // Set a timer to automatically close the toast after 3 seconds
        timerProgressBar: true, // Optionally show a progress bar while waiting
      });
    }
  }
};

const handleDelete = async (schoolId) => {
  // Show confirmation dialog
  const confirmDelete = await Swal.fire({
    title: 'Are you sure?',
    text: 'This action cannot be undone. Do you want to delete this student?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  });

  // If the user confirms, proceed with deletion
  if (confirmDelete.isConfirmed) {
    try {
      // Send DELETE request to the backend API
      const response = await fetch(`http://localhost:5000/api/users/${schoolId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete student');
      }

      // Remove the student from the state
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.school_id !== schoolId)
      );

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'The student has been deleted.',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error('Error deleting student:', error.message);

      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred while deleting the student. Please try again later.',
        confirmButtonText: 'OK',
      });
    }
  }
};


//CARDS DASHBOARD
useEffect(() => {
  fetchTotalYearStudents('first-year');
  fetchTotalYearStudents('second-year');
  fetchTotalYearStudents('third-year');
  fetchTotalYearStudents('fourth-year');
}, []);

const fetchTotalYearStudents = async (year) => {
  setLoading(true);
  try {
    const response = await fetch(`http://localhost:5000/api/students/total/${year}`);
    if (!response.ok) throw new Error(`Failed to fetch ${year} students`);
    const data = await response.json();
    switch (year) {
      case 'first-year':
        setTotalFirstYearStudents(data.totalFirstYearStudents);
        break;
      case 'second-year':
        setTotalSecondYearStudents(data.totalSecondYearStudents);
        break;
      case 'third-year':
        setTotalThirdYearStudents(data.totalThirdYearStudents);
        break;
      case 'fourth-year':
        setTotalFourthYearStudents(data.totalFourthYearStudents);
        break;
      default:
        break;
    }
  } catch (error) {
    setErrorMessage(`Error fetching ${year} students. Please try again later.`);
    console.error(`Error fetching ${year} students:`, error);
  } finally {
    setLoading(false);
  }
};
const [totalFirstYearStudents, setTotalFirstYearStudents] = useState(null); // null for loading state
const [totalSecondYearStudents, setTotalSecondYearStudents] = useState(null); // null for loading state
const [totalThirdYearStudents, setTotalThirdYearStudents] = useState(null); // null for loading state
const [totalFourthYearStudents, setTotalFourthYearStudents] = useState(null); // null for loading state
//CARDS DASHBOARD


return (
<div>
   {/* Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin ="true"/>
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
  {/* Icons */}
  <link rel="stylesheet" href="assets/vendor/fonts/boxicons.css" /> 
  {/* Core CSS */}
  <link rel="stylesheet" href="assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
  <link rel="stylesheet" href="assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
  <link rel="stylesheet" href="assets/css/demo.css" />
  <link rel="stylesheet" href="assets/vendor/fonts/fontawesome.css" />
  <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css" rel="stylesheet"/>

  {/* Layout wrapper */}

  {/* Layout wrapper */}
  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      {/* Menu */}
  <aside id="layout-menu" 
  className="layout-menu menu-vertical menu" 
  style={{
    backgroundColor: '#343a40', // Dark background color
    color: '#fff', // White text color
  }}
>
  <style>
    {`
      .menu-item:hover {
        background-color: #495057; /* Slightly lighter shade on hover */
        cursor: pointer; /* Change cursor on hover */
      }
      .menu-item:hover .menu-link {
        color: #f8f9fa; /* Lighter text color on hover */
      }
      .menu-item:hover .menu-icon {
        color: #f8f9fa; /* Lighter icon color on hover */
      }
    `}
  </style>

  <div className="menu-inner-shadow" />
  <ul className="menu-inner py-1" style={{ color: '#fff' }}>
    {/* Layouts */}
    <li className="menu-header text-uppercase" style={{ backgroundColor: '#343a40' }}>
      <span className="menu-header-text" style={{ color: '#fff', fontSize: '1.45rem', fontWeight: 'bold' }}>
        ConsultEase
      </span>
    </li>

    <li className="menu-header text-uppercase">
      <span className="menu-header-text" style={{ color: '#fff' }}>Admin Dashboard</span>
    </li>

    <li className="menu-item">
      <a href="/studentadmindashboard" className="menu-link" style={{ color: '#fff' }}>
        <i className="menu-icon tf-icons bx bx-user-circle"></i>
        <div data-i18n="Tables" style={{ color: '#fff' }}>Student</div>
      </a>
    </li>

    <li className="menu-item">
      <a href="/facultyadmindashboard" className="menu-link" style={{ color: '#fff' }}>
        <i className="menu-icon tf-icons bx bx-chalkboard"></i>
        <div data-i18n="Tables" style={{ color: '#fff' }}>Faculty</div>
      </a>
    </li>
    
    <li className="menu-item">
      <a href="/studentconsultation" className="menu-link" style={{ color: '#fff' }}>
      <i className="menu-icon tf-icons bx bx-file"></i>
        <div data-i18n="Tables" style={{ color: '#fff' }}>Consult Now!</div>
      </a>
    </li>
    {/* <li className="menu-item">
      <a href="/bookappointment" className="menu-link" style={{ color: '#fff' }}>
      <i className="menu-icon tf-icons bx bx-calendar"></i>

        <div data-i18n="Tables" style={{ color: '#fff' }}>Book Appointment</div>
      </a>
    </li> */}
    <li className="menu-item">
      <a href="/appointmentcards" className="menu-link" style={{ color: '#fff' }}>
      <i className="menu-icon tf-icons bx bx-calendar"></i>
        <div data-i18n="Tables" style={{ color: '#fff' }}>Card Appointment</div>
      </a>
    </li>

  </ul>
</aside>
      
{/* / Menu */}
{/* Layout container */}
<div className="layout-page">
  {/* Navbar */}
        {/* Content wrapper */}
        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
      
      
      {/* CARDS */}

<div>
  <style>
    {`
      .instructor-card {
        height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .card-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      .profile-pic {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }

      .instructor-name {
        font-size: 14px;
        font-weight: bold;
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .instructor-card small {
        font-size: 12px;
        color: #888;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .col-sm-6,
      .col-xl-3 {
        flex: 1 1 calc(25% - 1rem);
        max-width: calc(25% - 1rem);
      }

      /* Enhanced Button Style */
      .btn-appointment {
        background-color: #4CAF50; /* Green */
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        margin-top: 10px;
      }

      .btn-appointment:hover {
        background-color: #45a049; /* Darker green */
        transform: translateY(-2px); /* Button lift effect */
      }

      .btn-appointment:active {
        background-color: #388e3c; /* Even darker green */
        transform: translateY(0); /* Button pressed effect */
      }

      .btn-appointment:focus {
        outline: none; /* Removes outline on focus */
        box-shadow: 0 0 0 2px rgba(72, 144, 226, 0.5); /* Focus ring */
      }
        * {
  box-sizing: border-box;
}

/* Responsive styles */
@media (max-width: 768px) {
  .col-sm-6,
  .col-xl-3 {
    flex: 1 1 calc(50% - 1rem);  /* 2 cards per row on medium screens */
    max-width: calc(50% - 1rem);
  }
}

@media (max-width: 480px) {
  .col-sm-6,
  .col-xl-3 {
    flex: 1 1 100%;  /* 1 card per row on small screens */
    max-width: 100%;
  }
}

    `}
  </style>


  <div className="row g-4 mb-4">
    {/* Instructor Card 1 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/1.png" alt="John's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">John Lloyd Rojo</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 2 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/2.png" alt="Good Night's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">Good Night Cagande</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 3 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/3.png" alt="Kill Joy's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">Kill Joy Caserse</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 4 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/4.png" alt="Raul's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">Raul Lecaros</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 5 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/5.png" alt="John's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">John Lloyd Rojo</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 6 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/6.png" alt="Good Night's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">Good Night Cagande</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 7 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/7.png" alt="Kill Joy's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">Kill Joy Caserse</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 8*/}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/8.png" alt="Raul's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">Raul Lecaros</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 9 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/9.png" alt="John's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">John Lloyd Rojo</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 10 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/10.png" alt="Good Night's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">Good Night Cagande</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 11 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/11.png" alt="Kill Joy's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">Kill Joy Caserse</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>
    {/* Instructor Card 12 */}
    <div className="col-sm-6 col-xl-3">
      <div className="card instructor-card">
        <div className="card-body">
          <div className="content-left">
            <div className="d-flex justify-content-center">
              <img src="./assets/img/avatars/12.png" alt="Raul's Profile" className="profile-pic" />
            </div>
            <h5 className="instructor-name">Raul Lecaros</h5>
            <button className="btn-appointment">Create Appointment</button>
          </div>
        </div>
      </div>
    </div>


    {/* Add more instructor cards as needed */}
  </div>
</div>



















                
          </div>
          <div className="content-backdrop fade" />
        </div>
      </div>
    </div>
    <div className="layout-overlay layout-menu-toggle" />
    <div className="drag-target" />
  </div>
</div>

  )
}

export default AppointmentCards