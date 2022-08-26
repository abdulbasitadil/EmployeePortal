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
              <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
              Role
            </li>
            <li>
              <FontAwesomeIcon icon={faChair} className="sidebar-icon" />
              Position
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} className="sidebar-icon" />
              Department
            </li>
            <li>
              <FontAwesomeIcon icon={faDollarSign} className="sidebar-icon" />
              Project Bidding
            </li>
            <li>
              <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
              Portal Master
            </li>
          </ul>
        </div>
        <div id="main-area">
          <div id="sidebar-top-content" />
          Main Area
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
