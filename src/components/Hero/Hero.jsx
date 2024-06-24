import React from 'react'
import './style.css'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-section">
            <div className="headline">
                {/* <h1>Excellence in Care, Compassion in Service</h1> */}
                <h1>where every <span>LIFE</span> matters....!</h1>
                <p>Dedicated to providing world-class healthcare with a personal touch.</p>
                <button>Explore our Services</button>
            </div>
            <div className="image">
                <img src='/logo/doctor.png' />
            </div>

        </div>
    </div>
  )
}

export default Hero
