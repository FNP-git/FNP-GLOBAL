import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import homeLogo from '../assets/Logo.svg';
import HamburgerMenu from './HamburgerMenu';

const Header = () => (
  <header id="head">
    <div id="homelogo">
      <NavLink to="/">
        <img src={homeLogo} alt="FNP Digital Logo" id="hmlogo" />
      </NavLink>
    </div>

    {/* desktop nav */}
    <nav id="menu">
      <NavLink to="/" className="hm-btn">Home</NavLink>
      <NavLink to="/about" className="hm-btn">About</NavLink>
      <NavLink to="/blogs" className="hm-btn">Blogs</NavLink>
      <NavLink to="/contact" className="hm-btn">Contact Us</NavLink>
    </nav>

    {/* mobile nav toggle */}
    <HamburgerMenu />
  </header>
);

export default Header;