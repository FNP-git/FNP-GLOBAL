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
  const [index, setIndex] = useState(2);
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);

  const handleNext = () => {
    setIndex((prev) => prev + 2);
  };

  const handlePrev = () => {
    setIndex((prev) => prev - 2);
  };

  useEffect(() => {
    const total = totalCards + 2;
    if (index === total) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(2);
      }, 300);
    } else if (index === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(totalCards);
      }, 300);
    } else {
      setIsAnimating(true);
    }
  }, [index, totalCards]);

  useEffect(() => {
    if (!isAnimating) {
      setTimeout(() => setIsAnimating(true), 50);
    }
  }, [isAnimating]);

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    wrapperRef.current.style.transition = 'none';
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    const delta = currentX - startX.current;
    wrapperRef.current.style.transform = `translateX(calc(-${index * 22}vw + ${delta}px))`;
    currentTranslate.current = delta;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    wrapperRef.current.style.transition = 'transform 0.5s ease-in-out';

    if (currentTranslate.current < -50) {
      handleNext();
    } else if (currentTranslate.current > 50) {
      handlePrev();
    } else {
      wrapperRef.current.style.transform = `translateX(-${index * 22}vw)`;
    }
    currentTranslate.current = 0;
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [index]);

  return (
    <div id="client-main">
      <h1 id="client-head">WHAT OUR CLIENTS SAY</h1>
      <img id="tstbg" src={testbg} alt="testimonials background" />
      <div className="clients-container" ref={containerRef}>
        <button className="arrow-button left" onClick={handlePrev}>‹</button>
        <div className="slider-window">
          <div
            ref={wrapperRef}
            className="cards-wrapper"
            style={{
              transform: `translateX(-${index * 22}vw)`,
              transition: isAnimating ? 'transform 0.6s ease-in-out' : 'none',
            }}
          >
            {extendedCards.map((text, i) => (
              <TestCard key={i} text={text} name={extendedNames[i]} />
            ))}
          </div>
        </div>
        <button className="arrow-button right" onClick={handleNext}>›</button>
      </div>
    </div>
  );
};

export default Clients;
