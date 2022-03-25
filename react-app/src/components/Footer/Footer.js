import React from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import './Footer.css'


const Footer = () => {

  return (
    <div className="footer-main-container">
      <ul className="footer-languages">
          <li className="languages">Javascript</li>
          <li className="languages">Python</li>
          <li className="languages">Flask</li>
          <li className="languages">React</li>
          <li className="languages">Redux</li>
          <li className="languages">SQLAlchemy</li>
          <li className="languages">Postgres</li>
          <li className="languages">Docker</li>
          <li className="languages">Git</li>
      </ul>
      <div className="footer-developedby">
          <p className="footer-developedby-txt">Developed by:</p>
          <p className="footer-name">Katerina Kreibich</p>
          <a className="footer-github-icon" href="https://github.com/Code-rina" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
          <a className="footer-linkedin-icon" href="https://www.linkedin.com/in/katerina-kreibich-7a79a251/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      </div>
    </div>
  );
}

export default Footer;
