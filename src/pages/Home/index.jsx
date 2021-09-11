import React, { useContext } from 'react';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { Loader } from '../../components/Loader';
import { CardList } from '../../components/CardList';
import { AddPostModal } from '../../components/AddPostModal';

import { AppContext } from '../../context/AppContext';

export function Home() {
  const { isLoading, addModal } = useContext(AppContext);

  return (
    <>
      <Header />
      <Container>
        <p>
          Aqui estão algumas ferramentas e conteúdos que as pessoas acham que
          você precisa conhecer.
        </p>
        <p>
          Colabore adicionando conteúdos que você acha legal, e que queira
          compartilhar. 🚀
        </p>
      </Container>
      <SearchBar />
      {!isLoading ? <CardList /> : <Loader />}
      {addModal && <AddPostModal />}
    </>
  );
}
