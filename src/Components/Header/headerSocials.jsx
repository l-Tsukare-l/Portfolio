import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/meteab-alajmi-1943a5216/" target= "_blank"> <BsLinkedin /></a>
        <a href="https://github.com/l-Tsukare-l" target= "_blank"> <BsGithub/> </a>
    </div>
  )
}

export default headerSocials