import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <p>© {new Date().getFullYear()} Jyoti's Portfolio. All rights reserved.</p>
        <p>Made with 💛 using React</p>

        <div className="social-icons">
        <a href="https://github.com/jyoti2711" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jyoti-kumari-986687254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="jyotikumarimuza@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
