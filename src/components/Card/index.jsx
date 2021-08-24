import React from 'react';

import { Container } from './styles';
import { Button } from '../Button';

export function Card() {
  return (
    <Container>
      <div className="content">
        <a href="#">Nome do app</a>
        <Button symbol="X" content="remove" />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        accusamus excepturi eveniet? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit.
      </p>
      <p>#tags #tags #tags #tags</p>
    </Container>
  );
}
