import React from 'react'
import blur from '../assets/blur.png'
import './Seperator.css'

const Seperator = () => {
  return (
    <div id='blr'>
      <img src={blur} alt="seperator" loading="lazy" />
    </div>
  )
}

export default Seperator
