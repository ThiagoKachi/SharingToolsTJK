import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function Button({ content, symbol }) {
  return (
    <Container>
      <span>{symbol}</span>
      {content}
    </Container>
  );
}

Button.propTypes = {
  content: PropTypes.string,
  symbol: PropTypes.string,
};
