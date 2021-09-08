import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { Container } from './styles';

function Header() {
  const { googleAuth } = useContext(AppContext);

  if (googleAuth) {
    localStorage.setItem('userNameAuth', googleAuth.name);
    localStorage.setItem('userAvatarAuth', googleAuth.avatar);
  }

  const userName = localStorage.getItem('userName');

  return (
    <Container>
      {googleAuth ? (
        <div>
          <img src={googleAuth.avatar} alt="Foto do usuario" />
          <h1>SharingToolsTJK</h1>
          <p>{googleAuth.name}</p>
        </div>
      ) : (
        <div>
          <h2>{userName.substr(0, 1)}</h2>
          <h1>SharingToolsTJK</h1>
          <p>{userName}</p>
        </div>
      )}
    </Container>
  );
}

export default Header;
