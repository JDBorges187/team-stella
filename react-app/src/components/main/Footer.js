import React from "react";
import alexImage from '../../pictures/alex-headshot.jpg'
import brianImage from '../../pictures/brian-headshot.png'
import jorgeImage from '../../pictures/jorge-headshot.png'
import ondreImage from '../../pictures/ondre-headshot.jpeg'

const Footer = () => {
  return <div className="footer">
    <div className="profile-section">
      <a href="https://alex-therookie.github.io/">
        <div className='profile-image-container'>
          <img className="profile-image" src={alexImage} />
        </div>
        <h2 className='profile-name'>Alex Rodriguez</h2>
      </a>
      <div className='profile-links'>
        <a href="https://github.com/alex-therookie"><div class="profile-link_icon fab fa-github fa-3x"></div></a>
        <a href="https://www.linkedin.com/in/alex-rodriguez-8a8aa1146/"><div class="profile-link_icon fab fa-linkedin fa-3x"></div></a>
      </div>
    </div>
    <div className="profile-section">
      <a href="https://bxue2.github.io/">
        <div className='profile-image-container'>
          <img className="profile-image" src={brianImage} />
        </div>
        <h2 className='profile-name'>Brian Xue</h2>
      </a>
      <div className='profile-links'>
        <a href="https://github.com/bxue2"><div class="profile-link_icon fab fa-github fa-3x"></div></a>
        <a href="https://www.linkedin.com/in/brian-xue/"><div class="profile-link_icon fab fa-linkedin fa-3x"></div></a>
      </div>
    </div>
    <div className="profile-section">
      <a href="https://jdborges187.github.io/">
        <div className='profile-image-container'>
          <img className="profile-image" src={jorgeImage} />
        </div>
        <h2 className='profile-name'>Jorge Borges</h2>
      </a>
      <div className='profile-links'>
        <a href="https://github.com/JDBorges187"><div class="profile-link_icon fab fa-github fa-3x"></div></a>
        <a href="https://www.linkedin.com/in/jorge-engineer/"><div class="profile-link_icon fab fa-linkedin fa-3x"></div></a>
      </div>
    </div>
    <div className="profile-section">
      <a href="https://ondrewilliams.github.io/">
        <div className='profile-image-container'>
          <img className="profile-image" src={ondreImage} />
        </div>
        <h2 className='profile-name'>Ondre Williams</h2>
      </a>
      <div className='profile-links'>
        <a href="https://github.com/OndreWilliams"><div class="profile-link_icon fab fa-github fa-3x"></div></a>
        <a href="https://www.linkedin.com/in/ondre-williams-289b26132/"><div class="profile-link_icon fab fa-linkedin fa-3x"></div></a>
      </div>
    </div>
  </div>;
};

export default Footer;
