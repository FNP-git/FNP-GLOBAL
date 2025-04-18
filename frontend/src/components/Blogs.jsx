import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import './Blogs.css';
import img1 from '../assets/financial.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const blogData = [
  { image: img1, title: 'The Importance of digital marketing for MNCs' },
  { image: img1, title: '5 Trends in Global Business Strategy' },
  { image: img1, title: 'AI Tools Changing Marketing Game' },
  { image: img1, title: 'Building Brand Identity in 2025' },
  { image: img1, title: 'Why Your Business Needs SEO' },
  { image: img1, title: 'The Rise of Remote Work in Startups' },
  { image: img1, title: 'Content Marketing: A Deep Dive' },
  { image: img1, title: 'Leveraging LinkedIn for Growth' },
  { image: img1, title: 'Creating a Powerful Online Presence' },
  { image: img1, title: 'Top 10 Startup Marketing Mistakes' },
];

const Blogs = ({ showButton = true }) => {
  const totalCards = blogData.length;
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const navigate = useNavigate();

  const extendedBlogs = [
    ...blogData.slice(-3),
    ...blogData,
    ...blogData.slice(0, 3),
  ];

  const handleNext = () => {
    if (index >= totalCards) {
      setIsAnimating(false);
      setIndex(0);
      setTimeout(() => setIsAnimating(true), 50);
    } else {
      setIsAnimating(true);
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index <= 0) {
      setIsAnimating(false);
      setIndex(totalCards);
      setTimeout(() => setIsAnimating(true), 50);
    } else {
      setIsAnimating(true);
      setIndex((prev) => prev - 1);
    }
  };

  const cardWidth = `calc((100% - 4vh) / 3)`;

  return (
    <div className="blogs-section">
      <h1 className="blogs-heading">OUR LATEST BLOGS</h1>
      <div className="blogs-container">
        <button className="arw-button left" onClick={handlePrev}>
          <ChevronLeft />
        </button>
        <div className="slider-window">
          <div
            ref={wrapperRef}
            className={`blogs-wrapper ${isAnimating ? 'animate' : ''}`}
            style={{
              transform: `translateX(-${index * (100 / 3)}%)`,
            }}
          >
            {extendedBlogs.map((blog, i) => (
              <div
                key={i}
                className="blog-card-container"
                style={{ width: cardWidth }}
              >
                <BlogCard image={blog.image} title={blog.title} />
              </div>
            ))}
          </div>
        </div>
        <button className="arw-button right" onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>

      {showButton && (
        <button className="show-more" onClick={() => navigate('/blogs')}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Blogs;
