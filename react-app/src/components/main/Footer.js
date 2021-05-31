import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
  return <div className="footer">
      <div className="profile-section">
        <div className="profile-image" style={{backgroundImage: "url(/images/alex-headshot-placeholder.jpg)"}} />
        <h2>Alex Rodriguez</h2>
        <ul className="profile-links">
          <li>
            <a href="https://github.com/alex-therookie">Github</a>
          </li>
        </ul>
      </div>
      <div className="profile-section">
      <div className="profile-image" style={{backgroundImage: "url(/images/brian-headshot.png)"}} />
        <h2>Brian Xue</h2>
        <ul className="profile-links">
          <li>
              <a href="https://github.com/bxue2">Github</a>
          </li>
          <li>
              <a href="https://www.linkedin.com/in/brian-xue/">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className="profile-section">
      <div className="profile-image" style={{backgroundImage: "url(/images/jorge-headshot.png)"}} />
        <h2>Jorge Borges</h2>
        <ul className="profile-links">
          <li>
              <a href="https://github.com/JDBorges187">Github</a>
          </li>
        </ul>
      </div>
      <div className="profile-section">
      <div className="profile-image" style={{backgroundImage: "url(/images/ondre-headshot.jpeg)"}} />
        <h2>Ondre Williams</h2>
        <ul className="profile-links">
          <li>
              <Link to="https://github.com/OndreWilliams">Github</Link>
          </li>
        </ul>
      </div>
  </div>;
};

export default Footer;
