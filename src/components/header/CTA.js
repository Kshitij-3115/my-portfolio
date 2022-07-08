import React from 'react'

import resume from '../../assets/1906086_Kshitij_CSE.pdf'

import classes from './CTA.module.css'

const CTA = () => {

  return (
    <div className={classes.container}>
        <a href={resume} className={`${classes.btn } ${classes.btn_cv}`}> Download Resume</a>
        <a href="#contact" className={`${classes.btn} ${classes.btn_talk}`}>Let's talk</a>
    </div>
  )
}

export default CTA