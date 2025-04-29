import React from 'react';
import './FullCard.css';

const FullCard = ({ image, title, text, onClick }) => {
  return (
    <div className="fullcard">
      <img src={image} alt={title} className="fullcard-img" loading="lazy" />
      <div className="fullcard-content">
        <h2 className="fullcard-title">{title}</h2>
        <p className="fullcard-text">{text}</p>
        <button className="fullcard-btn" onClick={onClick}>Read more</button>
      </div>
    </div>
  );
};

export default FullCard;
