import React, { FC } from 'react';
import Card from '../Card/Card';
import { Container } from 'react-bootstrap';
import { AnimalType } from '../../utils/types';

interface AnimalProps {
  animals: AnimalType[];
}
const CardDisplay: FC<AnimalProps> = ({ animals }): JSX.Element => {
  return (
    <div className='card-display'>
      <Container className='card-display-container'>
        {animals.map((animal) => {
          return <Card key={animal.id} animal={animal} />;
        })}
      </Container>
    </div>
  );
};

export default CardDisplay;
