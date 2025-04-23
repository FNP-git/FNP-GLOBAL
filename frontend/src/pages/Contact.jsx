import React from 'react';
import './Contact.css';
import Header from '../components/Header';
import cntbg from '../assets/abtbg.png';
import abtlogo from '../assets/abt-logo.png';
import Footer from '../components/Footer';
import ContForm from '../components/ContForm';

const Contact = () => {
  return (
    <>
      <img src={cntbg} alt="contact backgrround" id="contact-bg" />
      <Header />
      <div className="contact">
        <div className="contact-head">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-subhead">
          <h1>Finding Inspiration in Every Turn</h1>
        </div>
        <img src={abtlogo} alt="contact-logo" id="contact-logo" />
        <div className="contact-content">
          <p id="contact-para">
            At FNP Global, we are more than just consultants, we are strategic
            partners in your business success. With a strong global presence and deep industry
            expertise, we specialize in empowering businesses with innovative solutions, insightful
            strategies, and sustainable growth models.
          </p>
        </div>
      </div>
        <ContForm />
      <Footer />
    </>
  );
};

export default Contact;
