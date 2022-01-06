import React, { FC } from 'react';
import './Card.css';
import AnimalToBeDisplay from '../../assets/images';
import Star from '../../assets/svg/Star';
import { Link } from 'react-router-dom';
import { AnimalType } from '../../utils/types';

interface AnimalProps {
  animal: AnimalType;
}

const Card: FC<AnimalProps> = ({ animal }): JSX.Element => {
  return (
    <Link to={`product/${animal.slug}`} className='Card'>
      <img className='main-img' src={AnimalToBeDisplay[animal.image]} />
      <h4>{animal.title}</h4>
      <div className='card-start'>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div className='card-price'>
        <p>CAD $</p>
        <h4>{animal.price}</h4>
      </div>
      <div className='card-prime'>
        <span>prime</span> Free delivery by
        <span className='bold'> Tuesday 16</span>
      </div>
    </Link>
  );
};

export default Card;
