import React from 'react'

import classes from './HeaderSocials.module.css'

import {FaLinkedin, FaGithub, FaHackerrank} from 'react-icons/fa'
import {SiLeetcode, SiGeeksforgeeks, SiHackerearth} from 'react-icons/si'

const HeaderSocials = () => {

  return (
    <div className={classes.headerSocials}>
        <a href='https://linkedin.com' target='_blank' title='Linked In'> <FaLinkedin size={25} style={{color : '#0053a6'}}/> </a>
        <a href='https://gihub.com' target='_blank' title='github'> <FaGithub size={25} style={{color : 'black'}}/> </a>
        <a href='https://leetcode.com/Kshitij-Khot/' target='_blank' title='Leetcode'> <SiLeetcode size={25} style={{color : '#f0932b'}}/> </a>
        <a href='https://auth.geeksforgeeks.org/user/khotdug19cs/profile' target='_blank' title='GeeksForGeeks'> <SiGeeksforgeeks size={25} style={{color : '#00b894'}}/> </a>
        <a href='https://www.hackerrank.com/khotd_ug19_cs' title='hackerrank'> <FaHackerrank size={25} style={{color : '#10ac84'}}/> </a>
        <a href='https://www.hackerearth.com/@kshitij523' title='hackerearth'> <SiHackerearth size={25} style={{color : '#27135e'}}/> </a>
    </div>
  )
}

export default HeaderSocials