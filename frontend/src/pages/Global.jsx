import React from 'react'
import './Global.css'
import map from '../assets/map.png'

const Global = () => {
  return (
    <>
        <div id="global-main">
            <div id="global-header">
                <h1 id="global-head">OUR GLOBAL PRESENCE</h1>
            </div>
            <img src={map} alt="" id='map' />
        </div>
    </>
  )
}

export default Global
