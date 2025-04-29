import React, { useEffect, useRef } from 'react'
import './Home.css'
import vid from '../assets/homevid.mp4'
import Header from '../components/Header'
import rect from '../assets/rect.svg'
import box from '../assets/box.png'
import arrow from '../assets/scroll.png'
import Welcome from './Welcome'
import Seperator from '../components/Seperator'
import Services from './Services'
import Clients from './Clients'
import Global from './Global'
import Footer from '../components/Footer'
import Blog from '../components/Blogs'
import { useNavigate } from 'react-router-dom'
import Brands from './Brands'

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handlePageShow = () => {
      if (video) {
        video.style.display = 'none';
        setTimeout(() => {
          video.style.display = 'block';
          video.play().catch(() => {});
        }, 10);
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  return (
    <>
      <div className="homepg">
        <Header />

        <div id="main">
          <div id="cont1">
            <img id='rectimg' src={rect} alt="" loading="lazy" />
            <h1 id='main-head'>DRIVEN BY <span id='tag'>TRUST</span>,</h1>
          </div>    
          <div id="cont2">
            <h1 id='main-head'>YOUR <span id='tag'>GROWTH</span> OUR <span id='tag'>STRATEGY</span></h1>
          </div>
          <div id="box">
            <img id='bx' src={box} alt="" loading="lazy" />
          </div>
          <div id="cont3">
            <h2 id='subhead'>Meet Your Business Consultants</h2>
          </div>
          <div>
            <button id='btn2' onClick={() => navigate('/contact')}>Get in touch</button>
          </div>
          <div>
            <img id='scr' src={arrow} alt="Scroll Down" loading="lazy" />
          </div>
        </div>

        <div className="overlay"></div>
        <video
          id='homebg'
          ref={videoRef}
          src={vid}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <Welcome />
      <Seperator />
      <Services />
      <Brands />
      <Clients />
      <Global />  
      <Blog />
      <Footer />
    </>
  )
}

export default Home
