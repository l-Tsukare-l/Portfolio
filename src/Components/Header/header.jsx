import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/engineering.png'
import HS from './headerSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Greetings I'm</h5>
        <h1>Meteab Alajmi</h1>
        <h5 className="text-light">Software Engineer</h5>
        
        <CTA />
        
        <HS />

        <div className="me">
          <img src={Me} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header