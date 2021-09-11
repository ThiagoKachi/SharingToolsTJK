import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from './AppContext';

import { getPostsList, deletePostById, createPost } from '../services';

export function Provider({ children }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [redirectWithEmail, setRedirectWithEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [getId, setGetId] = useState('');

  // Set login button, true or false
  function setDisableButtonIsTrueOrFalse() {
    const validator = /^[A-Za-z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z_.]{2,7}$/;
    if (userName.length >= 1 && validator.test(userEmail)) {
      return true;
    }

    return false;
  }

  // Save username in localstorage when logging in
  function getUserName() {
    localStorage.setItem('userName', userName);
    setRedirectWithEmail(true);
  }

  // Get posts list homepage
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

  // Search logic
  const [searchPost, setSearchPost] = useState('');

  const lowerSearch = searchPost.toLowerCase();

  const filteredSearchByName = postsList.filter(({ title }) =>
    title.toLowerCase().includes(lowerSearch)
  );

  const filteredSearchByTags = postsList.filter(({ tags }) =>
    tags.find((tag) => tag.toLowerCase().includes(lowerSearch))
  );

  // Delete post(by id)
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

  // Modal logic
  const [addModal, setAddModal] = useState(false);

  function openModal(id) {
    setIsOpen(true);
    setGetId(id);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  // Create post
  function createToolPost(title, link, description, tags, user, email) {
    createPost(title, link, description, tags, user, email).then((res) =>
      setPostsList((prevState) => [...prevState, res])
    );

    setAddModal(false);
    setToolName('');
    setToolLink('');
    setToolDescription('');
    setToolTags([]);
  }

  // Verify if fields are not null
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

  // Sahre infos
  const infosToShare = {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    getUserName,
    redirectWithEmail,
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
