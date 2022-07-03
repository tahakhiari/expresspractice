import React from 'react'
import {Link } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import ContactUs from "./components/ContactUs";
// import OurServices from "./components/OurServices";
import styles from '../../style.css'
const NavBar = ({nav}) => {
  return ( 

  <nav className='nav'>
    <h1>My website</h1>
  <ul>
    <Link to ="/" >
       <li>HomePage</li>
       </Link>
    <Link to ="/ContactUs">
       <li>ContactUs</li>
    </Link>
    <Link to ="/OurServices">
       <li>OurServices</li>
    </Link>
  </ul>
  </nav>  
  )
}

export default NavBar

