import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

function Home() {
  return (
    <div>
      <h3>Hello, I'm</h3>
      <h1>Cathal Paz</h1>
      <h2>Fullstack Developer</h2>
      <h3>Find out more about me</h3>
      <div>
        <a href='https://www.linkedin.com/in/cathal-paz-052239263/'> <LinkedInIcon /> </a>
        <a href='https://github.com/cathalpaz'> <GitHubIcon /> </a>
        <a href=''> <DescriptionIcon /> </a>
      </div>
    </div>
  )
}

export default Home
