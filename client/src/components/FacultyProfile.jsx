import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Swal from 'sweetalert2';

const FacultyProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    contact_number: '',
    department: '',
    position: '',
    office_hours: '',
    specialization: '',
    consultation_hours: ''
  });

  const [editedData, setEditedData] = useState({...profileData});

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');

      if (!token || !userData) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/faculty-profile', {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (response.data) {
          setProfileData(response.data);
          setEditedData(response.data);
        } else {
          // If no profile data, use userData as fallback
          const defaultData = {
            name: userData.name || '',
            email: userData.email || '',
            contact_number: '',
            department: '',
            position: '',
            office_hours: '',
            specialization: '',
            consultation_hours: ''
          };
          setProfileData(defaultData);
          setEditedData(defaultData);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching profile:', err);
        // Use userData as fallback on error
        const defaultData = {
          name: userData.name || '',
          email: userData.email || '',
          contact_number: '',
          department: '',
          position: '',
          office_hours: '',
          specialization: '',
          consultation_hours: ''
        };
        setProfileData(defaultData);
        setEditedData(defaultData);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await axios.put(
        'http://localhost:5000/api/auth/faculty-profile',
        editedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data) {
        setProfileData(editedData);
        setIsEditing(false);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Profile updated successfully!'
        });
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Failed to update profile'
      });
    }
  };

  const handleCancel = () => {
    setEditedData(profileData);
    setIsEditing(false);
  };

  const handleBack = () => {
    navigate('/appointmentcards');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container-fluid p-0" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ConsultEase</a>
          <div className="ms-auto d-flex align-items-center">
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
                  {profileData.name || 'User'}
                </span>
              </div>
              
              {showProfileDropdown && (
                <div 
                  className="dropdown-menu show position-absolute end-0"
                  style={{ marginTop: '10px' }}
                >
                  <div 
                    className="dropdown-item text-danger"
                    onClick={handleLogout}
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

      <div className="container py-4">
        <div className="card shadow">
          <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center">
              <button 
                className="btn btn-link text-decoration-none text-dark"
                onClick={handleBack}
              >
                <ArrowBackIcon /> Back
              </button>
              <h4 className="mb-0 ms-3">Faculty Profile</h4>
            </div>
            {!isEditing ? (
              <button 
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                <EditIcon className="me-1" /> Edit Profile
              </button>
            ) : (
              <div>
                <button 
                  className="btn btn-success me-2"
                  onClick={handleSave}
                >
                  <SaveIcon className="me-1" /> Save
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={handleCancel}
                >
                  <CancelIcon className="me-1" /> Cancel
                </button>
              </div>
            )}
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={isEditing ? editedData.name : profileData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={isEditing ? editedData.email : profileData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="contact_number"
                  value={isEditing ? editedData.contact_number : profileData.contact_number}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Department</label>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={isEditing ? editedData.department : profileData.department}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Position</label>
                <input
                  type="text"
                  className="form-control"
                  name="position"
                  value={isEditing ? editedData.position : profileData.position}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Office Hours</label>
                <input
                  type="text"
                  className="form-control"
                  name="office_hours"
                  value={isEditing ? editedData.office_hours : profileData.office_hours}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="e.g., Mon-Fri 9:00 AM - 5:00 PM"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Specialization</label>
                <input
                  type="text"
                  className="form-control"
                  name="specialization"
                  value={isEditing ? editedData.specialization : profileData.specialization}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Consultation Hours</label>
                <textarea
                  className="form-control"
                  name="consultation_hours"
                  value={isEditing ? editedData.consultation_hours : profileData.consultation_hours}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="3"
                  placeholder="e.g., Monday 2-4 PM, Wednesday 1-3 PM"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
