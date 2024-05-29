// Logout.jsx build freash component for logout text
// eslint-disable-next-line no-unused-vars
import {React,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('id');
    localStorage.removeItem('name');  // Clear the token from localStorage
    navigate('/', { replace: true }); // Redirect to login and prevent back button issues
  };
  useEffect(()=>{
    // handleLogout();
},[])
  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;




