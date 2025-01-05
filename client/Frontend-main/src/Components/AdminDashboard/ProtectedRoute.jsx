import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

  if (!isAdminLoggedIn) {
    // Redirect to login page if not logged in
    return <Navigate to="/adminlogin" />;
  }

  // Render the protected component if logged in
  return children;
};

export default ProtectedRoute;
