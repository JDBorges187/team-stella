import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
  return <div className="footer">
      <div className="profile-section">
        <h2>Alex Rodriguez</h2>
        <ul className="profile-links">
          <li>
            <a href="https://github.com/alex-therookie">Github</a>
          </li>
        </ul>
      </div>
      <div className="profile-section">
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
        <h2>Jorge Borges</h2>
        <ul className="profile-links">
          <li>
              <a href="https://github.com/JDBorges187">Github</a>
          </li>
        </ul>
      </div>
      <div className="profile-section">
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
