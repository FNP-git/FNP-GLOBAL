import React from 'react'
import './Header.css'
import homeLogo from '../assets/Logo.svg'

const Header = () => {
  return (
    <>
        <div id="head">
            <div id="homelogo">
                <img src={homeLogo} alt="FNP Digital Logo" id="hmlogo" />
            </div>
            <div id="menu">
                <div className="hm-btn">Home</div>
                <div className="hm-btn">About</div>
                <div className="hm-btn">Blogs</div>
                <div className="hm-btn">Contact Us</div>
            </div>
        </div>
    </>
  )
}

export default Header
