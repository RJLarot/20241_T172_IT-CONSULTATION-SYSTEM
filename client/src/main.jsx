import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider
import AuthLoginBasic from './components/AuthLoginBasic';
import AuthRegisterBasic from './components/AuthRegisterBasic';
import AuthForgotPasswordBasic from './components/AuthForgotPasswordBasic';
import AppUserList from './components/AppUserList';
import AppUserListFaculty from './components/AppUserListFaculty';
import AuthCallback from './AuthCallBack';  // New callback component
import AppointmentCards from './components/AppointmentCards';
import StudentConsultation from './components/StudentConsultation.jsx';

// Replace with your actual Google client ID
const googleClientId = "295099131481-l6mgeh805cerlvbav583lb8tuqm4trrb.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={googleClientId}> {/* Wrap your app with the provider */}
      <Router>
        <Routes>
          {/* Root route: redirect to dashboard if logged in, else show login */}
          <Route path="/" element={<AuthLoginBasic />} />
          
          {/* Direct Routes without protection */}
          <Route path="/studentadmindashboard" element={<AppUserList />} />
          <Route path="/facultyadmindashboard" element={<AppUserListFaculty />} />
          <Route path="/studentconsultation" element={<StudentConsultation />} />
          <Route path="/appointmentcards" element={<AppointmentCards />} />

          {/* Other Routes */}
          <Route path="/register" element={<AuthRegisterBasic />} />
          <Route path="/forgot-password" element={<AuthForgotPasswordBasic />} />

          {/* Google OAuth Callback Route */}
          <Route path="/auth/callback" element={<AuthCallback />} />
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
