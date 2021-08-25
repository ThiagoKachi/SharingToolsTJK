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

  const infosToShare = {
    userName,
    setUserName,
    getUserName,
    redirect,
    setDisableButtonIsTrueOrFalse,
    postsList,
  };

  return (
    <AppContext.Provider value={infosToShare}>{children}</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};
