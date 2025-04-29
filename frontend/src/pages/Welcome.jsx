import React from 'react'
import './Welcome.css'
import background from '../assets/wlcmbg.svg'

const Welcome = () => {
  return (
    <>
      <div id="wlcm">
        <img src={background} alt="" id='bg' loading="lazy" />
        <h1 id='wlc-head'>WELCOME TO FNP GLOBAL</h1>
          <div class="headline-container" id="headlineCarousel">
            <h1 class="headline">FIDELITY</h1>
            <h1 class="headline">NEXUS</h1>
            <h1 class="headline">PERFORMANCE</h1>
          </div>
          <div id="wlc-para">
          At FNP Global, we help businesses navigate the complexities of the global market with expert consulting solutions that drive growth, efficiency, and innovation.
          In today’s fast-changing business landscape, success requires strategic planning, operational excellence, and innovation. We empower companies to overcome challenges, seize opportunities, and achieve sustainable success.
          Whether expanding internationally, streamlining operations, embracing digital transformation, or refining strategies, FNP Global delivers tailored, results-driven solutions to help you stay ahead.
          Let’s grow smarter, together.
          </div>

      </div>
    </>
  )
}

export default Welcome
