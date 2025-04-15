import React from 'react';
import './DirCard.css';

const DirCard = ({ image, name, position }) => {
  return (
    <div className="dir-card">
      <div className="dir-card-img">
        <img src={image} alt={name} />
      </div>
      <h2 className="dir-card-name">{name}</h2>
      <p className="dir-card-position">{position}</p>
    </div>
  );
};

export default DirCard;
