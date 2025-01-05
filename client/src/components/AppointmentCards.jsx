import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import './sortingcolumn.css';
import Swal from 'sweetalert2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SchoolIcon from '@mui/icons-material/School';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AppointmentCards = () => {
  // State hooks to manage different parts of the component's state
  const [userData, setUserData] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  useEffect(() => {
    const userDataStr = localStorage.getItem('userData');
    if (!userDataStr) {
      navigate('/login');
      return;
    }

    try {
      const userData = JSON.parse(userDataStr);
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        navigate('/login');
        return;
      }
      
      setUserData(userData);
      
      const fetchStudents = async () => {
        try {
          const token = localStorage.getItem('authToken');
          if (!token) {
            navigate('/login');
            return;
          }

          const response = await axios.get('http://localhost:5000/api/auth/students', {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          if (response.data) {
            setStudents(response.data);
          }
        } catch (error) {
          console.error('Error fetching students:', error);
          if (error.response?.status === 401) {
            navigate('/login');
          }
        } finally {
          setLoading(false);
        }
      };

      fetchStudents();
    } catch (err) {
      console.error('Error parsing user data:', err);
      localStorage.removeItem('userData');
      navigate('/login');
    }
  }, [navigate]);

  const handleSubjectsClick = () => {
    navigate('/subjects');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ConsultEase</a>
          <div className="ms-auto d-flex align-items-center">
            <button 
              className="btn btn-outline-primary me-3"
              onClick={() => navigate('/subjects')}
              title="Manage Subjects"
            >
              <SchoolIcon className="me-1" />
              Subjects
            </button>
            <button 
              className="btn btn-outline-primary me-3"
              onClick={() => navigate('/schedule')}
            >
              <ScheduleIcon className="me-1" />
              Schedule
            </button>
            <div className="dropdown">
              <div 
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                style={{ cursor: 'pointer' }}
                className="d-flex align-items-center"
              >
                <AccountCircleIcon 
                  style={{ fontSize: '2rem', color: '#666', marginRight: '8px' }}
                />
                <span className="me-2" style={{ color: '#666', fontWeight: '500' }}>
                  {userData?.name || 'User'}
                </span>
              </div>
              
              {showProfileDropdown && (
                <div 
                  className="dropdown-menu show position-absolute end-0"
                  style={{ marginTop: '10px' }}
                >
                  <div 
                    className="dropdown-item"
                    onClick={() => navigate('/faculty-profile')}
                    style={{ cursor: 'pointer' }}
                  >
                    <AccountCircleIcon className="me-2" fontSize="small" />
                    Profile
                  </div>
                  <div 
                    className="dropdown-item text-danger"
                    onClick={handleLogout}
                    style={{ cursor: 'pointer' }}
                  >
                    <LogoutIcon className="me-2" fontSize="small" />
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        <div className="content-header">
          <h3>Faculty Oversight - Log Book</h3>
        </div>
        <div className="logbook-table-container">
          <table className="logbook-table">
            <thead>
              <tr>
                <th>Email/Contact Number</th>
                <th>Semester & School Year</th>
                <th>Student Name</th>
                <th>Day & Time of Consultation</th>
                <th>Course - Year Level</th>
                <th>Purpose of Consultation</th>
                <th>Consultation Platform</th>
                <th>Remarks/Action Taken</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>johndoe@example.com</td>
                <td>1st Semester AY 2024-2025</td>
                <td>John Doe</td>
                <td>2024-12-28, 10:00 AM</td>
                <td>BSCS - 2nd Year</td>
                <td>Project Guidance</td>
                <td>Google Classroom</td>
                <td>Pending</td>
                <td className="action-buttons">
                  <button className="btn-approve" onClick={() => navigate('/approve')}>Approve</button>
                  <button className="btn-reschedule" onClick={() => navigate('/reschedule')}>Reschedule</button>
                  <button className="btn-cancel" onClick={() => navigate('/cancel')}>Cancel</button>
                </td>
              </tr>
              <tr>
                <td>janedoe@example.com</td>
                <td>2nd Semester AY 2024-2025</td>
                <td>Jane Doe</td>
                <td>2025-01-15, 2:00 PM</td>
                <td>BSCS - 3rd Year</td>
                <td>Thesis Discussion</td>
                <td>Zoom</td>
                <td>Pending</td>
                <td className="action-buttons">
                  <button className="btn-approve" onClick={() => navigate('/approve')}>Approve</button>
                  <button className="btn-reschedule" onClick={() => navigate('/reschedule')}>Reschedule</button>
                  <button className="btn-cancel" onClick={() => navigate('/cancel')}>Cancel</button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        <style>
          {`
            .navbar {
              background-color: #4CAF50;
              padding: 1rem 2rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              color: white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              margin-bottom: 2rem;
            }

            .navbar-brand h4 {
              margin: 0;
              color: white;
              font-weight: 600;
            }

            .nav-links {
              display: flex;
              gap: 1rem;
            }

            .nav-link {
              background: none;
              border: none;
              color: rgba(255,255,255,0.8);
              padding: 0.5rem 1rem;
              display: flex;
              align-items: center;
              gap: 8px;
              cursor: pointer;
              transition: all 0.3s ease;
              border-radius: 4px;
            }

            .nav-link:hover, .nav-link.active {
              background-color: rgba(255,255,255,0.1);
              color: white;
            }

            .nav-link svg {
              font-size: 20px;
            }

            .profile-section {
              display: flex;
              align-items: center;
              gap: 15px;
              margin-left: auto;
            }

            .profile-icon-wrapper {
              cursor: pointer;
              transition: transform 0.2s ease;
              display: flex;
              align-items: center;
            }

            .profile-icon-wrapper:hover {
              transform: scale(1.1);
            }

            .user-info {
              display: flex;
              flex-direction: column;
              color: white;
            }

            .user-name {
              font-weight: 600;
              font-size: 1rem;
              margin-bottom: 2px;
            }

            .user-role {
              font-size: 0.8rem;
              opacity: 0.9;
            }

            .logout-button {
              display: flex;
              align-items: center;
              gap: 8px;
              padding: 8px 16px;
              background-color: rgba(255,255,255,0.1);
              border: 1px solid rgba(255,255,255,0.2);
              border-radius: 4px;
              color: white;
              cursor: pointer;
              transition: all 0.3s ease;
            }

            .logout-button:hover {
              background-color: rgba(220,53,69,0.9);
              border-color: rgba(220,53,69,0.9);
            }

            .main-content {
              padding: 0 2rem;
            }

            .content-header {
              margin-bottom: 2rem;
            }

            .content-header h3 {
              margin: 0;
              color: #333;
            }

            .logbook-table-container {
              max-height: 500px;
              overflow-y: auto;
              margin-top: 20px;
              background: white;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }

            .logbook-table {
              width: 100%;
              border-collapse: collapse;
              background-color: #f9f9f9;
            }

            .logbook-table thead {
              position: sticky;
              top: 0;
              background-color: #4CAF50;
              color: white;
            }

            .logbook-table th, .logbook-table td {
              border: 1px solid #ddd;
              padding: 12px;
              text-align: center;
            }

            .logbook-table tr:hover {
              background-color: #f5f5f5;
            }

            .action-buttons {
              display: flex;
              gap: 8px;
              justify-content: center;
            }

            .btn-approve,
            .btn-reschedule,
            .btn-cancel {
              margin: 5px;
              padding: 8px 16px;
              font-size: 12px;
              border-radius: 4px;
              border: none;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }

            .btn-approve {
              background-color: #4CAF50;
              color: white;
            }

            .btn-reschedule {
              background-color: #FFC107;
              color: black;
            }

            .btn-cancel {
              background-color: #DC3545;
              color: white;
            }

            .btn-approve:hover { background-color: #45a049; }
            .btn-reschedule:hover { background-color: #e5ac06; }
            .btn-cancel:hover { background-color: #c82333; }
          `}
        </style>
      </div>
    </div>
  );
}

export default AppointmentCards;