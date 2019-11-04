import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="headerText">Weather here</div>
      <button className="headerButton">Update Geolocation</button>
    </div>
  );
}

export default Header;
