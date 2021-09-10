import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { Button } from '../Button';
import { AppContext } from '../../context/AppContext';
import { DeleteModal } from '../../components/DeleteModal';

import trashImg from '../../assets/trash.png';

export function Card({ post, idPost }) {
  const { modalIsOpen, openModal, userName, userEmail } =
    useContext(AppContext);

  const userNameAuth = localStorage.getItem('userNameAuth');
  const userEmailAuth = localStorage.getItem('userEmailAuth');

  return (
    <Container>
      <div className="content">
        <a href={post.link}>{post.title}</a>
        {(post.user === userName && post.email === userEmail) ||
        (post.user === userNameAuth && post.email === userEmailAuth) ? (
          <Button
            image={trashImg}
            content="remove"
            onClick={() => openModal(idPost)}
          />
        ) : (
          ''
        )}
      </div>
      <p className="description">{post.description}</p>
      <div className="tags-createdBy">
        <p className="tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </p>
        <p className="created-by">By: {post.user}</p>
      </div>
      {modalIsOpen && <DeleteModal />}
    </Container>
  );
}

Card.propTypes = {
  post: PropTypes.object,
  idPost: PropTypes.string,
};
