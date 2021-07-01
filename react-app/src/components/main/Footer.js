import React from "react";
import alexImage from '../../pictures/alex-headshot.jpg'
import brianImage from '../../pictures/brian-headshot.png'
import jorgeImage from '../../pictures/jorge-headshot.png'
import ondreImage from '../../pictures/ondre-headshot.jpeg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return <div className="footer">
    <div className="profile-section">
      <div className='profile-image-container'>
        <img className="profile-image" src={alexImage} />
      </div>
      <h2>Alex Rodriguez</h2>
      <ul className="profile-links">
        <li>
          <i class="fab fa-github"></i>
          <a href="https://github.com/alex-therookie">Github</a>
        </li>
        <li>
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/alex-rodriguez-8a8aa1146/">LinkedIn</a>
        </li>
      </ul>
    </div>
    <div className="profile-section">
      <div className='profile-image-container'>
        <img className="profile-image" src={brianImage} />
      </div>
      <h2>Brian Xue</h2>
      <ul className="profile-links">
        <li>
          <i class="fab fa-github"></i>
          <a href="https://github.com/bxue2">Github</a>
        </li>
        <li>
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/brian-xue/">LinkedIn</a>
        </li>
      </ul>
    </div>
    <div className="profile-section">
      <div className='profile-image-container'>
        <img className="profile-image" src={jorgeImage} />
      </div>
      <h2>Jorge Borges</h2>
      <ul className="profile-links">
        <li>
          <i class="fab fa-github"></i>
          <a href="https://github.com/JDBorges187">Github</a>
        </li>
        <li>
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/jorge-engineer/">LinkedIn</a>
        </li>


        </ul>
    </div>
    <div className="profile-section">
      <div className='profile-image-container'>
        <img className="profile-image" src={ondreImage} />
      </div>
      <h2>Ondre Williams</h2>
      <ul className="profile-links">
        <li>
          <Link to="https://github.com/OndreWilliams"><div class="profile-link_icon fab fa-github fa-4x"></div></Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/ondre-williams-289b26132/"><div class="profile-link_icon fab fa-linkedin fa-3x"></div></Link>
        </li>
      </ul>
    </div>
  </div>;
};

export default Footer;
