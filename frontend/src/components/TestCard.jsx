import React from 'react';
import './TestCard.css';
import comma from '../assets/comma.svg';

const TestCard = ({ text, name }) => {
  return (
    <div className="testcard">
      <img
        src={comma}
        alt="quote"
        className="quote-icon"
        loading="lazy"
      />
      <p className="testimonial-text">"{text}"</p>
      <p className="testimonial-name">– {name}</p>
    </div>
  );
};

export default TestCard;
