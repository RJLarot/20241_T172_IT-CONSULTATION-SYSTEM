import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AuthRegisterBasic() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleInitial: '',
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    terms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.terms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        lastName: formData.lastName,
        firstName: formData.firstName,
        middleInitial: formData.middleInitial,
        school_id: formData.id,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      console.log('Registration successful:', response.data);
      navigate('/'); // Redirect to login page
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
      {/* <title>Register Basic - Pages | Sneat - Bootstrap 5 HTML Admin Template - Pro</title> */}
      <meta name="description" content="true" />
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="assets/img/favicon/favicon.ico" />
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
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
      {/* Page 
      <link rel="stylesheet" href="assets/vendor/css/pages/page-auth.css" >*/}
      <div className="container-xxl d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card" style={{ width: '700px', margin: '20px auto' }}>
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="index.html" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo">
                    </span>
                  </a>
                </div>

                <h4 className="mb-2">REGISTER HERE!</h4>
                {error && <div className="alert alert-danger">{error}</div>}
                
                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-4">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-4">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-4">
                      <label htmlFor="middleInitial" className="form-label">Middle Initial</label>
                      <input
                        type="text"
                        className="form-control"
                        id="middleInitial"
                        name="middleInitial"
                        placeholder="Enter your middle initial"
                        maxLength={1}
                        value={formData.middleInitial}
                        onChange={handleInputChange}
                        pattern="[A-Za-z]"
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="id" className="form-label">
                        {formData.role === 'faculty' ? 'Faculty ID' : 'Student ID'}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="id"
                        name="id"
                        placeholder={`Enter your ${formData.role === 'faculty' ? 'faculty' : 'student'} ID`}
                        value={formData.id}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-6 form-password-toggle">
                      <label className="form-label" htmlFor="password">Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="············"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <span className="input-group-text cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                          <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'}`} />
                        </span>
                      </div>
                    </div>

                    <div className="col-6 form-password-toggle">
                      <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword"
                          className="form-control"
                          name="confirmPassword"
                          placeholder="············"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                        />
                        <span className="input-group-text cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                          <i className={`bx ${showConfirmPassword ? 'bx-show' : 'bx-hide'}`} />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="student"
                          value="student"
                          checked={formData.role === 'student'}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="student">Student</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="faculty"
                          value="faculty"
                          checked={formData.role === 'faculty'}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="faculty">Faculty</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <a href="#">privacy policy &amp; terms</a>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary d-grid w-100">Sign up</button>
                </form>

                <p className="text-center">
                  <span>Already have an account?</span>
                  <a href="/">
                    <span> Sign in instead</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthRegisterBasic;
