import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Container } from './styles';

import { Card } from '../Card';

export function CardList() {
  const { filteredSearchByName, filteredSearchByTags } = useContext(AppContext);

  const checkedTest = document.getElementById('checkedOrNot');

  return filteredSearchByName.length === 0 ||
    filteredSearchByTags.length === 0 ? (
    <Container className="no-results">Nada cadastrado por aqui...</Container>
  ) : (
    <>
      {checkedTest.checked
        ? filteredSearchByTags.map((post) => (
            <Card post={post} key={post.id} idPost={post.id} />
          ))
        : filteredSearchByName.map((post) => (
            <Card post={post} key={post.id} idPost={post.id} />
          ))}
    </>
  );
}
