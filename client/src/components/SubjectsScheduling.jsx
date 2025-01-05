import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Container,
  Card,
  Table,
  Button,
  Modal,
  Form,
  Row,
  Col,
  Badge,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubjectsScheduling = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('subjectCode');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedDay, setSelectedDay] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentSubject, setCurrentSubject] = useState({
    id: null,
    subjectCode: '',
    subjectName: '',
    schedule: {
      day: '',
      startTime: '',
      endTime: ''
    },
    room: ''
  });

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];

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
      fetchSubjects();
    } catch (err) {
      console.error('Error parsing user data:', err);
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      navigate('/login');
    }
  }, [navigate]);

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

  const fetchSubjects = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.log('No auth token found, redirecting to login');
        navigate('/login');
        return;
      }

      console.log('Fetching subjects...');
      console.log('Token:', token.substring(0, 20) + '...');
      
      const response = await axios.get('http://localhost:5000/api/subjects', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      
      console.log('Response status:', response.status);
      console.log('Response data:', response.data);
      
      if (Array.isArray(response.data)) {
        setSubjects(response.data);
      } else {
        console.error('Invalid response format:', response.data);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Invalid data format received from server'
        });
      }
    } catch (error) {
      console.error('Error fetching subjects:', error);
      console.error('Error response:', error.response?.data);
      
      if (error.response?.status === 401) {
        const errorCode = error.response?.data?.error;
        
        if (errorCode === 'TOKEN_EXPIRED') {
          console.log('Token expired, redirecting to login');
          localStorage.removeItem('authToken');
          Swal.fire({
            icon: 'warning',
            title: 'Session Expired',
            text: 'Your session has expired. Please login again.'
          }).then(() => {
            navigate('/login');
          });
        } else if (errorCode === 'NO_TOKEN' || errorCode === 'INVALID_TOKEN') {
          console.log('Invalid or missing token, redirecting to login');
          localStorage.removeItem('authToken');
          navigate('/login');
        } else {
          console.log('Unauthorized, redirecting to login');
          localStorage.removeItem('authToken');
          navigate('/login');
        }
      } else if (error.response?.status === 404) {
        Swal.fire({
          icon: 'error',
          title: 'API Error',
          text: 'The subjects API endpoint was not found. Please check the server configuration.'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response?.data?.message || 'Failed to fetch subjects'
        });
      }
    }
  };

  // Sort function
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Filter and sort subjects
  const getFilteredAndSortedSubjects = () => {
    return subjects
      .filter(subject => {
        const matchesSearch = (
          subject.subjectCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
          subject.subjectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          subject.room.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const matchesDay = !selectedDay || subject.schedule.includes(selectedDay);
        return matchesSearch && matchesDay;
      })
      .sort((a, b) => {
        let comparison = 0;
        if (sortField === 'schedule') {
          comparison = a.schedule.localeCompare(b.schedule);
        } else {
          comparison = a[sortField].localeCompare(b[sortField]);
        }
        return sortDirection === 'asc' ? comparison : -comparison;
      });
  };

  // Get the day from schedule string
  const getScheduleDay = (schedule) => {
    const dayMatch = schedule.match(/^(\w+)/);
    return dayMatch ? dayMatch[1] : '';
  };

  // Get schedule time
  const getScheduleTime = (schedule) => {
    const timeMatch = schedule.match(/(\d{1,2}:\d{2} - \d{1,2}:\d{2})/);
    return timeMatch ? timeMatch[1] : '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/login');
        return;
      }

      const scheduleString = `${currentSubject.schedule.day} ${currentSubject.schedule.startTime} - ${currentSubject.schedule.endTime}`;
      const subjectData = {
        subjectCode: currentSubject.subjectCode,
        subjectName: currentSubject.subjectName,
        schedule: scheduleString,
        room: currentSubject.room
      };

      if (isEditing) {
        await axios.put(
          `http://localhost:5000/api/subjects/${currentSubject.id}`,
          subjectData,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Subject updated successfully'
        });
      } else {
        await axios.post(
          'http://localhost:5000/api/subjects',
          subjectData,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Subject created successfully'
        });
      }

      setShowModal(false);
      fetchSubjects();
    } catch (error) {
      console.error('Error submitting subject:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Failed to submit subject'
      });
    }
  };

  const handleDelete = async (id) => {
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
        if (!token) {
          navigate('/login');
          return;
        }

        await axios.delete(`http://localhost:5000/api/subjects/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        Swal.fire(
          'Deleted!',
          'Subject has been deleted.',
          'success'
        );
        fetchSubjects();
      }
    } catch (error) {
      console.error('Error deleting subject:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Failed to delete subject'
      });
    }
  };

  const handleModalShow = (subject = null) => {
    if (subject) {
      const [day, time] = subject.schedule.split(' ');
      const [startTime, endTime] = time.split(' - ');
      setCurrentSubject({
        id: subject._id,
        subjectCode: subject.subjectCode,
        subjectName: subject.subjectName,
        schedule: {
          day,
          startTime,
          endTime
        },
        room: subject.room
      });
      setIsEditing(true);
    } else {
      setCurrentSubject({
        id: null,
        subjectCode: '',
        subjectName: '',
        schedule: {
          day: '',
          startTime: '',
          endTime: ''
        },
        room: ''
      });
      setIsEditing(false);
    }
    setShowModal(true);
  };

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
            <button 
              className="btn btn-outline-primary me-3"
              onClick={() => navigate('/subjects')}
            >
              <MenuBookIcon className="me-2" fontSize="small" />
              Subjects
            </button>
            <div className="dropdown">
              <button 
                className="btn btn-link text-decoration-none text-dark"
                onClick={toggleDropdown}
              >
                <AccountCircleIcon />
              </button>
              {showProfileDropdown && (
                <div className="dropdown-menu show" style={{ position: 'absolute', right: 0 }}>
                  <button className="dropdown-item" onClick={handleProfileClick}>
                    <AccountCircleIcon className="me-2" fontSize="small" />
                    Profile
                  </button>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <LogoutIcon className="me-2" fontSize="small" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Container className="py-4">
        <Card className="shadow">
          <Card.Header className="bg-white py-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center">
                <button 
                  className="btn btn-link text-decoration-none text-dark"
                  onClick={() => navigate('/appointmentcards')}
                >
                  <ArrowBackIcon /> Back
                </button>
                <h5 className="mb-0 ms-3">Subjects Management</h5>
              </div>
              <div className="d-flex align-items-center">
                <Button variant="primary" onClick={() => handleModalShow()}>
                  <AddIcon className="me-1" /> Add Subject
                </Button>
                <div className="dropdown ms-3">
                  <button 
                    className="btn btn-link text-decoration-none text-dark dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                    onClick={toggleDropdown}
                  >
                    <AccountCircleIcon />
                  </button>
                  <ul className={`dropdown-menu dropdown-menu-end ${showProfileDropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1">
                    <li><button className="dropdown-item" onClick={handleProfileClick}>Profile</button></li>
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex gap-3">
              <InputGroup>
                <InputGroup.Text>
                  <SearchIcon />
                </InputGroup.Text>
                <FormControl
                  placeholder="Search subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
              <Form.Select
                style={{ width: 'auto' }}
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                <option value="">All Days</option>
                {daysOfWeek.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </Form.Select>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table hover className="align-middle">
                <thead>
                  <tr>
                    <th onClick={() => handleSort('subjectCode')} style={{ cursor: 'pointer' }}>
                      <div className="d-flex align-items-center">
                        Subject Code
                        {sortField === 'subjectCode' && (
                          <SortIcon className={`ms-1 ${sortDirection === 'desc' ? 'rotate-180' : ''}`} />
                        )}
                      </div>
                    </th>
                    <th onClick={() => handleSort('subjectName')} style={{ cursor: 'pointer' }}>
                      <div className="d-flex align-items-center">
                        Subject Name
                        {sortField === 'subjectName' && (
                          <SortIcon className={`ms-1 ${sortDirection === 'desc' ? 'rotate-180' : ''}`} />
                        )}
                      </div>
                    </th>
                    <th onClick={() => handleSort('schedule')} style={{ cursor: 'pointer' }}>
                      <div className="d-flex align-items-center">
                        Schedule
                        {sortField === 'schedule' && (
                          <SortIcon className={`ms-1 ${sortDirection === 'desc' ? 'rotate-180' : ''}`} />
                        )}
                      </div>
                    </th>
                    <th onClick={() => handleSort('room')} style={{ cursor: 'pointer' }}>
                      <div className="d-flex align-items-center">
                        Room
                        {sortField === 'room' && (
                          <SortIcon className={`ms-1 ${sortDirection === 'desc' ? 'rotate-180' : ''}`} />
                        )}
                      </div>
                    </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {getFilteredAndSortedSubjects().map((subject) => (
                    <tr key={subject._id}>
                      <td>
                        <Badge bg="primary" className="fw-normal">
                          {subject.subjectCode}
                        </Badge>
                      </td>
                      <td>{subject.subjectName}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <AccessTimeIcon className="me-2" fontSize="small" />
                          <div>
                            <Badge bg="info" className="me-2">
                              {getScheduleDay(subject.schedule)}
                            </Badge>
                            {getScheduleTime(subject.schedule)}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <RoomIcon className="me-2" fontSize="small" />
                          <Badge bg="secondary" className="fw-normal">
                            {subject.room}
                          </Badge>
                        </div>
                      </td>
                      <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="me-2"
                          onClick={() => handleModalShow(subject)}
                        >
                          <EditIcon fontSize="small" />
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(subject._id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{isEditing ? 'Edit Subject' : 'Add Subject'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter subject code"
                      value={currentSubject.subjectCode}
                      onChange={(e) =>
                        setCurrentSubject({
                          ...currentSubject,
                          subjectCode: e.target.value
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter subject name"
                      value={currentSubject.subjectName}
                      onChange={(e) =>
                        setCurrentSubject({
                          ...currentSubject,
                          subjectName: e.target.value
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Day</Form.Label>
                    <Form.Select
                      value={currentSubject.schedule.day}
                      onChange={(e) =>
                        setCurrentSubject({
                          ...currentSubject,
                          schedule: {
                            ...currentSubject.schedule,
                            day: e.target.value
                          }
                        })
                      }
                      required
                    >
                      <option value="">Select Day</option>
                      {daysOfWeek.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control
                      type="time"
                      value={currentSubject.schedule.startTime}
                      onChange={(e) =>
                        setCurrentSubject({
                          ...currentSubject,
                          schedule: {
                            ...currentSubject.schedule,
                            startTime: e.target.value
                          }
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control
                      type="time"
                      value={currentSubject.schedule.endTime}
                      onChange={(e) =>
                        setCurrentSubject({
                          ...currentSubject,
                          schedule: {
                            ...currentSubject.schedule,
                            endTime: e.target.value
                          }
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Room</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter room"
                  value={currentSubject.room}
                  onChange={(e) =>
                    setCurrentSubject({
                      ...currentSubject,
                      room: e.target.value
                    })
                  }
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button variant="secondary" className="me-2" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  {isEditing ? 'Update' : 'Add'} Subject
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default SubjectsScheduling;
