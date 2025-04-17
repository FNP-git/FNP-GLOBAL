import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './HamburgerMenu.css';
import hamburgerIcon from '../assets/hamburger.svg';
import crossIcon from '../assets/cross.svg';
import logo from '../assets/Logo.svg';
import bgImage from '../assets/hambg.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/contact', label: 'Contact Us' },
];

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
    <div id="bghm">
      {/* toggle icon */}
      <img
        src={open ? crossIcon : hamburgerIcon}
        alt="Menu"
        className="hamburger-toggle"
        onClick={() => setOpen(!open)}
      />

      {/* overlay menu */}
      <div className={`hamburger-overlay ${open ? 'open' : ''}`}>        
          
            <img id='hm-lgo' src={logo} alt="Logo"  />
          
        <nav className="hamburger-nav">
          <ul>
            {links.map(({ to, label }) => (
              <li key={to} onClick={() => setOpen(false)}>
                <NavLink to={to}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      </div>
    </>
  );
};

export default HamburgerMenu;