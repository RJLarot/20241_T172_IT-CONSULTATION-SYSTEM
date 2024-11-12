import React from 'react'

function Dashboard() {
  return (
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
  {/* <title>Dashboard - Analytics | Sneat - Bootstrap 5 HTML Admin Template - Pro</title> */}
  <meta name="description" content="true" />
  {/* Favicon */}
  <link rel="icon" type="image/x-icon" href="assets/img/favicon/favicon.ico" />
  {/* Fonts */}
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
  <link rel="stylesheet" href="assets/vendor/libs/apex-charts/apex-charts.css" />
  {/* Page CSS */}
  {/* Helpers */}
  {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
  {/*? Template customizer: To hide customizer set displayCustomizer value false in config.js.  */}
  {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
  {/* Layout wrapper */}
  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      {/* Menu */}
      <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo">
          <a href="index.html" className="app-brand-link">
            <span className="app-brand-logo demo">
              {/* <svg width={25} viewBox="0 0 25 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z" id="path-1" />
                  <path d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z" id="path-3" />
                  <path d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z" id="path-4" />
                  <path d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z" id="path-5" />
                </defs>
                <g id="g-app-brand" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
                    <g id="Icon" transform="translate(27.000000, 15.000000)">
                      <g id="Mask" transform="translate(0.000000, 8.000000)">
                        <mask id="mask-2" fill="white">
                          <use xlinkHref="#path-1" />
                        </mask>
                        <use fill="#696cff" xlinkHref="#path-1" />
                        <g id="Path-3" mask="url(#mask-2)">
                          <use fill="#696cff" xlinkHref="#path-3" />
                          <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-3" />
                        </g>
                        <g id="Path-4" mask="url(#mask-2)">
                          <use fill="#696cff" xlinkHref="#path-4" />
                          <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-4" />
                        </g>
                      </g>
                      <g id="Triangle" transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) ">
                        <use fill="#696cff" xlinkHref="#path-5" />
                        <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-5" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg> */}
            </span>
            <span className="app-brand-text demo menu-text fw-bolder ms-2">Dashboard</span>
          </a>
          <a href="#" className="layout-menu-toggle menu-link text-large ms-auto">
            <i className="bx bx-chevron-left bx-sm align-middle" />
          </a>
        </div>
        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1">
          {/* Dashboards */}
          <li className="menu-item active open">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-home-circle" />
              <div data-i18n="Dashboards">Dashboards</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item active">
                <a href="dashboards-analytics.html" className="menu-link">
                  <div data-i18n="Analytics">Analytics</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="dashboards-crm.html" className="menu-link">
                  <div data-i18n="CRM">CRM</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="dashboards-ecommerce.html" className="menu-link">
                  <div data-i18n="eCommerce">eCommerce</div>
                </a>
              </li>
            </ul>
          </li>
          {/* Layouts */}
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-layout" />
              <div data-i18n="Layouts">Layouts</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="layouts-collapsed-menu.html" className="menu-link">
                  <div data-i18n="Collapsed menu">Collapsed menu</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-content-navbar.html" className="menu-link">
                  <div data-i18n="Content navbar">Content navbar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-content-navbar-with-sidebar.html" className="menu-link">
                  <div data-i18n="Content nav + Sidebar">Content nav + Sidebar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="../horizontal-menu-template" className="menu-link" target="_blank">
                  <div data-i18n="Horizontal">Horizontal</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-without-menu.html" className="menu-link">
                  <div data-i18n="Without menu">Without menu</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-without-navbar.html" className="menu-link">
                  <div data-i18n="Without navbar">Without navbar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-fluid.html" className="menu-link">
                  <div data-i18n="Fluid">Fluid</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-container.html" className="menu-link">
                  <div data-i18n="Container">Container</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-blank.html" className="menu-link">
                  <div data-i18n="Blank">Blank</div>
                </a>
              </li>
            </ul>
          </li>
          {/* Apps & Pages */}
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Apps &amp; Pages</span>
          </li>
          <li className="menu-item">
            <a href="app-calendar.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-calendar" />
              <div data-i18n="Calendar">Calendar</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-food-menu" />
              <div data-i18n="Invoice">Invoice</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="app-invoice-list.html" className="menu-link">
                  <div data-i18n="List">List</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-invoice-preview.html" className="menu-link">
                  <div data-i18n="Preview">Preview</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-invoice-edit.html" className="menu-link">
                  <div data-i18n="Edit">Edit</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-invoice-add.html" className="menu-link">
                  <div data-i18n="Add">Add</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-user" />
              <div data-i18n="Users">Users</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="app-user-list.html" className="menu-link">
                  <div data-i18n="List">List</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="View">View</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-user-view-account.html" className="menu-link">
                      <div data-i18n="Account">Account</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-user-view-security.html" className="menu-link">
                      <div data-i18n="Security">Security</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-user-view-billing.html" className="menu-link">
                      <div data-i18n="Billing & Plans">Billing &amp; Plans</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-user-view-notifications.html" className="menu-link">
                      <div data-i18n="Notifications">Notifications</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-user-view-connections.html" className="menu-link">
                      <div data-i18n="Connections">Connections</div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-check-shield" />
              <div data-i18n="Roles & Permissions">Roles &amp; Permissions</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="app-access-roles.html" className="menu-link">
                  <div data-i18n="Roles">Roles</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-access-permission.html" className="menu-link">
                  <div data-i18n="Permission">Permission</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-dock-top" />
              <div data-i18n="Pages">Pages</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="User Profile">User Profile</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="pages-profile-user.html" className="menu-link">
                      <div data-i18n="Profile">Profile</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-profile-teams.html" className="menu-link">
                      <div data-i18n="Teams">Teams</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-profile-projects.html" className="menu-link">
                      <div data-i18n="Projects">Projects</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-profile-connections.html" className="menu-link">
                      <div data-i18n="Connections">Connections</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="Account Settings">Account Settings</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="pages-account-settings-account.html" className="menu-link">
                      <div data-i18n="Account">Account</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-account-settings-security.html" className="menu-link">
                      <div data-i18n="Security">Security</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-account-settings-billing.html" className="menu-link">
                      <div data-i18n="Billing & Plans">Billing &amp; Plans</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-account-settings-notifications.html" className="menu-link">
                      <div data-i18n="Notifications">Notifications</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-account-settings-connections.html" className="menu-link">
                      <div data-i18n="Connections">Connections</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="pages-faq.html" className="menu-link">
                  <div data-i18n="FAQ">FAQ</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="Help Center">Help Center</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="pages-help-center-landing.html" className="menu-link">
                      <div data-i18n="Landing">Landing</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-help-center-categories.html" className="menu-link">
                      <div data-i18n="Categories">Categories</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-help-center-article.html" className="menu-link">
                      <div data-i18n="Article">Article</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="pages-pricing.html" className="menu-link">
                  <div data-i18n="Pricing">Pricing</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="Misc">Misc</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="pages-misc-error.html" className="menu-link" target="_blank">
                      <div data-i18n="Error">Error</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-misc-under-maintenance.html" className="menu-link" target="_blank">
                      <div data-i18n="Under Maintenance">Under Maintenance</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-misc-comingsoon.html" className="menu-link" target="_blank">
                      <div data-i18n="Coming Soon">Coming Soon</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-misc-not-authorized.html" className="menu-link" target="_blank">
                      <div data-i18n="Not Authorized">Not Authorized</div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock-open-alt" />
              <div data-i18n="Authentications">Authentications</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="Login">Login</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-login-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-login-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="Register">Register</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-register-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-register-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-register-multisteps.html" className="menu-link" target="_blank">
                      <div data-i18n="Multi-steps">Multi-steps</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="Verify Email">Verify Email</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-verify-email-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-verify-email-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="Reset Password">Reset Password</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-reset-password-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-reset-password-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="Forgot Password">Forgot Password</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-forgot-password-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="Two Steps">Two Steps</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-two-steps-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-two-steps-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-spreadsheet" />
              <div data-i18n="Wizard Examples">Wizard Examples</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="wizard-ex-checkout.html" className="menu-link">
                  <div data-i18n="Checkout">Checkout</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="wizard-ex-property-listing.html" className="menu-link">
                  <div data-i18n="Property Listing">Property Listing</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="wizard-ex-create-deal.html" className="menu-link">
                  <div data-i18n="Create Deal">Create Deal</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="modal-examples.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-window-open" />
              <div data-i18n="Modal Examples">Modal Examples</div>
            </a>
          </li>
          {/* Components */}
          <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li>
          {/* Cards */}
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-collection" />
              <div data-i18n="Cards">Cards</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="cards-basic.html" className="menu-link">
                  <div data-i18n="Basic">Basic</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="cards-advance.html" className="menu-link">
                  <div data-i18n="Advance">Advance</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="cards-statistics.html" className="menu-link">
                  <div data-i18n="Statistics">Statistics</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="cards-analytics.html" className="menu-link">
                  <div data-i18n="Analytics">Analytics</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="cards-gamifications.html" className="menu-link">
                  <div data-i18n="Gamifications">Gamifications</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="cards-actions.html" className="menu-link">
                  <div data-i18n="Actions">Actions</div>
                </a>
              </li>
            </ul>
          </li>
          {/* User interface */}
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-box" />
              <div data-i18n="User interface">User interface</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="ui-accordion.html" className="menu-link">
                  <div data-i18n="Accordion">Accordion</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-alerts.html" className="menu-link">
                  <div data-i18n="Alerts">Alerts</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-badges.html" className="menu-link">
                  <div data-i18n="Badges">Badges</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-buttons.html" className="menu-link">
                  <div data-i18n="Buttons">Buttons</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-carousel.html" className="menu-link">
                  <div data-i18n="Carousel">Carousel</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-collapse.html" className="menu-link">
                  <div data-i18n="Collapse">Collapse</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-dropdowns.html" className="menu-link">
                  <div data-i18n="Dropdowns">Dropdowns</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-footer.html" className="menu-link">
                  <div data-i18n="Footer">Footer</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-list-groups.html" className="menu-link">
                  <div data-i18n="List Groups">List groups</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-modals.html" className="menu-link">
                  <div data-i18n="Modals">Modals</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-navbar.html" className="menu-link">
                  <div data-i18n="Navbar">Navbar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-offcanvas.html" className="menu-link">
                  <div data-i18n="Offcanvas">Offcanvas</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                  <div data-i18n="Pagination & Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-progress.html" className="menu-link">
                  <div data-i18n="Progress">Progress</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-spinners.html" className="menu-link">
                  <div data-i18n="Spinners">Spinners</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-tabs-pills.html" className="menu-link">
                  <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-toasts.html" className="menu-link">
                  <div data-i18n="Toasts">Toasts</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-tooltips-popovers.html" className="menu-link">
                  <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-typography.html" className="menu-link">
                  <div data-i18n="Typography">Typography</div>
                </a>
              </li>
            </ul>
          </li>
          {/* Extended components */}
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-copy" />
              <div data-i18n="Extended UI">Extended UI</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="extended-ui-avatar.html" className="menu-link">
                  <div data-i18n="Avatar">Avatar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="extended-ui-blockui.html" className="menu-link">
                  <div data-i18n="BlockUI">BlockUI</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="extended-ui-drag-and-drop.html" className="menu-link">
                  <div data-i18n="Drag & Drop">Drag &amp; Drop</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="extended-ui-media-player.html" className="menu-link">
                  <div data-i18n="Media Player">Media Player</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
                  <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="extended-ui-star-ratings.html" className="menu-link">
                  <div data-i18n="Star Ratings">Star Ratings</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="extended-ui-sweetalert2.html" className="menu-link">
                  <div data-i18n="SweetAlert2">SweetAlert2</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="extended-ui-text-divider.html" className="menu-link">
                  <div data-i18n="Text Divider">Text Divider</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-toggle">
                  <div data-i18n="Timeline">Timeline</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="extended-ui-timeline-basic.html" className="menu-link">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-timeline-fullscreen.html" className="menu-link">
                      <div data-i18n="Fullscreen">Fullscreen</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="extended-ui-tour.html" className="menu-link">
                  <div data-i18n="Tour">Tour</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="extended-ui-treeview.html" className="menu-link">
                  <div data-i18n="Treeview">Treeview</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="extended-ui-misc.html" className="menu-link">
                  <div data-i18n="Miscellaneous">Miscellaneous</div>
                </a>
              </li>
            </ul>
          </li>
          {/* Icons */}
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-crown" />
              <div data-i18n="Icons">Icons</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="icons-boxicons.html" className="menu-link">
                  <div data-i18n="Boxicons">Boxicons</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="icons-font-awesome.html" className="menu-link">
                  <div data-i18n="Fontawesome">Fontawesome</div>
                </a>
              </li>
            </ul>
          </li>
          {/* Forms & Tables */}
          <li className="menu-header small text-uppercase"><span className="menu-header-text">Forms &amp; Tables</span></li>
          {/* Forms */}
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-detail" />
              <div data-i18n="Form Elements">Form Elements</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="forms-basic-inputs.html" className="menu-link">
                  <div data-i18n="Basic Inputs">Basic Inputs</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-input-groups.html" className="menu-link">
                  <div data-i18n="Input groups">Input groups</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-custom-options.html" className="menu-link">
                  <div data-i18n="Custom Options">Custom Options</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-editors.html" className="menu-link">
                  <div data-i18n="Editors">Editors</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-file-upload.html" className="menu-link">
                  <div data-i18n="File Upload">File Upload</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-pickers.html" className="menu-link">
                  <div data-i18n="Pickers">Pickers</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-selects.html" className="menu-link">
                  <div data-i18n="Select & Tags">Select &amp; Tags</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-sliders.html" className="menu-link">
                  <div data-i18n="Sliders">Sliders</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-switches.html" className="menu-link">
                  <div data-i18n="Switches">Switches</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-extras.html" className="menu-link">
                  <div data-i18n="Extras">Extras</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-detail" />
              <div data-i18n="Form Layouts">Form Layouts</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="form-layouts-vertical.html" className="menu-link">
                  <div data-i18n="Vertical Form">Vertical Form</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="form-layouts-horizontal.html" className="menu-link">
                  <div data-i18n="Horizontal Form">Horizontal Form</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="form-layouts-sticky.html" className="menu-link">
                  <div data-i18n="Sticky Actions">Sticky Actions</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-carousel" />
              <div data-i18n="Form Wizard">Form Wizard</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="form-wizard-numbered.html" className="menu-link">
                  <div data-i18n="Numbered">Numbered</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="form-wizard-icons.html" className="menu-link">
                  <div data-i18n="Icons">Icons</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="form-validation.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-list-check" />
              <div data-i18n="Form Validation">Form Validation</div>
            </a>
          </li>
          {/* Tables */}
          <li className="menu-item">
            <a href="tables-basic.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-table" />
              <div data-i18n="Tables">Tables</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-grid" />
              <div data-i18n="Datatables">Datatables</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="tables-datatables-basic.html" className="menu-link">
                  <div data-i18n="Basic">Basic</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="tables-datatables-advanced.html" className="menu-link">
                  <div data-i18n="Advanced">Advanced</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="tables-datatables-extensions.html" className="menu-link">
                  <div data-i18n="Extensions">Extensions</div>
                </a>
              </li>
            </ul>
          </li>
          {/* Charts & Maps */}
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Charts &amp; Maps</span>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-chart" />
              <div data-i18n="Charts">Charts</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="charts-apex.html" className="menu-link">
                  <div data-i18n="Apex Charts">Apex Charts</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="charts-chartjs.html" className="menu-link">
                  <div data-i18n="ChartJS">ChartJS</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="maps-leaflet.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-map-alt" />
              <div data-i18n="Leaflet Maps">Leaflet Maps</div>
            </a>
          </li>
          {/* Misc */}
          <li className="menu-header small text-uppercase"><span className="menu-header-text">Misc</span></li>
          <li className="menu-item">
            <a href="https://themeselection.com/support/" target="_blank" className="menu-link">
              <i className="menu-icon tf-icons bx bx-support" />
              <div data-i18n="Support">Support</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="menu-link">
              <i className="menu-icon tf-icons bx bx-file" />
              <div data-i18n="Documentation">Documentation</div>
            </a>
          </li>
        </ul>
      </aside>
      {/* / Menu */}
      {/* Layout container */}
      <div className="layout-page">
        {/* Navbar */}
        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <a className="nav-item nav-link px-0 me-xl-4" href="#">
              <i className="bx bx-menu bx-sm" />
            </a>
          </div>
          <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            {/* Search */}
            <div className="navbar-nav align-items-center">
              <div className="nav-item navbar-search-wrapper mb-0">
                <a className="nav-item nav-link search-toggler px-0" href="#">
                  <i className="bx bx-search bx-sm" />
                  <span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
                </a>
              </div>
            </div>
            {/* /Search */}
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* Language */}
              <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                  <i className="fi fi-us fis rounded-circle fs-3 me-1" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#" data-language="en">
                      <i className="fi fi-us fis rounded-circle fs-4 me-1" />
                      <span className="align-middle">English</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" data-language="fr">
                      <i className="fi fi-fr fis rounded-circle fs-4 me-1" />
                      <span className="align-middle">France</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" data-language="de">
                      <i className="fi fi-de fis rounded-circle fs-4 me-1" />
                      <span className="align-middle">German</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" data-language="pt">
                      <i className="fi fi-pt fis rounded-circle fs-4 me-1" />
                      <span className="align-middle">Portuguese</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ Language */}
              {/* Style Switcher */}
              <li className="nav-item me-2 me-xl-0">
                <a className="nav-link style-switcher-toggle hide-arrow" href="#">
                  <i className="bx bx-sm" />
                </a>
              </li>
              {/*/ Style Switcher */}
              {/* Quick links  */}
              <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                  <i className="bx bx-grid-alt bx-sm" />
                </a>
                <div className="dropdown-menu dropdown-menu-end py-0">
                  <div className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                      <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                      <a href="#" className="dropdown-shortcuts-add text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="Add shortcuts"><i className="bx bx-sm bx-plus-circle" /></a>
                    </div>
                  </div>
                  <div className="dropdown-shortcuts-list scrollable-container">
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-calendar fs-4" />
                        </span>
                        <a href="app-calendar.html" className="stretched-link">Calendar</a>
                        <small className="text-muted mb-0">Appointments</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-food-menu fs-4" />
                        </span>
                        <a href="app-invoice-list.html" className="stretched-link">Invoice App</a>
                        <small className="text-muted mb-0">Manage Accounts</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-user fs-4" />
                        </span>
                        <a href="app-user-list.html" className="stretched-link">User App</a>
                        <small className="text-muted mb-0">Manage Users</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-check-shield fs-4" />
                        </span>
                        <a href="app-access-roles.html" className="stretched-link">Role Management</a>
                        <small className="text-muted mb-0">Permission</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-pie-chart-alt-2 fs-4" />
                        </span>
                        <a href="index.html" className="stretched-link">Dashboard</a>
                        <small className="text-muted mb-0">User Profile</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-cog fs-4" />
                        </span>
                        <a href="pages-account-settings-account.html" className="stretched-link">Setting</a>
                        <small className="text-muted mb-0">Account Settings</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-help-circle fs-4" />
                        </span>
                        <a href="pages-help-center-landing.html" className="stretched-link">Help Center</a>
                        <small className="text-muted mb-0">FAQs &amp; Articles</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-window-open fs-4" />
                        </span>
                        <a href="modal-examples.html" className="stretched-link">Modals</a>
                        <small className="text-muted mb-0">Useful Popups</small>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Quick links */}
              {/* Notification */}
              <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                  <i className="bx bx-bell bx-sm" />
                  <span className="badge bg-danger rounded-pill badge-notifications">5</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end py-0">
                  <li className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                      <h5 className="text-body mb-0 me-auto">Notification</h5>
                      <a href="#" className="dropdown-notifications-all text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark all as read"><i className="bx fs-4 bx-envelope-open" /></a>
                    </div>
                  </li>
                  <li className="dropdown-notifications-list scrollable-container">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="assets/img/avatars/1.png" alt="true" className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                            <p className="mb-0">Won the monthly best seller gold badge</p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-danger">CF</span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Charles Franklin</h6>
                            <p className="mb-0">Accepted your connection</p>
                            <small className="text-muted">12hr ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="assets/img/avatars/2.png" alt="true" className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New Message ✉️</h6>
                            <p className="mb-0">You have new message from Natalie</p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-success"><i className="bx bx-cart" /></span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Whoo! You have new order 🛒</h6>
                            <p className="mb-0">ACME Inc. made new order $1,154</p>
                            <small className="text-muted">1 day ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="assets/img/avatars/9.png" alt="true" className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Application has been approved 🚀</h6>
                            <p className="mb-0">Your ABC project application has been approved.</p>
                            <small className="text-muted">2 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-success"><i className="bx bx-pie-chart-alt" /></span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Monthly report is generated</h6>
                            <p className="mb-0">July monthly financial report is generated</p>
                            <small className="text-muted">3 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="assets/img/avatars/5.png" alt="true" className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Send connection request</h6>
                            <p className="mb-0">Peter sent you connection request</p>
                            <small className="text-muted">4 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="assets/img/avatars/6.png" alt="true" className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New message from Jane</h6>
                            <p className="mb-0">Your have new message from Jane</p>
                            <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-warning"><i className="bx bx-error" /></span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">CPU is running high</h6>
                            <p className="mb-0">CPU Utilization Percent is currently at 88.63%,</p>
                            <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-menu-footer border-top">
                    <a href="#" className="dropdown-item d-flex justify-content-center p-3">
                      View all notifications
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ Notification */}
              {/* User */}
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                  <div className="avatar avatar-online">
                    <img src="assets/img/avatars/1.png" alt="true" className="w-px-40 h-auto rounded-circle" />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="pages-account-settings-account.html">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar avatar-online">
                            <img src="assets/img/avatars/1.png" alt="true" className="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <span className="fw-semibold d-block">John Doe</span>
                          <small className="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-profile-user.html">
                      <i className="bx bx-user me-2" />
                      <span className="align-middle">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-account-settings-account.html">
                      <i className="bx bx-cog me-2" />
                      <span className="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-account-settings-billing.html">
                      <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 bx bx-credit-card me-2" />
                        <span className="flex-grow-1 align-middle">Billing</span>
                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-help-center-landing.html">
                      <i className="bx bx-support me-2" />
                      <span className="align-middle">Help</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-faq.html">
                      <i className="bx bx-help-circle me-2" />
                      <span className="align-middle">FAQ</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-pricing.html">
                      <i className="bx bx-dollar me-2" />
                      <span className="align-middle">Pricing</span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="auth-login-cover.html" target="_blank">
                      <i className="bx bx-power-off me-2" />
                      <span className="align-middle">Log Out</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ User */}
            </ul>
          </div>
          {/* Search Small Screens */}
          <div className="navbar-search-wrapper search-input-wrapper d-none">
            <input type="text" className="form-control search-input container-xxl border-0" placeholder="Search..." aria-label="Search..." />
            <i className="bx bx-x bx-sm search-toggler cursor-pointer" />
          </div>
        </nav>
        {/* / Navbar */}
        {/* Content wrapper */}
        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
              <div className="col-lg-8 mb-4 order-0">
                <div className="card">
                  <div className="d-flex align-items-end row">
                    <div className="col-sm-7">
                      <div className="card-body">
                        <h5 className="card-title text-primary">Congratulations John! 🎉</h5>
                        <p className="mb-4">
                          You have done <span className="fw-bold">72%</span> more sales today. Check your new badge in
                          your profile.
                        </p>
                        <a href="#" className="btn btn-sm btn-label-primary">View Badges</a>
                      </div>
                    </div>
                    <div className="col-sm-5 text-center text-sm-left">
                      <div className="card-body pb-0 px-0 px-md-4">
                        <img src="assets/img/illustrations/man-with-laptop-light.png" height={140} alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 order-1">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1">Order</span>
                        <h3 className="card-title mb-1">276k</h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img src="assets/img/icons/unicons/wallet-info.png" alt="Credit Card" className="rounded" />
                          </div>
                          <div className="dropdown">
                            <button className="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                              <a className="dropdown-item" href="#">View More</a>
                              <a className="dropdown-item" href="#">Delete</a>
                            </div>
                          </div>
                        </div>
                        <span>Sales</span>
                        <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                        <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.42%</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Total Revenue */}
              <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                <div className="card">
                  <div className="row row-bordered g-0">
                    <div className="col-md-8">
                      <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                      <div id="totalRevenueChart" className="px-2" />
                    </div>
                    <div className="col-md-4">
                      <div className="card-body">
                        <div className="text-center">
                          <div className="dropdown">
                            <button className="btn btn-sm btn-label-primary dropdown-toggle" type="button" id="growthReportId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              2022
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                              <a className="dropdown-item" href="#">2021</a>
                              <a className="dropdown-item" href="#">2020</a>
                              <a className="dropdown-item" href="#">2019</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="growthChart" />
                      <div className="text-center fw-semibold pt-3 mb-2">62% Company Growth</div>
                      <div className="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="badge bg-label-primary p-2"><i className="bx bx-dollar text-primary" /></span>
                          </div>
                          <div className="d-flex flex-column">
                            <small>2022</small>
                            <h6 className="mb-0">$32.5k</h6>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="badge bg-label-info p-2"><i className="bx bx-wallet text-info" /></span>
                          </div>
                          <div className="d-flex flex-column">
                            <small>2021</small>
                            <h6 className="mb-0">$41.2k</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Total Revenue */}
              <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                <div className="row">
                  <div className="col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img src="assets/img/icons/unicons/paypal.png" alt="Credit Card" className="rounded" />
                          </div>
                          <div className="dropdown">
                            <button className="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                              <a className="dropdown-item" href="#">View More</a>
                              <a className="dropdown-item" href="#">Delete</a>
                            </div>
                          </div>
                        </div>
                        <span className="d-block mb-1">Payments</span>
                        <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                        <small className="text-danger fw-semibold"><i className="bx bx-down-arrow-alt" /> -14.82%</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="card">
                      <div className="card-body pb-2">
                        <span className="d-block fw-semibold mb-1">Revenue</span>
                        <h3 className="card-title mb-1">425k</h3>
                        <div id="revenueChart" />
                      </div>
                    </div>
                  </div>
                  {/* </div>
    <div class="row"> */}
                  <div className="col-12 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                          <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                            <div className="card-title">
                              <h5 className="text-nowrap mb-2">Profile Report</h5>
                              <span className="badge bg-label-warning rounded-pill">Year 2021</span>
                            </div>
                            <div className="mt-sm-auto">
                              <small className="text-success text-nowrap fw-semibold"><i className="bx bx-chevron-up" /> 68.2%</small>
                              <h3 className="mb-0">$84,686k</h3>
                            </div>
                          </div>
                          <div id="profileReportChart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Order Statistics */}
              <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                <div className="card h-100">
                  <div className="card-header d-flex align-items-center justify-content-between pb-0">
                    <div className="card-title mb-0">
                      <h5 className="m-0 me-2">Order Statistics</h5>
                      <small className="text-muted">42.82k Total Sales</small>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                        <a className="dropdown-item" href="#">Select All</a>
                        <a className="dropdown-item" href="#">Refresh</a>
                        <a className="dropdown-item" href="#">Share</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex flex-column align-items-center gap-1">
                        <h2 className="mb-2">8,258</h2>
                        <span>Total Orders</span>
                      </div>
                      <div id="orderStatisticsChart" />
                    </div>
                    <ul className="p-0 m-0">
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-mobile-alt" /></span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Electronic</h6>
                            <small className="text-muted">Mobile, Earbuds, TV</small>
                          </div>
                          <div className="user-progress">
                            <small className="fw-semibold">82.5k</small>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-success"><i className="bx bx-closet" /></span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Fashion</h6>
                            <small className="text-muted">T-shirt, Jeans, Shoes</small>
                          </div>
                          <div className="user-progress">
                            <small className="fw-semibold">23.8k</small>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Decor</h6>
                            <small className="text-muted">Fine Art, Dining</small>
                          </div>
                          <div className="user-progress">
                            <small className="fw-semibold">849k</small>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-secondary"><i className="bx bx-football" /></span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Sports</h6>
                            <small className="text-muted">Football, Cricket Kit</small>
                          </div>
                          <div className="user-progress">
                            <small className="fw-semibold">99</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*/ Order Statistics */}
              {/* Expense Overview */}
              <div className="col-md-6 col-lg-4 order-1 mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    <ul className="nav nav-pills" role="tablist">
                      <li className="nav-item">
                        <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-tabs-line-card-income" aria-controls="navs-tabs-line-card-income" aria-selected="true">
                          Income
                        </button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className="nav-link" role="tab">Expenses</button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className="nav-link" role="tab">Profit</button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body px-0">
                    <div className="tab-content p-0">
                      <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                        <div className="d-flex p-4 pt-3">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="assets/img/icons/unicons/wallet.png" alt="User" />
                          </div>
                          <div>
                            <small className="text-muted d-block">Total Balance</small>
                            <div className="d-flex align-items-center">
                              <h6 className="mb-0 me-1">$459.10</h6>
                              <small className="text-success fw-semibold">
                                <i className="bx bx-chevron-up" />
                                42.9%
                              </small>
                            </div>
                          </div>
                        </div>
                        <div id="incomeChart" />
                        <div className="d-flex justify-content-center pt-4 gap-2">
                          <div className="flex-shrink-0">
                            <div id="expensesOfWeek" />
                          </div>
                          <div>
                            <p className="mb-n1 mt-1">Expenses This Week</p>
                            <small className="text-muted">$39 less than last week</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Expense Overview */}
              {/* Transactions */}
              <div className="col-md-6 col-lg-4 order-2 mb-4">
                <div className="card h-100">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h5 className="card-title m-0 me-2">Transactions</h5>
                    <div className="dropdown">
                      <button className="btn p-0" type="button" id="transactionID" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                        <a className="dropdown-item" href="#">Last 28 Days</a>
                        <a className="dropdown-item" href="#">Last Month</a>
                        <a className="dropdown-item" href="#">Last Year</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="p-0 m-0">
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Paypal</small>
                            <h6 className="mb-0">Send money</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">+82.6</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Wallet</small>
                            <h6 className="mb-0">Mac'D</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">+270.69</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="assets/img/icons/unicons/chart.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Transfer</small>
                            <h6 className="mb-0">Refund</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">+637.91</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="assets/img/icons/unicons/cc-success.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Credit Card</small>
                            <h6 className="mb-0">Ordered Food</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">-838.71</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Wallet</small>
                            <h6 className="mb-0">Starbucks</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">+203.33</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="assets/img/icons/unicons/cc-warning.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Mastercard</small>
                            <h6 className="mb-0">Ordered Food</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">-92.45</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*/ Transactions */}
              {/* Activity Timeline */}
              <div className="col-md-12 col-lg-6 order-4 order-lg-3">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h5 className="card-title m-0 me-2">Activity Timeline</h5>
                    <div className="dropdown">
                      <button className="btn p-0" type="button" id="timelineWapper" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="timelineWapper">
                        <a className="dropdown-item" href="#">Select All</a>
                        <a className="dropdown-item" href="#">Refresh</a>
                        <a className="dropdown-item" href="#">Share</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Activity Timeline */}
                    <ul className="timeline">
                      <li className="timeline-item timeline-item-transparent">
                        <span className="timeline-point timeline-point-primary" />
                        <div className="timeline-event">
                          <div className="timeline-header mb-1">
                            <h6 className="mb-0">12 Invoices have been paid</h6>
                            <small className="text-muted">12 min ago</small>
                          </div>
                          <p className="mb-2">Invoices have been paid to the company</p>
                          <div className="d-flex">
                            <a href="#" className="d-flex align-items-center me-3">
                              <img src="assets/img/icons/misc/pdf.png" alt="PDF image" width={23} className="me-2" />
                              <h6 className="mb-0">invoices.pdf</h6>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item timeline-item-transparent">
                        <span className="timeline-point timeline-point-warning" />
                        <div className="timeline-event">
                          <div className="timeline-header mb-1">
                            <h6 className="mb-0">Client Meeting</h6>
                            <small className="text-muted">45 min ago</small>
                          </div>
                          <p className="mb-2">Project meeting with john @10:15am</p>
                          <div className="d-flex flex-wrap">
                            <div className="avatar me-3">
                              <img src="assets/img/avatars/3.png" alt="Avatar" className="rounded-circle" />
                            </div>
                            <div>
                              <h6 className="mb-0">Lester McCarthy (Client)</h6>
                              <span>CEO of ThemeSelection</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item timeline-item-transparent">
                        <span className="timeline-point timeline-point-info" />
                        <div className="timeline-event pb-0">
                          <div className="timeline-header mb-1">
                            <h6 className="mb-0">Create a new project for client</h6>
                            <small className="text-muted">2 Day Ago</small>
                          </div>
                          <p className="mb-2">5 team members in a project</p>
                          <div className="d-flex align-items-center avatar-group">
                            <div className="avatar pull-up" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Vinnie Mostowy">
                              <img src="assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                            </div>
                            <div className="avatar pull-up" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Marrie Patty">
                              <img src="assets/img/avatars/12.png" alt="Avatar" className="rounded-circle" />
                            </div>
                            <div className="avatar pull-up" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Jimmy Jackson">
                              <img src="assets/img/avatars/9.png" alt="Avatar" className="rounded-circle" />
                            </div>
                            <div className="avatar pull-up" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kristine Gill">
                              <img src="assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                            </div>
                            <div className="avatar pull-up" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Nelson Wilson">
                              <img src="assets/img/avatars/14.png" alt="Avatar" className="rounded-circle" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-end-indicator">
                        <i className="bx bx-check-circle" />
                      </li>
                    </ul>
                    {/* /Activity Timeline */}
                  </div>
                </div>
              </div>
              {/*/ Activity Timeline */}
              {/* pill table */}
              <div className="col-md-6 order-3 order-lg-4 mb-4 mb-lg-0">
                <div className="card text-center">
                  <div className="card-header py-3">
                    <ul className="nav nav-pills" role="tablist">
                      <li className="nav-item">
                        <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-browser" aria-controls="navs-pills-browser" aria-selected="true">
                          Browser
                        </button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-os" aria-controls="navs-pills-os" aria-selected="false">
                          Operating System
                        </button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-country" aria-controls="navs-pills-country" aria-selected="false">
                          Country
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content pt-0">
                    <div className="tab-pane fade show active" id="navs-pills-browser" role="tabpanel">
                      <div className="table-responsive text-start">
                        <table className="table table-borderless text-nowrap">
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Browser</th>
                              <th>Visits</th>
                              <th className="w-50">Data In Percentage</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/chrome.png" alt="Chrome" height={24} className="me-2" />
                                  <span>Chrome</span>
                                </div>
                              </td>
                              <td>8.92k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '84.75%'}} aria-valuenow="84.75" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">84.75%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/safari.png" alt="Safari" height={24} className="me-2" />
                                  <span>Safari</span>
                                </div>
                              </td>
                              <td>7.29k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '72.43%'}} aria-valuenow="72.43" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">72.43%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/firefox.png" alt="Firefox" height={24} className="me-2" />
                                  <span>Firefox</span>
                                </div>
                              </td>
                              <td>6.11k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '67.37%'}} aria-valuenow="67.37" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">67.37%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/edge.png" alt="Edge" height={24} className="me-2" />
                                  <span>Edge</span>
                                </div>
                              </td>
                              <td>5.08k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '60.12%'}} aria-valuenow="60.12" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">60.12%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/opera.png" alt="Opera" height={24} className="me-2" />
                                  <span>Opera</span>
                                </div>
                              </td>
                              <td>3.93k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '51.94%'}} aria-valuenow="51.94" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">51.94%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/brave.png" alt="Brave" height={24} className="me-2" />
                                  <span>Brave</span>
                                </div>
                              </td>
                              <td>3.19k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '39.94%'}} aria-valuenow="39.94" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">39.94%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/vivaldi.png" alt="Vivaldi" height={24} className="me-2" />
                                  <span>Vivaldi</span>
                                </div>
                              </td>
                              <td>1.29k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '28.43%'}} aria-valuenow="28.43" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">18.43%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/uc.png" alt="UC Browser" height={24} className="me-2" />
                                  <span>UC Browser</span>
                                </div>
                              </td>
                              <td>328</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '20.14%'}} aria-valuenow="20.14" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">20.14%</small>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="navs-pills-os" role="tabpanel">
                      <div className="table-responsive text-start">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>System</th>
                              <th>Visits</th>
                              <th className="w-50">Data In Percentage</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/windows.png" alt="Windows" height={24} className="me-2" />
                                  <span>Windows</span>
                                </div>
                              </td>
                              <td>875.24k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '71.5%'}} aria-valuenow="71.50" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">71.50%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/mac.png" alt="Mac" height={24} className="me-2" />
                                  <span>Mac</span>
                                </div>
                              </td>
                              <td>89.68k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '66.67%'}} aria-valuenow="66.67" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">66.67%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/ubuntu.png" alt="Ubuntu" height={24} className="me-2" />
                                  <span>Ubuntu</span>
                                </div>
                              </td>
                              <td>37.68k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '62.82%'}} aria-valuenow="62.82" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">62.82%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/chrome.png" alt="Chrome" height={24} className="me-2" />
                                  <span>Chrome</span>
                                </div>
                              </td>
                              <td>35.34k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '56.25%'}} aria-valuenow="56.25" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">56.25%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/cent.png" alt="Cent" height={24} className="me-2" />
                                  <span>Cent</span>
                                </div>
                              </td>
                              <td>32.25k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '42.76%'}} aria-valuenow="42.76" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">42.76%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/linux.png" alt="Linux" height={24} className="me-2" />
                                  <span>Linux</span>
                                </div>
                              </td>
                              <td>22.15k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '37.77%'}} aria-valuenow="37.77" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">37.77%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/fedora.png" alt="Fedora" height={24} className="me-2" />
                                  <span>Fedora</span>
                                </div>
                              </td>
                              <td>1.13k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '29.16%'}} aria-valuenow="29.16" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">29.16%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/img/icons/brands/vivaldi-os.png" alt="Vivaldi" height={24} className="me-2" />
                                  <span>Vivaldi</span>
                                </div>
                              </td>
                              <td>1.09k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '26.26%'}} aria-valuenow="26.26" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">26.26%</small>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="navs-pills-country" role="tabpanel">
                      <div className="table-responsive text-start">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Country</th>
                              <th>Visits</th>
                              <th className="w-50">Data In Percentage</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/svg/flags/us.svg" alt="USA" height={24} className="me-2" />
                                  <span>USA</span>
                                </div>
                              </td>
                              <td>87.24k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '89.12%'}} aria-valuenow="89.12" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">89.12%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/svg/flags/br.svg" alt="Brazil" height={24} className="me-2" />
                                  <span>Brazil</span>
                                </div>
                              </td>
                              <td>62.68k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '78.23%'}} aria-valuenow="78.23" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">78.23%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/svg/flags/in.svg" alt="India" height={24} className="me-2" />
                                  <span>India</span>
                                </div>
                              </td>
                              <td>52.58k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '69.82%'}} aria-valuenow="69.82" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">69.82%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/svg/flags/au.svg" alt="Australia" height={24} className="me-2" />
                                  <span>Australia</span>
                                </div>
                              </td>
                              <td>44.13k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '59.9%'}} aria-valuenow="59.90" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">59.90%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/svg/flags/de.svg" alt="Germany" height={24} className="me-2" />
                                  <span>Germany</span>
                                </div>
                              </td>
                              <td>32.21k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '57.11%'}} aria-valuenow="57.11" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">57.11%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/svg/flags/fr.svg" alt="France" height={24} className="me-2" />
                                  <span>France</span>
                                </div>
                              </td>
                              <td>37.87k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '41.23%'}} aria-valuenow="41.23" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">41.23%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/svg/flags/pt.svg" alt="Portugal" height={24} className="me-2" />
                                  <span>Portugal</span>
                                </div>
                              </td>
                              <td>20.29k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '37.11%'}} aria-valuenow="37.11" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">37.11%</small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="assets/svg/flags/cn.svg" alt="China" height={24} className="me-2" />
                                  <span>China</span>
                                </div>
                              </td>
                              <td>12.21k</td>
                              <td>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div className="progress w-100" style={{height: 10}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '17.61%'}} aria-valuenow="17.61" aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <small className="fw-semibold">17.61%</small>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ pill table */}
            </div>
          </div>
          {/* / Content */}
          {/* Footer */}
          <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
              <div className="mb-2 mb-md-0">
                ©
                , made with ❤️ by
                <a href="https://themeselection.com" target="_blank" className="footer-link fw-bolder">ThemeSelection</a>
              </div>
              <div>
                <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
                <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>
                <a href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>
                <a href="https://themeselection.com/support/" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a>
              </div>
            </div>
          </footer>
          {/* / Footer */}
          <div className="content-backdrop fade" />
        </div>
        {/* Content wrapper */}
      </div>
      {/* / Layout page */}
    </div>
    {/* Overlay */}
    <div className="layout-overlay layout-menu-toggle" />
    {/* Drag Target Area To SlideIn Menu On Small Screens */}
    <div className="drag-target" />
  </div>
  {/* / Layout wrapper */}
  {/* Core JS */}
  {/* Vendors JS */}
  {/* Main JS */}
  {/* Page JS */}
</div>


  )
}

export default Dashboard