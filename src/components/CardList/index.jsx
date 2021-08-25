import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { Card } from '../Card';

export function CardList() {
  const { postsList } = useContext(AppContext);

  return (
    <>
      {postsList.map((post) => (
        <Card post={post} key={post.id} />
      ))}
    </>
  );
}
