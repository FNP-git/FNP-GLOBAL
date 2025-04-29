import React, { useEffect, useRef, useState } from 'react';
import TestCard from '../components/TestCard';
import './Clients.css';
import testbg from '../assets/testbg.svg';

const sampleTexts = [
  "Working with FNP Global Business Consultant Services has been a game-changer for our business.",
  "Their expertise and attention to detail helped us streamline our financial processes.",
  "FNP Global saved us countless hours with their structured approach.",
  "We've achieved significant cost savings thanks to their guidance.",
  "Their strategic planning has made our workflow seamless.",
  "Exceptional support from the team at FNP Global!",
  "Highly professional and results-oriented consultancy.",
  "FNP’s solutions were tailored to our business needs perfectly.",
  "Reliable and efficient, they’ve transformed our operations.",
  "Their insights were instrumental in our recent expansion."
];

const sampleNames = [
  "John Doe", "Jane Smith", "Alex Johnson", "Emily Clark", "Michael Lee",
  "Sara Davis", "David Martinez", "Nina Patel", "Chris Wang", "Olivia Brown"
];

const Clients = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const wrapperRef = useRef(null);

  const extendedCards = [
    ...sampleTexts.slice(-2),
    ...sampleTexts,
    ...sampleTexts.slice(0, 2),
  ];
  const extendedNames = [
    ...sampleNames.slice(-2),
    ...sampleNames,
    ...sampleNames.slice(0, 2),
  ];

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleScrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div id="client-main">
      <h1 id="client-head">WHAT OUR CLIENTS SAY</h1>
      <img id="tstbg" src={testbg} alt="testimonials background" loading="lazy" />
      <div className="clients-container">
        {!isSmallScreen && (
          <button className="arrow-button left" onClick={handleScrollLeft}>‹</button>
        )}
        <div className="slider-window" ref={wrapperRef}>
          <div
            className={`cards-wrapper ${isSmallScreen ? 'scrollable' : 'animate'}`}
          >
            {extendedCards.map((text, i) => (
              <div className="test-card-container" key={i}>
                <TestCard text={text} name={extendedNames[i]} />
              </div>
            ))}
          </div>
        </div>
        {!isSmallScreen && (
          <button className="arrow-button right" onClick={handleScrollRight}>›</button>
        )}
      </div>
    </div>
  );
};

export default Clients;
