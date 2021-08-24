import React from 'react';

import { Container } from './styles';

export function SearchBar() {
  return (
    <Container>
      <input type="text" placeholder="Digite sua busca..." />
    </Container>
  );
}
