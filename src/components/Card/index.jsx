import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { Button } from '../Button';
import { AppContext } from '../../context/AppContext';

export function Card({ post, idPost }) {
  const { getPostId } = useContext(AppContext);

  return (
    <Container>
      <div className="content">
        <a href={post.link}>{post.title}</a>
        <Button symbol="X" content="remove" onClick={() => getPostId(idPost)} />
      </div>
      <p>{post.description}</p>
      <p className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </p>
    </Container>
  );
}

Card.propTypes = {
  post: PropTypes.object,
  idPost: PropTypes.number,
};
