import React from 'react'

import classes from './Header.module.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import me from '../../assets/pic.png'


const Header = () => {
  return (
   <header className={`container ${classes.container}`}>
      <h5>Hi, I am</h5>
      <h1>Kshitij Khot</h1>
      <h5>Fullstack web developer</h5>
      <CTA /> 

      <div className={classes.me}>
        <img src={me} alt="me" />
      </div>

      <a href="#contact">Scroll down</a>
   </header>
  )
}

export default Header