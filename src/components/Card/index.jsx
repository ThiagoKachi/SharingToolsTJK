import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { Button } from '../Button';

export function Card({ post }) {
  return (
    <Container>
      <div className="content">
        <a href={post.link}>{post.title}</a>
        <Button symbol="X" content="remove" />
      </div>
      <p>{post.description}</p>
      <p className="tags">
        {post.tags.map((tag) => (
          <p key={tag} className="tag">
            #{tag}
          </p>
        ))}
      </p>
    </Container>
  );
}

Card.propTypes = {
  post: PropTypes.object,
};
