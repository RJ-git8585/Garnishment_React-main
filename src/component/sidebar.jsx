// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_b from '../Logo_black.png';
import { FaDashcube, FaHornbill, FaUserEdit,FaBezierCurve, FaRocketchat, FaTools, FaBalanceScaleRight, FaMoneyBill, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Logout from '../pages/Logout';
import { FaLocationDot } from "react-icons/fa6";

const Sidebar = () => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const toggleSubmenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <>
      <div className="sidebar-header">
        {/* You can include header content here if needed */}
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            <img
              className="h-6 logo-inner mb-6 ml-4 w-auto custom_logo_side"
              src={logo_b}
              alt="Garnishment"
            />
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2">
          <Link to="/dashboard" className="sidebar-link">
            <FaDashcube />
            <p>   Dashboard</p>
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2">
          <Link to="/profile" className="sidebar-link submen_cls" onClick={toggleSubmenu}>
            <FaUserEdit />
            <p> Profile</p>
            {isSubmenuOpen ? <FaChevronUp className="ml-2 submen_cls_iocn"  /> : <FaChevronDown className="ml-2 submen_cls_iocn" />}
          </Link>
          {isSubmenuOpen && (
            <ul className="submenu">
              <li className="submenu-item">
                <Link to="/addlocation" className="sidebar-link">
                <FaLocationDot />
                <p>Location</p>
                </Link>
              </li>
              <li className="submenu-item">
                <Link to="/adddepartment" className="sidebar-link">
                <FaBezierCurve />
                  <p>Departmant</p>
                </Link>
              </li>
              {/* Add more submenu items here */}
            </ul>
          )}
        </li>
        <li className="sidebar-item border-b-[3px] py-2">
          <Link to="/tax" className="sidebar-link">
            <FaMoneyBill />
            <p>Tax</p>
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2">
          <Link to="/setting" className="sidebar-link" >
            <FaTools />
            <p> Settings</p>
          </Link>
          
        </li>
        <li className="sidebar-item border-b-[3px] py-2">
          <Link to="/garnishment" className="sidebar-link">
            <FaBalanceScaleRight />
            <p>Garnishment Calculator</p>
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2">
          <Link to="/results" className="sidebar-link">
            <FaHornbill />
            <p> Results</p>
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2">
          <Link to="/help" className="sidebar-link">
            <FaRocketchat />
            <p> Help !</p>
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2 cus_svg">
          
          <p><Logout /></p>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
