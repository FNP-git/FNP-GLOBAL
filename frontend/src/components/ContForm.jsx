import React, { useState } from "react";
import "./ContForm.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    smsConsent: false, // Added for SMS consent checkbox
  });

  const [errors, setErrors] = useState({});
  const [_submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z]{3,}$/;
    const optionalNameRegex = /^[A-Za-z]*$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "First name must be at least 3 characters and only letters.";
    }

    if (formData.lastName && !optionalNameRegex.test(formData.lastName)) {
      newErrors.lastName = "Last name must only contain letters.";
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits and only numbers.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (formData.message.length > 2000) {
      newErrors.message = "Message must be less than 2000 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [id]: type === 'checkbox' ? checked : value 
    });
    setErrors({ ...errors, [id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      const errorMessage = Object.values(validationErrors).join('\n');
      alert(`Invalid data!\n${errorMessage}`);
      setErrors(validationErrors);
      return;
    }

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      smsConsent: formData.smsConsent,
    };
    

    try {
      const API_BASE_URL = `${window.location.origin}`;

      const response = await fetch(`${API_BASE_URL}/api/form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      });

      const resData = await response.json();

      if (!response.ok) {
        const message = resData?.errors?.map(e => e.msg).join('\n') || resData.error || "Failed to send.";
        alert(`Invalid data!\n${message}`);
        return;
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        smsConsent: false,
      });
      setErrors({});
      
      // Updated success message as per compliance requirements
      alert("Thank you for contacting FNP Global, our team will get in touch with you shortly");

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-heading">Say Hello!</h1>
        <p className="contact-text">
          At FNP Global, We're Always Ready To Help You Take The Next Step In
          Your Business Journey. Whether You Have A Question, Need Expert
          Guidance, Or Looking For A Strategic Partner, We're Just A Call Away.
          <br />
          Reach Out To Us Today—We'd Love To Hear From You! Let's Collaborate,
          Innovate, And Build Success Together.
        </p>
        <p className="contact-info">
          <strong>Email :</strong> info@fnpglobal.com
        </p>
        <p className="contact-info">
          <strong>Social Media :</strong>
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61574826965755" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/105938455/admin/page-posts/published/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon" />
          </a>
          <a href="https://www.instagram.com/fnp.global/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="contact-right">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label id="lbl" htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="input"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label id="lbl" htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="input"
                value={formData.lastName}
                onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label id="lbl" htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe25@gmail.com"
              className="input full-width"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label id="lbl" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Hi, I'm interested in learning more about your services. Please get back to me."
              className="textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          {/* SMS Consent Checkbox - MANDATORY for compliance */}
          {/* <div className="form-group checkbox-group">
             <label className="checkbox-label">
              <input
                type="checkbox"
                id="smsConsent"
                checked={formData.smsConsent}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span className="checkbox-text">
                By providing your phone number, you agree to receive a text message from FNP Global. 
                Message and Data rates may apply, Message frequency varies. To stop receiving messages, 
                reply 'STOP' at any time. For more information, reply 'HELP'. 
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> & 
                <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> *
              </span>
            </label> 
            {errors.smsConsent && <span className="error-message">{errors.smsConsent}</span>}
          </div> */}

          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContForm;