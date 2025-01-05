import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin 
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import ReCAPTCHA from "react-google-recaptcha";
import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate

DataTable.use(DT);
const AuthLoginBasic = () => {
  const [email, setEmail] = useState(''); // Changed to email
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To handle error messages
  const [showPassword, setShowPassword] = useState(false); // State for showing password
  const [rememberMe, setRememberMe] = useState(false); // Remember me state
  const [isVerified, setIsVerified] = useState(false); // State for reCAPTCHA verification
  const [captchaToken, setCaptchaToken] = useState(''); // State for reCAPTCHA token
  const { setIsAuthenticated, setUserRole } = useContext(AuthContext);
  const navigate = useNavigate();

  // Load saved email from localStorage on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleCaptchaChange = (token) => {
    console.log("Captcha Token:", token); // Debugging
    setCaptchaToken(token); // Save token
    setIsVerified(!!token); // Set to true if token exists
  };
  
   

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      console.log('Attempting login...');
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      const { token, user } = response.data;
      console.log('Login successful, user role:', user.role);
      
      // Store user data and token
      localStorage.setItem('userData', JSON.stringify(user));
      localStorage.setItem('authToken', token);
      
      // Update auth context
      setIsAuthenticated(true);
      setUserRole(user.role.toLowerCase());

      // Redirect based on role
      if (user.role === 'faculty') {
        navigate('/appointmentcards');
      } else if (user.role === 'student') {
        navigate('/studentconsultation');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };
  
    const handleGoogleSignIn = async (credentialResponse) => {
      try {
        console.log('Google credentials received');
        
        if (!credentialResponse?.credential) {
          setError('No credentials received from Google');
          return;
        }

        const response = await axios.post(
          'http://localhost:5000/api/auth/google-login',
          { token: credentialResponse.credential },
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        );

        console.log('Backend response:', response.data);
        const { token, user } = response.data;
        
        // Store auth data
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Role-based redirection
        const userRole = user.role.toLowerCase();
        console.log('User role:', userRole);

        switch (userRole) {
          case 'admin':
            console.log('Redirecting to admin dashboard...');
            navigate('/studentadmindashboard');
            break;
          case 'faculty':
            console.log('Redirecting to faculty dashboard...');
            navigate('/appointmentcards');
            break;
          case 'student':
            console.log('Redirecting to student consultation...');
            navigate('/studentconsultation');
            break;
          default:
            console.error('Invalid role:', userRole);
            setError(`Invalid user role: ${userRole}`);
            break;
        }
      } catch (error) {
        console.error('Google Sign-In Error:', error);
        if (error.response) {
          console.error('Error response:', error.response.data);
          setError(error.response.data.message || 'Authentication failed');
        } else {
          setError('Failed to connect to the server');
        }
      }
    };

    const handleGoogleError = (error) => {
      console.log('Google Login Error:', error);
      setError('Google Login failed. Please try again.');
    };

  
  return (
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
  {/* <title>Login Basic - Pages | Sneat - Bootstrap 5 HTML Admin Template - Pro</title> */}
  <meta name="description" content="Your description here" />

  {/* Favicon */}
  <link rel="icon" type="image/x-icon" href="assets/img/favicon/favicon.ico" />
  {/* Fonts */}
  <link rel="stylesheet" href="/assets/vendor/css/pages/page-auth.css"/>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
  {/* Icons */}
  <link rel="stylesheet" href="assets/vendor/fonts/boxicons.css" />
  <link rel="stylesheet" href="assets/vendor/fonts/fontawesome.css" />
  <link rel="stylesheet" href="assets/vendor/fonts/flag-icons.css" />
  {/* Core CSS */}
  <link rel="stylesheet" href="assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
  <link rel="stylesheet" href="assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
  <link rel="stylesheet" href="assets/css/demo.css" />
  {/* Vendors CSS */}
  <link rel="stylesheet" href="assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
  <link rel="stylesheet" href="assets/vendor/libs/typeahead-js/typeahead.css" />
  {/* Vendor */}
  <link rel="stylesheet" href="assets/vendor/libs/formvalidation/dist/css/formValidation.min.css" />
  {/* Page CSS */}
  {/* Page */}
  <link rel="stylesheet" href="assets/vendor/css/pages/page-auth.css" />
  {/* Helpers */}
  {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
  {/*? Template customizer: To hide customizer set displayCustomizer value false in config.js.  */}
  {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
  {/* Content */}
  <div className="container-xxl">
    <div className="authentication-wrapper authentication-basic container-p-y">
      <div className="authentication-inner">
        {/* Register */}
        <div className="card">
          <div className="card-body">
            {/* Logo */}
            <div className="app-brand justify-content-center">
              <a href="index.html" className="app-brand-link gap-2">
                <span className="app-brand-logo demo">
                 
                </span>
                {/* <span className="appp-brand-text demo text-body fw-bolder">ConsultEase</span> */}
              </a>
            </div>
            {/* /Logo */}
            <h4 className="mb-2">Welcome to ConsultEase!</h4>
            <p className="mb-4">Please sign-in to your account and start the consultation</p>
            <form id="formAuthentication" className="mb-3" onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email </label>
                <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            autoFocus
                                            value={email} // Use 'email' here
                                            onChange={(e) => setEmail(e.target.value)} // Update 'email'
                                            required
                                        />
              </div>
              <div className="mb-3 form-password-toggle">
                <div className="d-flex justify-content-between">
                  <label className="form-label" htmlFor="password">Password</label>
                  <a href="/forgot-password">
                  <small>Forgot Password?</small>
                  </a>
                </div>
                <div className="input-group input-group-merge">
                                            <input
                                                type={showPassword ? "text" : "password"} // Toggle input type based on state
                                                id="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="············"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                           <span
                                                className="input-group-text cursor-pointer"
                                                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                                            >
                                                <i className={`bx ${showPassword ? "bx-show" : "bx-hide"}`} /> {/* Change icon based on state */}
                                            </span>
                                        </div>
              </div>
              {error && <div className="text-danger mb-3">{error}</div>} {/* Display error message */}
              <div className="mb-3">
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="remember-me" 
                        checked={rememberMe} 
                        onChange={() => setRememberMe(!rememberMe)} // Toggle the value
                    />
                    <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                  </div               >
              </div>
              <div style={{ marginTop: "20px", marginBottom: "20px", display: "flex", justifyContent: "center" }}>
              <ReCAPTCHA
  sitekey="6LfYa4YqAAAAACwKqbwlXqecTZsyjFY2eG_-KZ_Q"
  onChange={(token) => {
    console.log("Captcha Token:", token); // Debugging
    setCaptchaToken(token);
    setIsVerified(!!token); // Set to true if token exists
  }}
  onExpired={() => {
    setCaptchaToken('');
    setIsVerified(false); // Reset verification status if captcha expires
  }}
/>

        </div>
        <div className="mb-3">
        <GoogleLogin
        onSuccess={handleGoogleSignIn}
        onError={(error) => {
          console.error('Google Login Error:', error);
          setError('Google Sign-In failed. Please try again.');
        }}
        useOneTap
        theme="filled_blue"
        size="large"
        width="100%"
        text="continue_with"
        shape="rectangular"
      />
        </div>
              <div className="mb-3">
              <button 
  className="btn btn-primary d-grid w-100" 
  type="submit" 
>
  Sign in
</button>

              </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p className="text-center">
            <span>New on our platform? </span>
            <a href="/register">
              <span>Create an account</span>
            </a>
          </p>
            <div className="divider my-4">
              <div className="divider-text">or</div>
            </div>
          </div>
        </div>
        
        {/* /Register */}
      </div>
    </div>
  </div>
  {/* / Content */}
  {/* Core JS */}
  {/* Vendors JS */}
  {/* Main JS */}
  {/* Page JS */}
</div>

  )
}

export default AuthLoginBasic