import React from 'react'
import './Projects.css';

function Projects() {
  return (
    <section id='projects'>
      <div className='projects_container'>
        <h1>PROJECTS</h1>
        <div className='projects_display'>
          <div className='project_single'>
            <img src='https://images.macrumors.com/t/7__j_zA889fYW8Z8qT_7fvks1oQ=/1600x900/smart/article-new/2021/08/apple-store-website.jpg '/>
            <div className='project_single-info'>
              <h2>Project Name</h2>
              <span className='project_tech'>
                <p>JavaScript</p>
                <p>React</p>
                <p>Redux</p>
                <p>Express</p>
                <p>Node</p>
              </span>
              <p className='project_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse.</p>
              <div className='project_links'>
                <a href='#'>Live</a>
                <a href='#'>Code</a>
              </div>
            </div>
          </div>
          <div className='project_single'>
            <img src='https://images.macrumors.com/t/7__j_zA889fYW8Z8qT_7fvks1oQ=/1600x900/smart/article-new/2021/08/apple-store-website.jpg '/>
            <div className='project_single-info'>
              <h2>Project Name</h2>
              <span className='project_tech'>
                <p>JavaScript</p>
                <p>React</p>
                <p>Redux</p>
                <p>Express</p>
                <p>Node</p>
              </span>
              <p className='project_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse.</p>
              <div className='project_links'>
                <a href='#'>Live</a>
                <a href='#'>Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
