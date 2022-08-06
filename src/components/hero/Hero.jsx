import React from 'react';
import './Hero.scss';

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
      </div>
    </div>
  );
};

export default Hero;
