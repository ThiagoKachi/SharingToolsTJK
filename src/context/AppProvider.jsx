import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from './AppContext';
import { getPostsList, deletePostById, createPost } from '../services';

export function Provider({ children }) {
  const [userName, setUserName] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [getId, setGetId] = useState('');

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
      setIsLoading(true);
      const getPostsListFromApi = await getPostsList();
      setPostsList(getPostsListFromApi);
      setIsLoading(false);
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

  // Delete post
  const [modalIsOpen, setIsOpen] = useState(false);

  function getPostId(id) {
    setIsOpen(false);
    return postsList.map(
      (post) =>
        post.id === id &&
        deletePostById(id).then(() =>
          setPostsList((lastPosts) =>
            lastPosts.filter((posts) => posts.id !== id)
          )
        )
    );
  }

  function openModal(id) {
    setIsOpen(true);
    setGetId(id);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [addModal, setAddModal] = useState(false);

  function openAddToolModal() {
    setAddModal(true);
  }

  function closeAddToolModal() {
    setAddModal(false);
  }

  // Get input values
  const [toolName, setToolName] = useState('');
  const [toolLink, setToolLink] = useState('');
  const [toolDescription, setToolDescription] = useState('');
  const [toolTags, setToolTags] = useState([]);

  function mySubmitFunction(e) {
    e.preventDefault();
  }

  function createToolPost(title, link, description, tags) {
    createPost(title, link, description, tags).then((res) =>
      setPostsList((prevState) => [...prevState, res])
    );

    setAddModal(false);
    setToolName('');
    setToolLink('');
    setToolDescription('');
    setToolTags([]);
  }

  function verifyIfFieldsNotNull() {
    if (
      toolName.length === 0 ||
      toolLink.length === 0 ||
      toolDescription.length === 0 ||
      toolTags.length === 0
    ) {
      return true;
    }
    return false;
  }

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
    getPostId,
    isLoading,
    openModal,
    closeModal,
    modalIsOpen,
    getId,
    openAddToolModal,
    closeAddToolModal,
    addModal,
    mySubmitFunction,
    toolName,
    setToolName,
    toolLink,
    setToolLink,
    toolDescription,
    setToolDescription,
    toolTags,
    setToolTags,
    createToolPost,
    verifyIfFieldsNotNull,
  };

  return (
    <AppContext.Provider value={infosToShare}>{children}</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};
