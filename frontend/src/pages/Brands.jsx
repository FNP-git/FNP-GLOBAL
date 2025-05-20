import React from 'react';
import './Brands.css';

import brand1 from '../assets/1Large.svg';
import brand2 from '../assets/2Large.png';
import brand3 from '../assets/3Large.png';
import brand4 from '../assets/4Large.png';
import brand5 from '../assets/5Large.png';
import brand6 from '../assets/6Large.png';
import brand7 from '../assets/7Large.svg';
import brand8 from '../assets/8Large.png';

const Brands = () => {
  return (
    <div className="brands-page">

      {/* Heading shown only on mobile */}
      <h1 className="clients-heading mobile-only">OUR CLIENTS</h1>

      <div className="brands-grid">

        {/* Desktop/Tablet layout */}
        <div className="desktop-layout">
          <div className="brands-row">
            <img src={brand1} alt="Brand 1" className="brand-logo" />
            <img src={brand2} alt="Brand 2" className="brand-logo" />
            <img src={brand3} alt="Brand 3" className="brand-logo" />
          </div>

          <div className="brands-row center-row">
            <img src={brand4} alt="Brand 4" className="brand-logo" />
            <div className="clients-text">
              <h1>OUR CLIENTS</h1>
            </div>
            <img src={brand5} alt="Brand 5" className="brand-logo" />
          </div>

          <div className="brands-row">
            <img src={brand6} alt="Brand 6" className="brand-logo" />
            <img src={brand7} alt="Brand 7" className="brand-logo" />
            <img src={brand8} alt="Brand 8" className="brand-logo" />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="mobile-layout">
          <div className="brands-row">
            <img src={brand1} alt="Brand 1" className="brand-logo" />
            <img src={brand2} alt="Brand 2" className="brand-logo" />
          </div>
          <div className="brands-row">
            <img src={brand3} alt="Brand 3" className="brand-logo" />
            <img src={brand4} alt="Brand 4" className="brand-logo" />
          </div>
          <div className="brands-row">
            <img src={brand5} alt="Brand 5" className="brand-logo" />
            <img src={brand6} alt="Brand 6" className="brand-logo" />
          </div>
          <div className="brands-row">
            <img src={brand7} alt="Brand 7" className="brand-logo" />
            <img src={brand8} alt="Brand 8" className="brand-logo" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Brands;
