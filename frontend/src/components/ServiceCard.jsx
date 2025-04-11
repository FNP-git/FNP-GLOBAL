import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ bgImage, label }) => {
  return (
    <div
      className="service-card"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="service-card__label">
        {label}
      </div>
    </div>
  );
};

export default ServiceCard;
