import React from 'react';
import './Team.css';

const Team = ({ image, name, position, dep }) => {
  return (
    <div className="team-card">
      <div className="team-img-wrapper">
        <img src={image} alt={name} className="team-img" loading="lazy" />
      </div>
      <h2 className="team-name">{name}</h2>
      <p className="team-position">{position}</p>
      <p className="dep">{dep}</p>

    </div>
  );
};

export default Team;
