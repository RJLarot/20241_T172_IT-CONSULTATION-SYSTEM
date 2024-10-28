// App.jsx
import { useState } from 'react';
import './App.css';
import ReCAPTCHA from 'react-google-recaptcha';

function App() {
  const [formType, setFormType] = useState('studentLogin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studentId, setStudentId] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Replace with your reCAPTCHA site key
  const RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_SITE_KEY";

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!captchaToken) {
      setErrorMessage("Please complete the CAPTCHA");
      return;
    }

    const endpoint =
      formType === 'studentLogin'
        ? '/api/student/login'
        : formType === 'studentRegister'
        ? '/api/student/register'
        : formType === 'instructorLogin'
        ? '/api/instructor/login'
        : '/api/admin/login';

    try {
      const response = await fetch(`http://localhost:8000${endpoint}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          studentId: formType === 'studentRegister' ? studentId : undefined,
          captchaToken,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`${formType.includes('Login') ? 'Login' : 'Registration'} successful!`);
      } else {
        setErrorMessage('Invalid credentials or user not found.');
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Faculty Consultation Management System</h1>

      {/* Login/Register Form Card */}
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">
            {formType === 'studentLogin'
              ? 'Student Login'
              : formType === 'studentRegister'
              ? 'Student Registration'
              : formType === 'instructorLogin'
              ? 'Instructor Login'
              : 'Admin Login'}
          </h5>
          
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {formType === 'studentRegister' && (
              <div className="mb-3">
                <label htmlFor="studentId" className="form-label">Student ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="studentId"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
                />
              </div>
            )}

            {/* reCAPTCHA Component */}
            <div className="mb-3">
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
            </div>

            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <button type="submit" className="btn btn-primary w-100">
              {formType.includes('Login') ? 'Login' : 'Register'}
            </button>
          </form>
        </div>

        {/* Card Footer for Links */}
        <div className="card-footer text-center">
          <p>
            {formType !== 'studentRegister' && (
              <span>
                <a href="#" onClick={() => setFormType('studentRegister')}>
                  Register as a Student
                </a>
                <br />
              </span>
            )}
            {formType !== 'studentLogin' && (
              <span>
                <a href="#" onClick={() => setFormType('studentLogin')}>
                  Login as a Student
                </a>
                <br />
              </span>
            )}
            {formType !== 'instructorLogin' && (
              <span>
                <a href="#" onClick={() => setFormType('instructorLogin')}>
                  Login as an Instructor
                </a>
                <br />
              </span>
            )}
            {formType !== 'adminLogin' && (
              <span>
                <a href="#" onClick={() => setFormType('adminLogin')}>
                  Login as an Admin
                </a>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
