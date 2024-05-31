
// eslint-disable-next-line no-unused-vars
import { React } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logout from '../pages/Logout';
import logo_b  from '../Logo_black.png';
import { FaDashcube,FaUserEdit,FaSignOutAlt,FaRocketchat,FaTools,FaBalanceScaleRight,FaMoneyBill } from "react-icons/fa";

const Sidebar = () => {
  return (
   <>
      <div className="sidebar-header">
      </div>
      <ul className="sidebar-nav">
      <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
          <img
       className="mx-auto h-10 logo-inner w-auto custom_logo_side"
       src={logo_b}
       alt="Your Company"
     />
       
        
          </Link>
        
        </li>

        <li className="sidebar-item border-b-[3px] py-2 ">
          <Link to="/dashboard" className="sidebar-link">
          <FaDashcube/>
            {/* <FontAwesomeIcon className="fas fa-tachometer-alt"></FontAwesomeIcon> */}
            Dashboard
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2 ">
          <Link to="/profile" className="sidebar-link ">
          <FaUserEdit/>
            Profile
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2 ">
          <Link to="/tax" className="sidebar-link ">
          <FaMoneyBill />
            Tax
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2 ">
          <Link to="/setting" className="sidebar-link">
          <FaTools />
            Settings
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2 ">
          <Link to="/garnishment" className="sidebar-link">
          <FaBalanceScaleRight />
            Garnish   Calculator
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2 ">
          <Link to="/help" className="sidebar-link">
          <FaRocketchat />
            Help !
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2 cus_svg">
        <FaSignOutAlt />
          <Logout />
          
        </li>
      </ul>
    
      </>
  );
};

export default Sidebar;
