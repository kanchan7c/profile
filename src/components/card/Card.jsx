import React from 'react';
import './card.scss';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Card = ({ title, description, image, visit, code, date }) => {
  return (
    <div className='card flex flex-col'>
      <div className='card-img'>
        <img src={image} alt={title} />
      </div>
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
      <div className='card-details'>
        <p className='card-date'>{date}</p>
        <p className='card-description'>{description}</p>
      </div>
      <div className='card-buttons flex'>
        {visit ? (
          <a
            className='btn btn-1 '
            href={visit}
            target='_blank'
            rel='noreferrer'
          >
            Visit Online <KeyboardDoubleArrowRightIcon />
          </a>
        ) : (
          ''
        )}
        {code ? (
          <a className='btn btn-2' href={code} target='_blank' rel='noreferrer'>
            See Code <KeyboardDoubleArrowRightIcon />
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Card;
