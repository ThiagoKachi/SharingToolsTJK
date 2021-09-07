import React from 'react';

import { Container } from './styles';

function Header() {
  const userName = localStorage.getItem('userName');

  return (
    <Container>
      <div>
        {/* <img src={userImg} alt="Foto do usuario" /> */}
        <h2>{userName.substr(0, 1)}</h2>
        <h1>SharingToolsTJK</h1>
        <p>{userName}</p>
      </div>
    </Container>
  );
}

export default Header;
