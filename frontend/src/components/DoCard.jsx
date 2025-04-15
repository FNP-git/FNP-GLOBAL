import React from 'react';
import './DoCard.css';

const DoCard = ({ heading, contentList, image }) => {
  return (<>
      <div className="do-container">
        <h2 className="do-heading">{heading}</h2>
        <div id="content">
      <div className="do-left">
        <ul className="do-list">
          {contentList.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="do-right">
        <img src={image} alt="Do illustration" className="do-image" />
      </div>
      </div>
    </div>
    </>
  );
};

export default DoCard;
