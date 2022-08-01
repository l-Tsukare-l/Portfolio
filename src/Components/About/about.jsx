import React from 'react'
import './about.css'
import me from '../../assets/User.png'
import {FaMedal} from 'react-icons/fa'
import {GoFileSubmodule} from 'react-icons/go'
import {FaUniversity} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About me"></img>
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaMedal className='about__icon'/>
            <h5>Experience</h5>
            <small>4 months+ working</small>
          </article>
          <article className='about__card'>
            <FaUniversity className='about__icon'/>
            <h5>Education</h5>
            <small>King Saud University</small>
          </article>
          <article className='about__card'>
            <GoFileSubmodule className='about__icon'/>
            <h5>Projects</h5>
            <small>6+ projects</small>
          </article>
        </div>
        <p>
        Highly motivated Engineer who is focusing on building up more technical
        skills through pursuing opportunities in the field of software engineering while
        delivering hard work. Excellent team spirit when working under pressure and paying
        attention to details. Looking forward to shaping a long-term career in the field of
        Information Technology.
        </p>

        <a href='#contact' className='btn'>Message Me</a>
        </div>
      </div>
    </section>
  )
}

export default About