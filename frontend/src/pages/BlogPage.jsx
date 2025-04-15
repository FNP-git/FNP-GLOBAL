import React from 'react';
import './BlogPage.css';
import Header from '../components/Header';
import bg from '../assets/abtbg.png';
import abtlogo from '../assets/abt-logo.png';
import Blogs from '../components/Blogs';
import BlogContainer from '../components/BlogContainer';
import imgrt from '../assets/bsns.png';
import Footer from '../components/Footer';

const BlogPage = () => {
  return (
    <>
      <img src={bg} alt="background" id="blogs-bg" />
      <Header />
      <div className="blogs">
        <div className="blogs-head">
          <h1>FNP Global Blogs</h1>
        </div>
        <div className="blogs-subhead">
          <h1>Finding Inspiration in Every Turn</h1>
        </div>
        <img src={abtlogo} alt="blog logo" id='blogs-logo' />
        <div className="blogs-content">
          <p id='blogs-para'>
          At FNP Global, we strive to provide insightful, up-to-date, and actionable content to help businesses navigate the complexities of the global market. Our blog covers a wide range of topics, from business strategy and market trends to financial management and regulatory compliance.
          </p>
        </div>
      </div>
      <Blogs showButton={false} />
      <BlogContainer />
      <div id="Blogs-sec2">
        <div id="blog-left">
        <div className="blog-info-container">
      <div className="blog-info">
        <h1 className="blog-info-title">FNP Global Blogs</h1>
        
        <div className="blog-section">
          <h2 className="blog-section-title">Latest Trends in Global Business</h2>
          <p className="blog-section-text">
            Staying ahead in today’s dynamic business landscape requires a deep understanding of emerging market trends. 
            We analyze global economic shifts, industry innovations, and consumer behaviors to help businesses make informed decisions.
          </p>
        </div>

        <div className="blog-section">
          <h3 className="blog-section-subtitle">Strategic Business Expansion</h3>
          <p className="blog-section-text">
            Expanding your business into new international markets can be challenging. Our experts share best practices, 
            case studies, and key considerations for entering and thriving in different global markets.
          </p>
        </div>

        <div className="blog-section">
          <h3 className="blog-section-subtitle">Financial Management & Investment Strategies</h3>
          <p className="blog-section-text">
            Managing finances effectively is crucial for business sustainability. We provide insights into financial planning, 
            investment opportunities, risk management, and cost optimization techniques.
          </p>
        </div>

        <div className="blog-section">
          <h3 className="blog-section-subtitle">Regulatory Compliance & Legal Advisory</h3>
          <p className="blog-section-text">
            Understanding and complying with international business regulations is vital to avoid legal complications. 
            Our blog keeps you updated on regulatory frameworks, trade laws, and compliance requirements across different regions.
          </p>
        </div>

        <div className="blog-section">
          <h3 className="blog-section-subtitle">Technology & Digital Transformation</h3>
          <p className="blog-section-text">
            Technology is reshaping the business world. Learn about the latest advancements in digital transformation, 
            artificial intelligence, blockchain, and other innovations that can enhance business efficiency and growth.
          </p>
        </div>

        <div className="blog-section">
          <h3 className="blog-section-subtitle">Entrepreneurship & Leadership</h3>
          <p className="blog-section-text">
            Strong leadership and an entrepreneurial mindset are key drivers of business success. 
            We share expert advice, motivational stories, and leadership strategies to help business leaders and aspiring entrepreneurs excel.
          </p>
        </div>

        <div className="blog-section">
          <h3 className="blog-section-subtitle">Join Our Community</h3>
          <p className="blog-section-text">
            Stay connected with FNP Global for regular insights, expert opinions, and practical business solutions. 
            Subscribe to our newsletter and follow us on social media to stay informed about the latest in global business.
            Empowering businesses for global success — FNP Global.
          </p>
        </div>
      </div>
    </div>
        </div>
        <div id="blog-right">
            <img src={imgrt} alt="" id='bsns' />
        </div>
      </div>
      <Footer />

    </>
  );
}

export default BlogPage;
