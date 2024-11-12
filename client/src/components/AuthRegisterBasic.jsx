import React from 'react';

function AuthRegisterBasic() {
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
      {/* Content */}
      <div className="container-xxl d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            {/* Register Card */}
            <div className="card" style={{ width: '700px', margin: '20px auto' }}>
              <div className="card-body">
              {/* Logo */}
                  <div className="app-brand justify-content-center">
                    <a href="index.html" className="app-brand-link gap-2">
                      <span className="app-brand-logo demo">
                        {/* Replace this with your icon */}
                        {/* <img src="/assets/img/favicon/logo.ico" alt="Logo" style={{ width: '25px', height: 'auto' }} /> */}
                      </span>
                      {/* <span className="app-brand-text demo text-body fw-bolder">Sneat</span> */}
                    </a>
                  </div>
              {/* /Logo */}

                <h4 className="mb-2">REGISTER HERE!</h4>
                <p className="mb-4"></p>
                <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                  <div className="row mb-3">
                  <div className="col-4">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        required
                      />
                      
                    </div>

                    <div className="col-4">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="col-4">
                          <label htmlFor="middleInitial" className="form-label">Middle Initial</label>
                          <input
                            type="text"
                            className="form-control"
                            id="middleInitial"
                            name="middleInitial"
                            placeholder="Enter your middle initial"
                            maxLength={1} // Limits input to one character
                            required
                            onChange={(e) => {
                              // Allow only letters
                              const value = e.target.value;
                              if (value && !/^[a-zA-Z]$/.test(value)) {
                                // Prevent non-letter input
                                e.target.value = value.slice(0, -1);
                              }
                            }}
                          />
                        </div>

                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="studentId" className="form-label">Student ID</label>
                      <input type="text" className="form-control" id="studentId" name="studentId" placeholder="Enter your student ID" required />
                    </div>
                    <div className="col-6">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6 form-password-toggle">
                      <label className="form-label" htmlFor="password">Password</label>
                      <div className="input-group input-group-merge">
                        <input type="password" id="password" className="form-control" name="password" placeholder="············" aria-describedby="password" required />
                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide" /></span>
                      </div>
                    </div>
                    <div className="col-6 form-password-toggle">
                      <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                      <div className="input-group input-group-merge">
                        <input type="password" id="confirmPassword" className="form-control" name="confirmPassword" placeholder="············" required />
                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="role" id="student" value="student" required />
                        <label className="form-check-label" htmlFor="student">Student</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="role" id="faculty" value="faculty" required />
                        <label className="form-check-label" htmlFor="faculty">Faculty</label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" required />
                      <label className="form-check-label" htmlFor="terms-conditions">
                        I agree to
                        <a href="#"> privacy policy &amp; terms</a>
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-primary d-grid w-100">Sign up</button>
                </form>
                <p className="text-center">
                  <span>Already have an account?</span>
                  <a href="/">
                    <span> Sign in instead</span>
                  </a>
                </p>
                <div className="divider my-4">
                  <div className="divider-text">or</div>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#;" className="btn btn-icon btn-label-facebook me-3">
                    <i className="tf-icons bx bxl-facebook" />
                  </a>
                  <a href="#" className="btn btn-icon btn-label-google-plus me-3">
                    <i className="tf-icons bx bxl-google-plus" />
                  </a>
                  <a href="#" className="btn btn-icon btn-label-twitter">
                    <i className="tf-icons bx bxl-twitter" />
                  </a>
                </div>
              </div>
            </div>
            {/* Register Card */}
          </div>
        </div>
      </div>
      {/* / Content */}
      {/* Core JS */}
      {/* Vendors JS */}
      {/* Main JS */}
      {/* Page JS */}
    </div>
  );
}

export default AuthRegisterBasic;
