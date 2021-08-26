import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { Card } from '../Card';

export function CardList() {
  const { filteredSearchByName, filteredSearchByTags } = useContext(AppContext);

  const checkedTest = document.getElementById('checkedOrNot');

  return (
    <>
      {checkedTest.checked
        ? filteredSearchByTags.map((post) => <Card post={post} key={post.id} />)
        : filteredSearchByName.map((post) => (
            <Card post={post} key={post.id} />
          ))}
    </>
  );
}
