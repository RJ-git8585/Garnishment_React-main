
// eslint-disable-next-line no-unused-vars
import { React } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logout from '../pages/Logout';

const Sidebar = () => {
  return (
   <>
      <div className="sidebar-header">
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            {/* <FontAwesomeIcon className="fas fa-tachometer-alt"></FontAwesomeIcon> */}
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/profile" className="sidebar-link ">
          <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/tax" className="sidebar-link ">
          <i className="fa-solid fa-user"></i>
            <span>Tax</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/setting" className="sidebar-link">
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/garnishment" className="sidebar-link">
            <i className="fas fa-sign-out-alt"></i>
            <span>Garnishment Calculator</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/help" className="sidebar-link">
            <i className="fas fa-sign-out-alt"></i>
            <span>Help !</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Logout />
          
        </li>
      </ul>
    
      </>
  );
};

export default Sidebar;
