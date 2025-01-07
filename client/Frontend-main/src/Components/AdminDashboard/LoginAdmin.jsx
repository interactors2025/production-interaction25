import React, { useState } from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch values from .env
    const staticUsername = `interactorsAdmin`;
    const staticPassword = `pass@word`;

    // Validate credentials
    if (username === staticUsername && password === staticPassword) {
      alert("Login successful!");
      localStorage.setItem("isAdminLoggedIn", "true"); // Store login status
      navigate("/admindashboard");
      setError(""); // Clear any previous errors
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <h2>Welcome Back!</h2>
        <p>Manage your system efficiently and securely.</p>
      </div>
      <div className="login-right">
        <div className="login-form-card">
          <h3 className="login-form-title">Admin Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="form-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
