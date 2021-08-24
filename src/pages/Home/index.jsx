import React from 'react';
import Header from '../../components/Header';

import { SearchBar } from '../../components/SearchBar';
import { Container } from './styles';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <p>
          Aqui estão algumas ferramentas e conteúdos que as pessoas acham que
          você precisa conhecer.
        </p>
        <p>
          Colabore adicionando conteúdos que você acha legal, e que acha que
          todos deveriam ver. 🚀
        </p>
      </Container>
      <SearchBar />
    </>
  );
}
