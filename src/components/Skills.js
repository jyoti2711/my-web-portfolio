import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 size={40} color="#e34c26" />
          <h3>HTML</h3>
          <p>Advanced</p>
        </div>
        <div className="skill-card">
          <FaCss3Alt size={40} color="#264de4" />
          <h3>CSS</h3>
          <p>Advanced</p>
        </div>
        <div className="skill-card">
          <FaJs size={40} color="#f0db4f" />
          <h3>JavaScript</h3>
          <p>Intermediate</p>
        </div>
        <div className="skill-card">
          <FaReact size={40} color="#61DBFB" />
          <h3>React</h3>
          <p>Intermediate</p>
        </div>
        <div className="skill-card">
          <FaGitAlt size={40} color="#f1502f" />
          <h3>Git</h3>
          <p>Basic</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
