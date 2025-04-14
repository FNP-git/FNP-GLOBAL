// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import canada from '../assets/Canada.svg';
import india from '../assets/india.svg';
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
            <li>Privacy Policy</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        <div className="footer-section contact">
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
      <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>
  </div>
</div>


        <div className="footer-section headquarters">
          <h3><FaMapMarkerAlt /> Headquarters</h3>
          <div className="address-line">
                <div className="flag-label">
                    <img src={usa} alt="usa" />
                    <span>USA Address</span>
                </div>
                <p>287 Grove St Worcester, MA 01605</p>
                </div>

                <div className="address-line">
                <div className="flag-label">
                    <img src={canada} alt="canada" />
                    <span>Canada Address</span>
                </div>
                <p>287 Grove St Worcester, MA 01605</p>
                </div>

                <div className="address-line">
                <div className="flag-label">
                    <img src={india} alt="india" />
                    <span>India Registered Address</span>
                </div>
                <p>7/160, Bans Mandi, Bansmandi, Sarai Babu, Aligarh, Uttar Pradesh 202001</p>
                </div>

                <div className="address-line">
                <div className="flag-label">
                    <img src={india} alt="india" />
                    <span>India’s Corporate Office</span>
                </div>
                <p>3rd Floor, Skymark Building, F-01, F Block, Sector 6, Noida, Uttar Pradesh 201301</p>
                </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;