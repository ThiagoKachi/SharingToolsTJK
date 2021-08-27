import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function Button({ content, symbol, onClick }) {
  return (
    <Container onClick={onClick}>
      <span>{symbol}</span>
      {content}
    </Container>
  );
}

Button.propTypes = {
  content: PropTypes.string,
  symbol: PropTypes.string,
  onClick: PropTypes.func,
};
