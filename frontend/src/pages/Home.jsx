import React from 'react'
import './Home.css'
import vid from '../assets/homevid.mov'
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

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="homepg">
        <Header />

        <div id="main">
          <div id="cont1">
            <img id='rectimg' src={rect} alt="" />
            <h1 id='main-head'>DRIVEN BY <span id='tag'>TRUST</span>,</h1>
          </div>    
          <div id="cont2">
            <h1 id='main-head'>YOUR <span id='tag'>GROWTH</span> OUR <span id='tag'>STRATEGY</span></h1>
          </div>
          <div id="box">
            <img id='bx' src={box} alt="" />
          </div>
          <div id="cont3">
            <h2 id='subhead'>Meet Your Business Consultants</h2>
          </div>
          <div>
            <button id='btn2' onClick={() => navigate('/contact')}>Get in touch</button>
          </div>
          <div>
            <img id='scr' src={arrow} alt="Scroll Down" />
          </div>
        </div>
        <div className="overlay"></div>
        <video id='homebg' src={vid} autoPlay muted loop preload="auto"></video>
      </div>

      <Welcome />
      <Seperator />
      <Services />
      <Clients />
      <Global />  
      <Blog />
      <Footer />
    </>
  )
}

export default Home
