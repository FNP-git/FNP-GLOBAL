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
    if (index < totalCards + 2) setIndex((prev) => prev + 2);
  };

  const handlePrev = () => {
    if (index > 0) setIndex((prev) => prev - 2);
  };

  // Looping logic on index change
  useEffect(() => {
    const total = totalCards + 2;

    if (index === total) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(2);
      }, 600);
    } else if (index === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(totalCards);
      }, 600);
    } else {
      setIsAnimating(true);
    }
  }, [index, totalCards]);

  // Reset animation state after instant jump
  useEffect(() => {
    if (!isAnimating) {
      setTimeout(() => setIsAnimating(true), 50);
    }
  }, [isAnimating]);

  // Drag/swipe handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
    wrapperRef.current.style.transition = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX || e.touches[0].pageX;
    const distance = x - startX.current;
    wrapperRef.current.style.transform = `translateX(calc(-${index * 22}vw + ${distance}px))`;
    currentTranslate.current = distance;
  };

  const handleMouseUp = () => {
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

  // Attach event listeners
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);
    container.addEventListener('touchstart', handleMouseDown);
    container.addEventListener('touchmove', handleMouseMove);
    container.addEventListener('touchend', handleMouseUp);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
      container.removeEventListener('touchstart', handleMouseDown);
      container.removeEventListener('touchmove', handleMouseMove);
      container.removeEventListener('touchend', handleMouseUp);
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
