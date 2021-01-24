import React from "react";
import NavLinks from "./NavLinks";

import "../styles/header.css";

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo'>Renovate</div>
      <div className='nav-links'>
        <NavLinks />
      </div>
    </div>
  );
};

export default Header;
