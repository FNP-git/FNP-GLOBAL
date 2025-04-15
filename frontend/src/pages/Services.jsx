import React from 'react';
import './Services.css';
import servbg from '../assets/servbg.svg';
import ServiceCard from '../components/ServiceCard';
import business from '../assets/business.jpg';
import financial from '../assets/financial.png';
import legal from '../assets/legal.png';
import market from '../assets/market.png';
import BigCard from '../components/BigCard';
import mirror from '../assets/mirror.svg';

const services = [
  { img: business, label: 'Business Setup & Expansion' },
  { img: financial, label: 'Financial Investment & Consulting' },
  { img: legal, label: 'Legal & Regulatory Compliances' },
  { img: market, label: 'Market Research & Analysis' },
];

const Services = ({ showButton = true }) => {
  return (
    <>
      <img id='serv-bg' src={servbg} alt="services bg" />
      <div id="serv">
        <h1 id='serv-head'>OUR SERVICES</h1>
        <div className="services-grid">
          {services.map(({ img, label }, idx) => (
            <ServiceCard key={idx} bgImage={img} label={label} />
          ))}
        </div>

        <img id='mirror-bg' src={mirror} alt="choose bg" />
        <h1 id='serv-head2'>WHY CHOOSE US</h1>

        <BigCard number="01." title="GLOBAL EXPERTISE">
          Expanding beyond borders requires expertise in global markets, regulations, and operations. At FNP Global, we provide the insights and strategies needed to enter, operate, and grow internationally.  
          Our team of business consultants, legal experts, financial advisors, and market analysts offers tailored solutions to help you navigate complexities, ensure compliance, and seize global opportunities.  
          Whether you’re a startup, SME, or multinational, we empower you to make informed, strategic, and profitable decisions worldwide.
        </BigCard>

        <BigCard number="02." title="TAILORED SOLUTIONS">
          At FNP Global, we know every business is unique. That’s why we deliver customized strategies to match your specific goals, industry, and growth plans.
          Whether you're a startup building a foundation, a company scaling up, or a multinational expanding globally, our experts provide personalized solutions that align with your vision.
          Our mission is simple: to help you achieve sustainable growth, profitability, and a competitive edge with strategies that work.
        </BigCard>

        <BigCard number="03." title="PROVEN RESULTS">
          At FNP Global, we let results speak for themselves. Our expertise in business strategy, financial consulting, market research, and global expansion has helped startups, SMEs, and multinational corporations achieve measurable success worldwide.
          From overcoming challenges to maximizing profitability, our results-driven approach ensures every solution delivers tangible impact. Your success is our priority, and we’re committed to driving growth, profitability, and long-term sustainability for your business.
        </BigCard>

        <BigCard number="04." title="CLIENT-CENTRIC APPROACH">
          At FNP Global, we measure our success by yours. Our client-centric approach ensures that your goals, challenges, and vision shape every solution we deliver.
          We provide personalized, strategic, and results-driven business solutions tailored to startups, SMEs, and multinational corporations. By listening, analyzing, and collaborating, we help drive measurable success and sustainable growth.
          Built on trust, transparency, and value, we empower you to make confident business decisions—every step of the way.
        </BigCard>

        {showButton && <button className='lrn'>Learn More</button>}
      </div>
    </>
  );
};

export default Services;
