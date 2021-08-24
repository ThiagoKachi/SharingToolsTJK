import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function Button({ content, simbol }) {
  return (
    <Container>
      <span>{simbol}</span>
      {content}
    </Container>
  );
}

Button.propTypes = {
  content: PropTypes.string,
  simbol: PropTypes.string,
};
