import React from 'react';

import { Container } from './styles';
import { Button } from '../../components/Button';

export function SearchBar() {
  return (
    <Container>
      <input type="text" placeholder="Digite sua busca..." />
      <Button symbol="+" content="Add" />
    </Container>
  );
}
