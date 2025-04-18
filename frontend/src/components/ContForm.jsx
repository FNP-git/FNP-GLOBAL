import React from "react";
import "./ContForm.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-heading">Say Hello!</h1>
        <p className="contact-text">
          At FNP Global, We’re Always Ready To Help You Take The Next Step In
          Your Business Journey. Whether You Have A Question, Need Expert
          Guidance, Or Looking For A Strategic Partner, We’re Just A Call Away.
          <br />
          Reach Out To Us Today—We’d Love To Hear From You! Let’s Collaborate,
          Innovate, And Build Success Together.
        </p>
        <p className="contact-info">
          <strong>Phone:</strong> +1 888-807-9696
        </p>
        <p className="contact-info">
          <strong>Email :</strong> info@fnpglobal.com
        </p>
        <p className="contact-info">
          <strong>Social Media :</strong>
        </p>
        <div className="social-icons">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="contact-right">
        <form className="form">
          <div className="form-row">
            <div className="form-group">
              <label id="lbl" htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="input"
              />
            </div>
            <div className="form-group">
              <label id="lbl" htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="input"
              />
            </div>
          </div>
          <div className="form-group">
            <label id="lbl" htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              placeholder="+91 1234567890"
              className="input full-width"
            />
          </div>
          <div className="form-group">
            <label id="lbl" htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe25@gmail.com"
              className="input full-width"
            />
          </div>
          <div className="form-group">
            <label id="lbl" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Hi, I'm interested in learning more about your services. Please get back to me."
              className="textarea"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContForm;
