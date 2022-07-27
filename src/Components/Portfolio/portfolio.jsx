import React from 'react'
import './portfolio.css'
import SAHM from '../../assets/SAHM2.jpg'
import SUD from '../../assets/sudoku.png'

const data = [
  {
    id: 1,
    image: SAHM,
    title: 'Saudi Arabia Hospital Marketplace',
    descp: 'SAHM is a third party web app that gives you the ability to choose from all the hospitals near you and book an appointment.',
    github: 'https://github.com',
  },
  {
    id: 2,
    image: SUD,
    title: 'Sudoku Game',
    descp: 'Ordinary game of Sudoku with 3 different difficulties. The game also has a leaderboard that contains the users games.',
    github: 'https://github.com', 
  }
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, descp, github}) => {
            return (
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
            <img src={image} alt= '' />
            </div>
            <h3>{title}</h3>
            <h5>{descp}</h5>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' id='github' target='_blank'>Github</a>
            </div>
          </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default portfolio