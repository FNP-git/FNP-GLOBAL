import React from 'react';
import './ServiceCard.css';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ bgImage, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <button
      className="service-card"
      style={{ backgroundImage: `url(${bgImage})` }}
      onClick={handleClick}
    >
      <div className="service-card__label">{label}</div>
    </button>
  );
};

export default ServiceCard;
