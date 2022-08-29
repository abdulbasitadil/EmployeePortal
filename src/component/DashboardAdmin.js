import React, { useState } from 'react';
import NavBar from './NavBar';
import './DashboardAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsersCog,
  faUsers,
  faChair,
  faBuilding,
  faDollarSign,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const DashboardAdmin = () => {
  const [dState, setdState] = useState({
    redirect: true,
    checked: true,
  });

  const handleChange = (checked) => {
    console.log('switch');

    if (dState.checked === true) {
      document.getElementById('sidebar').setAttribute('class', 'display-none');
    } else {
      document.getElementById('sidebar').setAttribute('class', 'display-block');
    }
    setdState({ checked });
  };

  return (
    <div id="outer-main-div">
      <div id="outer-nav">
        <NavBar checked={dState.checked} handleChange={handleChange} />
      </div>
      <div id="main-non-nav">
        <div id="sidebar">
          <div id="sidebar-top-content" />
          <div id="main-title">
            <FontAwesomeIcon icon={faUsersCog} className="sidebar-icon" />
            Admin
          </div>
          <ul className="navbar-ul">
            <li>
              <Link to="role">
                <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                Role
              </Link>
            </li>
            <li>
              <Link to="position">
                <FontAwesomeIcon icon={faChair} className="sidebar-icon" />
                Position
              </Link>
            </li>
            <li>
              <Link to="department">
                <FontAwesomeIcon icon={faBuilding} className="sidebar-icon" />
                Department
              </Link>
            </li>
            <li>
              <Link to="project-bid">
                <FontAwesomeIcon icon={faDollarSign} className="sidebar-icon" />
                Project Bidding
              </Link>
            </li>
            <li>
              <Link to="portal-master">
                <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
                Portal Master
              </Link>
            </li>
          </ul>
        </div>
        <div id="main-area">
          <div id="sidebar-top-content" />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
