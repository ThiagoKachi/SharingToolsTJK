import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { Button } from '../Button';
import { AppContext } from '../../context/AppContext';
import { DeleteModal } from '../../components/DeleteModal';

export function Card({ post, idPost }) {
  const { modalIsOpen, openModal } = useContext(AppContext);

  const userName = localStorage.getItem('userName');

  return (
    <Container>
      <div className="content">
        <a href={post.link}>{post.title}</a>
        {post.user === userName || userName === 'Thiago Kachi' ? (
          <Button
            symbol="X"
            content="remove"
            onClick={() => openModal(idPost)}
          />
        ) : (
          ''
        )}
      </div>
      <p>{post.description}</p>
      <p className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </p>
      {modalIsOpen && <DeleteModal />}
    </Container>
  );
}

Card.propTypes = {
  post: PropTypes.object,
  idPost: PropTypes.string,
};
