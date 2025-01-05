import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Swal from 'sweetalert2';

const Schedule = () => {
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState([]);
  const [isAddingSchedule, setIsAddingSchedule] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newSchedule, setNewSchedule] = useState({
    day: '',
    startTime: '',
    endTime: '',
    location: ''
  });
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  useEffect(() => {
    const userDataStr = localStorage.getItem('userData');
    const token = localStorage.getItem('authToken');
    
    if (!userDataStr || !token) {
      navigate('/login');
      return;
    }

    try {
      const userData = JSON.parse(userDataStr);
      setUserData(userData);
      console.log('Token:', token); // Debug log
      fetchSchedules(token);
    } catch (err) {
      console.error('Error parsing user data:', err);
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      navigate('/login');
    }
  }, [navigate]);

  const fetchSchedules = async (token) => {
    try {
      console.log('Fetching schedules with token:', token); // Debug log
      const response = await axios.get('http://localhost:5000/api/schedules', {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('Schedules response:', response.data); // Debug log
      setSchedules(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching schedules:', error.response || error);
      if (error.response?.status === 401 || error.response?.status === 403) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        navigate('/login');
      } else {
        setError('Failed to load schedules');
        setLoading(false);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSchedule(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddSchedule = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/login');
        return;
      }

      if (!newSchedule.day || !newSchedule.startTime || !newSchedule.endTime || !newSchedule.location) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please fill in all fields'
        });
        return;
      }

      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      if (editingIndex !== null) {
        const scheduleId = schedules[editingIndex]._id;
        await axios.put(
          `http://localhost:5000/api/schedules/${scheduleId}`,
          newSchedule,
          { headers }
        );
      } else {
        await axios.post(
          'http://localhost:5000/api/schedules',
          newSchedule,
          { headers }
        );
      }

      await fetchSchedules(token);
      setIsAddingSchedule(false);
      setEditingIndex(null);
      setNewSchedule({
        day: '',
        startTime: '',
        endTime: '',
        location: ''
      });

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: editingIndex !== null ? 'Schedule updated successfully' : 'Schedule added successfully'
      });
    } catch (error) {
      console.error('Error saving schedule:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Failed to save schedule'
      });
    }
  };

  const handleEdit = (index) => {
    const schedule = schedules[index];
    setNewSchedule({
      day: schedule.day,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      location: schedule.location
    });
    setEditingIndex(index);
    setIsAddingSchedule(true);
  };

  const handleDelete = async (index) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        const token = localStorage.getItem('authToken');
        const scheduleId = schedules[index]._id;
        await axios.delete(`http://localhost:5000/api/schedules/${scheduleId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        await fetchSchedules(token);
        
        Swal.fire(
          'Deleted!',
          'Your schedule has been deleted.',
          'success'
        );
      }
    } catch (error) {
      console.error('Error deleting schedule:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Failed to delete schedule'
      });
    }
  };

  const handleCancel = () => {
    setIsAddingSchedule(false);
    setEditingIndex(null);
    setNewSchedule({
      day: '',
      startTime: '',
      endTime: '',
      location: ''
    });
  };

  const handleBack = () => {
    navigate('/appointmentcards');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/faculty-profile');
    setShowProfileDropdown(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowProfileDropdown(!showProfileDropdown);
  };

  const convertTo12Hour = (time24) => {
    if (!time24) return '';
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container-fluid p-0" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ConsultEase</a>
          <div className="ms-auto d-flex align-items-center">
            <button 
              className="btn btn-outline-primary me-3"
              onClick={() => navigate('/schedule')}
            >
              <ScheduleIcon className="me-2" fontSize="small" />
              Schedule
            </button>
            
            <div className="dropdown" onClick={(e) => e.stopPropagation()}>
              <div 
                onClick={toggleDropdown}
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <div 
                    className="dropdown-item"
                    onClick={handleProfileClick}
                  >
                    <AccountCircleIcon className="me-2" fontSize="small" />
                    Profile
                  </div>
                  <div className="dropdown-divider"></div>
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
              <h4 className="mb-0 ms-3">Consultation Schedule</h4>
            </div>
            {!isAddingSchedule && (
              <button 
                className="btn btn-primary"
                onClick={() => setIsAddingSchedule(true)}
              >
                <AddIcon className="me-1" /> Add Schedule
              </button>
            )}
          </div>
          <div className="card-body">
            {isAddingSchedule && (
              <div className="mb-4 p-4 border rounded bg-light">
                <h5 className="mb-4">{editingIndex !== null ? 'Edit Schedule' : 'Add New Schedule'}</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Day</label>
                    <select
                      className="form-select"
                      name="day"
                      value={newSchedule.day}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Day</option>
                      {daysOfWeek.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Start Time</label>
                    <input
                      type="time"
                      className="form-control"
                      name="startTime"
                      value={newSchedule.startTime}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">End Time</label>
                    <input
                      type="time"
                      className="form-control"
                      name="endTime"
                      value={newSchedule.endTime}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={newSchedule.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Room 101, Faculty Office"
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <button 
                      className="btn btn-success me-2"
                      onClick={handleAddSchedule}
                    >
                      <SaveIcon className="me-1" /> {editingIndex !== null ? 'Update' : 'Save'}
                    </button>
                    <button 
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      <CloseIcon className="me-1" /> Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {schedules.length === 0 ? (
              <div className="text-center text-muted py-5">
                <p className="mb-0">No schedules added yet. Click "Add Schedule" to create your first schedule.</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Location</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.map((schedule, index) => (
                      <tr key={schedule._id}>
                        <td>{schedule.day}</td>
                        <td>{convertTo12Hour(schedule.startTime)} - {convertTo12Hour(schedule.endTime)}</td>
                        <td>{schedule.location}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary me-2"
                            onClick={() => handleEdit(index)}
                          >
                            <EditIcon fontSize="small" />
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(index)}
                          >
                            <DeleteIcon fontSize="small" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
