import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = () => {
  return (
    <div className='card flex flex-col'>
      <div className='card-img'>
        <img src='' alt='project' />
      </div>
      <div className='card-title'>
        <h3>Title</h3>
      </div>
      <div className='card-details'>
        <p className='card-date'>Lorem, ipsum dolor.</p>
        <p className='card-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          molestias harum deleniti, exercitationem eligendi nam? At excepturi
          beatae nobis tenetur velit, atque provident consequatur exercitationem
          ipsum a doloremque quas doloribus!
        </p>
      </div>
      <div className='card-buttons flex'>
        <Link className='btn btn-1 ' to='' target='_blank'>
          Visit Online
        </Link>
        <Link className='btn' to='' target='_blank'>
          See Code
        </Link>
      </div>
    </div>
  );
};

export default Card;
