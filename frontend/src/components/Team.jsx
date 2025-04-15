import React from 'react';
import './Team.css';

const Team = ({ image, name, position }) => {
  return (
    <div className="team-card">
      <div className="team-img-wrapper">
        <img src={image} alt={name} className="team-img" />
      </div>
      <h2 className="team-name">{name}</h2>
      <p className="team-position">{position}</p>
    </div>
  );
};

export default Team;
