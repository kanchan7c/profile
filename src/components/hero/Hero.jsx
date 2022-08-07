import React from 'react';
import './hero.scss';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero_image'>
        <img src='./images/avatar.jpg' alt='hero_picture' />
      </div>
      <div className='hero_text'>
        <p>Hello, I'm</p>
        <h2>Kanchan</h2>
        <p className='hero_text-services'>
          Frontend Web Developer &amp; <span>Designer</span>
        </p>
        <div className='hero_button-group'>
          <a
            className='btn cv-button cta-button'
            href='https://docs.google.com/document/d/15R40sSthTAR8UI2xBTL0qUDfRelQbmdZf7SmmsvgIfI/edit'
            target='_blank'
            rel='noreferrer'
          >
            Download CV <KeyboardDoubleArrowRightIcon />
          </a>
          <Link className='btn cta-button' to='/contact'>
            Contact Me <KeyboardDoubleArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
