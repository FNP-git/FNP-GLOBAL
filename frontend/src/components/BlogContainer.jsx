// src/components/BlogContainer.jsx
import React from 'react';
import FullCard from './FullCard';
import './BlogContainer.css';
import img1 from '../assets/financial.png';

// Sample data - replace image paths with actual imports
const blogs = [
    {
      image: img1,
      title: 'The Importance of Digital Marketing for MNCs',
      text: 'In today’s fast-paced digital era, businesses must evolve and adapt to survive in global markets...',
    },
    {
      image: img1,
      title: 'Understanding IT and ITES: The Backbone of Digital Transformation',
      text: 'In the digital age, Information Technology and ITES drive innovation, efficiency, and growth...',
    },
    {
      image: img1,
      title: 'The Power of Business Process Outsourcing (BPO)',
      text: 'As companies grow, outsourcing critical operations can reduce costs and improve performance...',
    },
    {
      image: img1,
      title: 'Navigating Legal Compliance in Global Business',
      text: 'International expansion brings legal complexities. Learn how to ensure compliance across borders...',
    },
    {
      image: img1,
      title: 'The Future of Financial Consulting in a Global Economy',
      text: 'As financial landscapes shift, expert consulting becomes key to making data-driven decisions...',
    },
    {
      image: img1,
      title: 'Market Research: Unlocking Consumer Insights Worldwide',
      text: 'Effective research fuels global strategy. Discover how to analyze trends, competitors, and customer needs...',
    },
    {
      image: img1,
      title: 'SME Success Stories: Going Global with Confidence',
      text: 'Explore how small and medium enterprises are breaking barriers and building global brands...',
    },
    {
      image: img1,
      title: 'Why Startups Need a Scalable Business Strategy',
      text: 'Early-stage growth requires smart planning. Here’s how startups can build strategies that scale with success...',
    },
    {
      image: img1,
      title: 'Technology as a Catalyst for Global Expansion',
      text: 'Discover how cloud computing, automation, and AI are driving international business operations...',
    },
    {
      image: img1,
      title: 'Client-Centric Models in the Consulting World',
      text: 'Today’s successful firms prioritize client needs above all. Here’s how that approach is changing consulting...',
    },
  ];
  

const BlogContainer = () => {
  return (
    <div className="blog-container">
      <h1 className="trend-heading">Trend Talks</h1>
      {blogs.map((blog, index) => (
        <FullCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default BlogContainer;
