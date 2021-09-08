import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function Button({ content, symbol, onClick, image }) {
  return (
    <Container onClick={onClick}>
      <span>{symbol}</span>
      {image && <img src={image} alt="icons image" />}
      {content}
    </Container>
  );
}

Button.propTypes = {
  content: PropTypes.string,
  symbol: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
};
