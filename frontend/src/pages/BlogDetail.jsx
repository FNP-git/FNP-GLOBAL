import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BlogDetail.css';

const BlogDetail = () => {
  const { state: blog } = useLocation();
  const navigate = useNavigate();

  if (!blog) {
    return (
      <>
        <Header />
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Blog not found</h2>
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="blog-detail">
        <div className="blog-detail-container">
          <img className="blog-detail-image" src={blog.image} alt={blog.title} loading="lazy" />
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-content">
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
