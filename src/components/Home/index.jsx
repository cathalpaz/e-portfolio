import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import './Home.css'

function Home() {
  return (
    <div className='home_page'>
      <h3>Hello, I'm</h3>
      <h1>Cathal Paz</h1>
      <h2>Fullstack Developer</h2>
      <p>Find out more <a href='#about'>about me.</a></p>
      <div className='logo_links'>
        <a href='https://www.linkedin.com/in/cathal-paz-052239263/'> <LinkedInIcon /> </a>
        <a href='https://github.com/cathalpaz'> <GitHubIcon /> </a>
        <a href='google.com'> <DescriptionIcon /> </a>
      </div>
      <a className='home_page_cursor' href='#about'> i </a>
    </div>
  )
}

export default Home
