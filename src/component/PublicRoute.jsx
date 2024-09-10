import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuthenticated = !!sessionStorage.getItem('token'); // Check if access token exists

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children; // Render the children (e.g., Login page) if not authenticated
};

export default PublicRoute;
