import React from 'react';
import './BigCard.css';

const BigCard = ({ number, title, children }) => {
  return (
    <div className="big-card">
      <div className="big-card__number-box">
        <span className="big-card__number">{number}</span>
      </div>
      <div className="big-card__content">
        <h2 className="big-card__title">{title}</h2>
        <p className="big-card__text">{children}</p>
      </div>
    </div>
  );
};

export default BigCard;
