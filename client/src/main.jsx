import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthLoginBasic from './components/AuthLoginBasic';
import AuthRegisterBasic from './components/AuthRegisterBasic';
import AuthForgotPasswordBasic from './components/AuthForgotPasswordBasic';
import AppUserList from './components/AppUserList';
import AppUserListFaculty from './components/AppUserListFaculty';
import AuthCallback from './AuthCallBack';
import AppointmentCards from './components/AppointmentCards';
import StudentConsultation from './components/StudentConsultation';
import FacultyProfile from './components/FacultyProfile';
import Schedule from './components/Schedule';
import SubjectsScheduling from './components/SubjectsScheduling';

// Replace with your actual Google client ID
const googleClientId = "295099131481-l6mgeh805cerlvbav583lb8tuqm4trrb.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={googleClientId}> 
      <Router>
        <Routes>
          {/* Root route */}
          <Route path="/" element={<AuthLoginBasic />} />
          
          {/* Main Routes */}
          <Route path="/studentadmindashboard" element={<AppUserList />} />
          <Route path="/facultyadmindashboard" element={<AppUserListFaculty />} />
          <Route path="/studentconsultation" element={<StudentConsultation />} />
          <Route path="/appointmentcards" element={<AppointmentCards />} />
          <Route path="/faculty-profile" element={<FacultyProfile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/subjects" element={<SubjectsScheduling />} />
          
          {/* Auth Routes */}
          <Route path="/register" element={<AuthRegisterBasic />} />
          <Route path="/forgot-password" element={<AuthForgotPasswordBasic />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

// Rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
