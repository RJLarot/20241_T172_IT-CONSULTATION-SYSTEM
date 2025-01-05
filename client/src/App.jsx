import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import AuthLoginBasic from './components/AuthLoginBasic';
import AppointmentCards from './components/AppointmentCards';
import StudentConsultation from './components/StudentConsultation';
import FacultyProfile from './components/FacultyProfile';
import Schedule from './components/Schedule';
import SubjectsScheduling from './components/SubjectsScheduling';

// Create auth context
const AuthContext = createContext(null);

// Auth provider component
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('userData');
        
        if (token && userData) {
          const user = JSON.parse(userData);
          const role = user.role?.toLowerCase();
          
          console.log('Auth check - User data:', user);
          console.log('Auth check - Role:', role);
          
          if (role && ['faculty', 'student'].includes(role)) {
            setIsAuthenticated(true);
            setUserRole(role);
          } else {
            console.error('Invalid role in stored data:', role);
            localStorage.clear();
            setIsAuthenticated(false);
            setUserRole(null);
          }
        } else {
          setIsAuthenticated(false);
          setUserRole(null);
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        localStorage.clear();
        setIsAuthenticated(false);
        setUserRole(null);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    userRole,
    setUserRole,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, userRole, isLoading } = useContext(AuthContext);
  const location = useLocation();

  console.log('PrivateRoute - Auth state:', {
    isAuthenticated,
    userRole,
    allowedRoles,
    currentPath: location.pathname
  });

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    console.log('Role not allowed, redirecting to appropriate page');
    const redirectPath = userRole === 'faculty' ? '/appointmentcards' : '/studentconsultation';
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated, userRole, isLoading } = useContext(AuthContext);
  const location = useLocation();
  
  console.log('PublicRoute - Auth state:', {
    isAuthenticated,
    userRole,
    currentPath: location.pathname
  });

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (isAuthenticated) {
    console.log('Already authenticated, redirecting to role-specific page');
    const redirectPath = userRole === 'faculty' ? '/appointmentcards' : '/studentconsultation';
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<PublicRoute><AuthLoginBasic /></PublicRoute>} />
          <Route path="/appointmentcards" element={<PrivateRoute allowedRoles={['faculty']}><AppointmentCards /></PrivateRoute>} />
          <Route path="/studentconsultation" element={<PrivateRoute allowedRoles={['student']}><StudentConsultation /></PrivateRoute>} />
          <Route path="/faculty-profile" element={<PrivateRoute allowedRoles={['faculty']}><FacultyProfile /></PrivateRoute>} />
          <Route path="/schedule" element={<PrivateRoute allowedRoles={['faculty']}><Schedule /></PrivateRoute>} />
          <Route path="/subjects" element={<PrivateRoute allowedRoles={['faculty']}><SubjectsScheduling /></PrivateRoute>} />
          <Route path="/subjects-scheduling" element={<Navigate to="/subjects" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
