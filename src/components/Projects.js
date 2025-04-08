import React from 'react';
import './Projects.css';
import cal from '../assets/cal.jpg';
import img from '../assets/img.jpg';
import toktoe from '../assets/toktoe.png';
import port from '../assets/port.png';

const Projects = () => {
		
  return (
    <div  id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-cards">
        
        <div className="project-card">
        <img src={cal} alt="Project One" className="project-image" />
  <h3>Project One</h3>
  <p>This is a short description of the project.</p>
  <a href="https://github.com/jyoti2711/CALCULATOR.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
</div>

<div className="project-card">
<img src={img} alt="Project Two" className="project-image" />
  <h3>Project Two</h3>
  <p>This is another project description.</p>
  <a href="https://github.com/jyoti2711/IMAGE-GALLERY.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
</div>

<div className="project-card">
<img src={toktoe} alt="Project Three" className="project-image" />
  <h3>Project Three</h3>
  <p>This project does something cool!</p>
  <a href="https://github.com/jyoti2711/jyoti2711.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
</div>

<div className="project-card">
<img src={port} alt="Project Three" className="project-image" />
  <h3>Project for</h3>
  <p>This project does something cool!</p>
  <a href="https://github.com/jyoti2711/my-portfolio.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
</div>

        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
