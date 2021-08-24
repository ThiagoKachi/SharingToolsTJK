import React from 'react';

import { Container } from './styles';
import userImg from '../../assets/user.png';

function Header() {
  const userName = localStorage.getItem('userName');

  return (
    <Container>
      <div>
        <img src={userImg} alt="Foto do usuario" />
        <h1>SharingToolsTJK</h1>
        <p>{userName}</p>
      </div>
    </Container>
  );
}

export default Header;
