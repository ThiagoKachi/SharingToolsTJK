import React, { useContext } from 'react';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { AppContext } from '../../context/AppContext';

export function SearchBar() {
  const { setSearchPost, searchPost } = useContext(AppContext);

  return (
    <Container>
      <input
        type="text"
        value={searchPost}
        placeholder="Digite sua busca..."
        onChange={(e) => setSearchPost(e.target.value)}
      />
      <label htmlFor="checkedOrNot">
        <input type="checkbox" id="checkedOrNot" className="checkbox" />
        Buscar por tags
      </label>
      <Button symbol="+" content="Add" />
    </Container>
  );
}
