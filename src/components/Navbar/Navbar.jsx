import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="arjent-contact">
        <lord-icon
            src="https://cdn.lordicon.com/srsgifqc.json"
            trigger="loop"
            delay="1500"
            style={{"width":"25px","height":"25px","paddingRight":"20px"}}>
        </lord-icon><span>+91-12345 12345</span>
      </div>
      <nav>
        <div className="logo">
            <img src='/logo/logo.png' />
            <h2>SoulCare</h2>
        </div>
        <div className="links">
            <ul>
                <li>Home</li>
                <li>Our Services</li>
                <li>Our Hospital's</li>
                <li>About Us</li>
            </ul>
        </div>
        <div className="button">
            
            <button>Book a Appointment</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
