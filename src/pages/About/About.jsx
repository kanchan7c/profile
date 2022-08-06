import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const About = () => {
  return (
    <div className='about_page'>
      <div className='about-image'>
        <img src='./images/about-img.png' alt='about-pic' />
      </div>
      <div className='about-description'>
        <p className='about-welcome'>Welcome!</p>
        <h3 className='about-heading'>Let's break the ice</h3>
        <p className='about-description'>
          I'm a Frontend Web Developer &amp; Designer. Having attention to the
          details and my love for modern web design has brought me immense joy
          while working on my personal projects.
        </p>
        <p className='about-description-2'>
          I come with great experience in Business Operations and Communications
          which helps me fluently share my ideas to my colleagues as well as
          off-shore clients. I'm aspiring to get a break through in my career
          change journey towards Web Development.
        </p>
        <Link to='/projects' className='btn'>
          Explore My Projects <KeyboardDoubleArrowRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default About;
