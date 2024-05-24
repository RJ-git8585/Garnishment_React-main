// Logout.jsx build freash component for logout text
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from localStorage
    navigate('/login', { replace: true }); // Redirect to login and prevent back button issues
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;




