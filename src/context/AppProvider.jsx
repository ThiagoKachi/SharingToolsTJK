import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from './AppContext';
import { getPostsList } from '../services';

export function Provider({ children }) {
  const [userName, setUserName] = useState('');
  const [redirect, setRedirect] = useState(false);

  function setDisableButtonIsTrueOrFalse() {
    if (userName.length >= 1) {
      return false;
    }

    return true;
  }

  function getUserName() {
    localStorage.setItem('userName', userName);
    setRedirect(true);
  }

  // Posts List Homepage
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    async function getPostList() {
      const getPostsListFromApi = await getPostsList();
      setPostsList(getPostsListFromApi);
    }

    getPostList();
  }, []);

  // SearchBar
  const [searchPost, setSearchPost] = useState('');

  const lowerSearch = searchPost.toLowerCase();

  const filteredSearchByName = postsList.filter(({ title }) =>
    title.toLowerCase().includes(lowerSearch)
  );

  const filteredSearchByTags = postsList.filter(({ tags }) =>
    tags.find((tag) => tag.toLowerCase().includes(lowerSearch))
  );

  const infosToShare = {
    userName,
    setUserName,
    getUserName,
    redirect,
    setDisableButtonIsTrueOrFalse,
    postsList,
    searchPost,
    setSearchPost,
    filteredSearchByName,
    filteredSearchByTags,
  };

  return (
    <AppContext.Provider value={infosToShare}>{children}</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};
