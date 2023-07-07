import React from "react";
import './AboutMe.css'

function AboutMe() {
  return (
    <section id="about">
      <div className="about_container">
        <div className="about_upper">
          <div className="about_img">
            <img
              alt="computer"
              src="https://img.freepik.com/free-vector/desktop-computer-vconcept-illustration_114360-12153.jpg"
            />
          </div>
          <div className="about_text">
            <h3>ABOUT ME</h3>
            <h1>Cathal Paz</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="about_tech-stack">
          <h3>My Techstack</h3>
          <div className="tech-stack_icons">
            <figure className="icon">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                alt="JavaScript"
              />
              <span className='icon_name'>JavaScript</span>
            </figure>
            <figure className="icon">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-typescript-1174965.png?f=avif&w=256"
                alt="TypeScript"
              />
              <span className='icon_name'>TypeScript</span>
            </figure>
            <figure className="icon">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-python-2038870-1720083.png?f=avif&w=256"
                alt="Python"
              />
              <span className='icon_name'>Python</span>
            </figure>
            <figure className="icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt="HTML"
              />
              <span className='icon_name'>HTML</span>
            </figure>
            <figure className="icon">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                alt="CSS"
              />
              <span className='icon_name'>CSS</span>
            </figure>
            <figure className="icon">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                alt="React"
              />
              <span className='icon_name'>React</span>
            </figure>
            <figure className="icon">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-redux-283024.png?f=avif&w=256"
                alt="Redux"
              />
              <span className='icon_name'>Redux</span>
            </figure>
            <figure className="icon">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-postgresql-8-1175119.png?f=avif&w=256"
                alt="postgresql"
              />
              <span className='icon_name'>PostgreSQL</span>
            </figure>
            <figure className="icon">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=avif&w=256"
                alt="git"
              />
              <span className='icon_name'>Git/Github</span>
            </figure>
            <figure className="icon">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png?f=avif&w=256"
                alt="node"
              />
              <span className='icon_name'>Node</span>
            </figure>
            <figure className="icon">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-flask-51-285137.png?f=avif&w=256"
                alt="flask"
              />
              <span className='icon_name'>Flask</span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
