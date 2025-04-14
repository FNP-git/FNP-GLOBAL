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
  const totalCards = sampleTexts.length;
  const [index, setIndex] = useState(2); // start from first actual card
  const wrapperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Create duplicated array for seamless looping
  const extendedCards = [
    ...sampleTexts.slice(-2), // last two at start
    ...sampleTexts,
    ...sampleTexts.slice(0, 2), // first two at end
  ];

  const extendedNames = [
    ...sampleNames.slice(-2),
    ...sampleNames,
    ...sampleNames.slice(0, 2),
  ];

  const handleNext = () => {
    if (index < totalCards + 2) {
      setIndex((prev) => prev + 2);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 2);
    }
  };

  // Reset position without animation if needed (looping)
  useEffect(() => {
    if (index === totalCards + 2) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(2);
      }, 600); // match transition duration
    }
    if (index === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(totalCards);
      }, 600);
    } else {
      setIsAnimating(true);
    }
  }, [index, totalCards]);

  return (
    <div id="client-main">
        <h1 id="client-head">WHAT OUR CLIENTS SAY</h1>
        <img id="tstbg" src={testbg} alt="testimonials background" />
    <div className="clients-container">
      <button className="arrow-button left" onClick={handlePrev}>‹</button>
      <div className="slider-window">
        <div
          ref={wrapperRef}
          className={`cards-wrapper ${isAnimating ? 'animate' : ''}`}
          style={{
            transform: `translateX(-${index * 22}vw)`,
          }}
        >
          {extendedCards.map((text, i) => (
            <TestCard
              key={i}
              text={text}
              name={extendedNames[i]}
            />
          ))}
        </div>
      </div>
      <button className="arrow-button right" onClick={handleNext}>›</button>
    </div>
    </div>
  );
};

export default Clients;
