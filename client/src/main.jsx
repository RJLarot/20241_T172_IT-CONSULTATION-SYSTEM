import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider
import AuthLoginBasic from './components/AuthLoginBasic';
import AuthRegisterBasic from './components/AuthRegisterBasic';
import Dashboard from './components/Dashboard';
import AuthForgotPasswordBasic from './components/AuthForgotPasswordBasic';
import AppUserList from './components/AppUserList';
<<<<<<< HEAD
import AppUserListFaculty from './components/AppUserListFaculty';
=======
>>>>>>> 545bcf5dbc654b69adb0e67944cb5d5f813a7e55

// Replace with your actual Google client ID
const googleClientId = "295099131481-l6mgeh805cerlvbav583lb8tuqm4trrb.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={googleClientId}> {/* Wrap your app with the provider */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<AuthLoginBasic />} /> */}
<<<<<<< HEAD
          <Route path="/" element={<AuthLoginBasic />} />
          <Route path="/studentadmindashboard" element={<AppUserList />} />
          <Route path="/facultyadmindashboard" element={<AppUserListFaculty />} />
=======
          <Route path="/" element={<AppUserList />} />
          <Route path="/studentadmindashboard" element={<AppUserList />} />
>>>>>>> 545bcf5dbc654b69adb0e67944cb5d5f813a7e55
          <Route path="/register" element={<AuthRegisterBasic />} />
          <Route path="/forgot-password" element={<AuthForgotPasswordBasic />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
