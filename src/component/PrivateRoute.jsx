// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem('token'); // Get token from localStorage

  if (!token) {
    return <Navigate to="/" replace />; // Redirect to login if no token
  }

  return children; // Render the wrapped component if authenticated
};

export default PrivateRoute;