// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_b from '../Logo_black.png';
import { FaDashcube, FaHornbill, FaUserEdit,FaWpforms,FaUserTie,FaBezierCurve, FaRocketchat, FaTools, FaBalanceScaleRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Logout from '../pages/Logout';

import { FaLocationDot } from "react-icons/fa6";

const Sidebar = () => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const toggleSubmenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };
  
  // eslint-disable-next-line no-unused-vars
  const toggleMenuMObile = () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  }

  return (
    <>
      <div className="sidebar-header">
        {/* You can include header content here if needed */}
      </div>
      <ul className="sidebar-nav hidden md:block">
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
          <Link to="/employee" className="sidebar-link">
            <FaUserTie />
            <p>Employee</p>
          </Link>
        </li>
        <li className="sidebar-item border-b-[3px] py-2">
          <Link to="/iwo" className="sidebar-link">
            <FaWpforms />
            <p>IWO</p>
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
          <Link to="/setting" className="sidebar-link" >
            <FaTools />
            <p> Settings</p>
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
      <button className="block md:hidden text-black" onClick={toggleMenuMObile}>
      <span className="absolute -inset-0.5"></span><span className="sr-only">Open main menu</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" aria-hidden="true" data-slot="icon" className="block h-6 w-6"><path  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
      </button>
      <div id="mobile-menu" className="hidden md:hidden">
      <ul className="flex flex-col space-y-4 text-white p-4 bg-gray-800">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
