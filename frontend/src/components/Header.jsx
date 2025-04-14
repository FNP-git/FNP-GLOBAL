import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import homeLogo from '../assets/Logo.svg';

const Header = () => {
  return (
    <>
      <div id="head">
        <div id="homelogo">
          <img src={homeLogo} alt="FNP Digital Logo" id="hmlogo" />
        </div>
        <div id="menu">
          <NavLink to="/" className="hm-btn">Home</NavLink>
          <NavLink to="/about" className="hm-btn">About</NavLink>
          <NavLink to="/blogs" className="hm-btn">Blogs</NavLink>
          <NavLink to="/contact" className="hm-btn">Contact Us</NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
