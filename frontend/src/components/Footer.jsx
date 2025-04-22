import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import canada from '../assets/Canada.svg';
import india from '../assets/India.svg';
import usa from '../assets/USA.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <hr id='hr' />
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p id='para'>
            At FNP Global, We Help Businesses Thrive In A Fast-Changing World With Smart,
            Tailored Consulting Solutions. From Global Expansion To Digital Transformation, We
            Drive Growth, Efficiency, And Innovation—Empowering You To Stay Ahead. Let’s Grow
            Smarter, Together.
          </p>
        </div>

        <div className="footer-section company">
          <h3>Company</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/blogs">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li>Refund Policy {/* Add NavLink when route is ready */}</li>
            <li>Shipping Policy {/* Add NavLink when route is ready */}</li>
          </ul>
        </div>

        <div className="footer-section footer-contact-section">
          <div className="contact-block">
            <h3><FaPhoneAlt /> Contact Number</h3>
            <a href="tel:+18888079696">+1-888-807-9696</a>
          </div>

          <div className="contact-block">
            <h3><FaEnvelope /> Email</h3>
            <a href="mailto:info@fnpglobal.com">info@fnpglobal.com</a>
          </div>

          <div className="contact-block">
            <h4>Social Media :</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61574826965755" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/company/105938455/admin/page-posts/published/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/fnp.global/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-section headquarters">
          <h3><FaMapMarkerAlt /> Headquarters</h3>
          <div className="address-line">
            <div className="flag-label">
              <img src={usa} alt="usa" />
              <span>USA's Address</span>
            </div>
            <p>287 Grove St Worcester, MA 01605</p>
          </div>

          <div className="address-line">
            <div className="flag-label">
              <img src={canada} alt="canada" />
              <span>Canada's Address</span>
            </div>
            <p>55 Village Centre PI Suite #200, Mississauga, ON L4Z 1V9, Canada</p>
          </div>

          <div className="address-line">
            <div className="flag-label">
              <img src={india} alt="india" />
              <span>India's Registered Address</span>
            </div>
            <p>7/160, Bans Mandi, Bansmandi, Sarai Babu, Aligarh, Uttar Pradesh 202001</p>
          </div>

          <div className="address-line">
            <div className="flag-label">
              <img src={india} alt="india" />
              <span>India’s Corporate Address</span>
            </div>
            <p>3rd Floor, Skymark Building, F-01, F Block, Sector 6, Noida, Uttar Pradesh 201301</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
