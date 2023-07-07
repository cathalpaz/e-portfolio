import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css'

function NavBar() {


  return (
    <div className='nav'>
      <NavLink className='logo' exact to='/'>Logo</NavLink>
      <div className="fixed_links">
        <a className="link" href='#home'>Home</a>
        <a className="link" href='#about'>About</a>
        <a className="link" href='#projects'>Projects</a>
        <a className="link" href='#contact'>Contact</a>
      </div>
    </div>
  )
}

export default NavBar
