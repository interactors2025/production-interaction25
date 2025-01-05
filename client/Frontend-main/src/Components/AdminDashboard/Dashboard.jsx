import React, { useState } from "react";
// import "./Dashboard.css";
import UsersPage from "./Users";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Users");

  const renderSection = () => {
    switch (activeSection) {
      case "Users":
        return (
          <div className="section-content">
            <UsersPage />
          </div>
        );
      case "Log Out":
        return <div className="section-content">LogOut</div>;
      default:
        return <div className="section-content">Welcome to the Dashboard</div>;
    }
  };

  const logout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    window.location.href = "/adminlogin"; // Redirect to login page
  };

  return (
    <div className="dashboard bg-white">
      {/* Main Content */}
      <div className="container-fluid">
        <div className="row">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <input
                type="text"
                className="form-control me-2 w-50 w-md-25"
                placeholder="Search..."
              />
              <div className="d-flex align-items-center">
                <div className="profile-section me-3">Admin</div>
                <button className="btn btn-outline-danger" onClick={logout}>
                  Log Out
                </button>
              </div>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="content">{renderSection()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
