import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export function NotFound() {
  return (
    <Container>
      <p>Página não Encontrada...</p>
      <Link to="/">Voltar a home</Link>
    </Container>
  );
}
