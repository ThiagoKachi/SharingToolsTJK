import React from 'react';
import ContentLoader from 'react-content-loader';

import { Container } from './styles';

export function Loader(props) {
  return (
    <Container>
      <ContentLoader
        speed={3}
        width={1400}
        height={480}
        viewBox="0 0 1400 480"
        backgroundColor="#121214"
        foregroundColor="#292929"
        backgroundOpacity="0"
        {...props}
      >
        <rect x="21.5%" y="5" rx="4" ry="4" width="840" height="130" />
        <rect x="21.5%" y="150" rx="4" ry="4" width="840" height="130" />
        <rect x="21.5%" y="300" rx="4" ry="4" width="840" height="130" />
        <rect x="21.5%" y="450" rx="4" ry="4" width="840" height="130" />
      </ContentLoader>
    </Container>
  );
}
