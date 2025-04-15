import React from 'react';
import './WhoCard.css';

const WhoCard = ({ title1, desc1, image1, title2, desc2, image2 }) => {
  return (
    <div className="who-wrapper">
      <div className="who-section">
        <img src={image1} alt="Illustration 1" className="who-illustration" />
        <div className="who-text">
          <h2 className="who-heading">{title1}</h2>
          <p className="who-description">{desc1}</p>
        </div>
      </div>
      <div className="who-section">
        <img src={image2} alt="Illustration 2" className="who-illustration" />
        <div className="who-text">
          <h2 className="who-heading">{title2}</h2>
          <p className="who-description">{desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default WhoCard;
