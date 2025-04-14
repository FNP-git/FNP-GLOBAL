import React from 'react';
import './BlogCard.css';

const BlogCard = ({ image, title }) => {
  return (
    <div className="blog-card">
      <img src={image} alt="blog cover" className="blog-image" />
      <div className="blog-content">
        <h3>{title}</h3>
        <button className="read-more-btn">Read more</button>
      </div>
    </div>
  );
};

export default BlogCard;