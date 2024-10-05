import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className='hero'>
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>We believe that is is all about the BIG DREAMS and the small details!</p>
          <Link to='contact' style={{cursor:"pointer"}} spy={true} smooth={true} duration={500}>Book Now</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
