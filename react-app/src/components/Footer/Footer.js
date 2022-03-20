import React from 'react';
import './Footer.css'


const Footer = () => {

  return (
    <div className="footer-main-container">
      <ul className="footer-languages">
          <li className="languages">Javasctipt</li>
          <li className="languages">Python</li>
          <li className="languages">Flask</li>
          <li className="languages">React</li>
          <li className="languages">Redux</li>
          <li className="languages">SQLAlchemy</li>
          <li className="languages">Postgre</li>
          <li className="languages">Docker</li>
          <li className="languages">Git</li>
      </ul>
      <div className="footer-developedby">
          <p className="footer-developedby-txt">Developed by:</p>
          <p className="footer-name">Katerina Kreibich</p>
          <a className="footer-linkedin-icon" href="https://github.com/Code-rina"><i className="fab fa-github-square"></i></a>
          <a className="footer-github-icon" href="https://www.linkedin.com/in/katerina-kreibich-7a79a251/"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
}

export default Footer;
