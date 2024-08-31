import React, { useState } from 'react';
import '../assets/Styles/header.css';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='header'>
      <nav className="navbar">
        <div className="navbar-buttons">
        <button className="custom-button1">عربي</button>
       <button className="toggle-button2">
       <div className="icon-left2">
       <img src="path-to-left-icon.png" alt="" />
       </div>
       <div className="icon-right2">
      <img src="path-to-right-icon.png" alt="Right Icon" />
    </div>
  </button>
        </div>
        <div className="navbar-logo">
          <a href="/">GEA</a>
        </div>
        <div className="navbar-toggle">
          <div 
            className={`toggle-switch ${isActive ? 'active-style' : ''}`} 
            onClick={toggleSwitch}
          >
            <div className="toggle-knob">
              <div className="icon"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
