import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { Container } from './styles';

import userImg from '../../assets/user.png';
import { signOut } from '../../services/Api';

function Header() {
  const { googleAuth, userName } = useContext(AppContext);

  if (googleAuth) {
    localStorage.setItem('userNameAuth', googleAuth.name);
    localStorage.setItem('userAvatarAuth', googleAuth.avatar);
    localStorage.setItem('userEmailAuth', googleAuth.email);
  }

  function logoutNotAuth() {
    window.location.href = '/';
    localStorage.removeItem('userName');
  }

  return (
    <Container>
      {googleAuth ? (
        <div>
          <img src={googleAuth.avatar} alt="Foto do usuario" />
          <h1>SharingToolsTJK</h1>
          <div className="name-logout">
            {googleAuth.name}
            <p className="content">
              <span onClick={signOut}>Sair</span>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <img className="default-avatar" src={userImg} alt="Foto do usuario" />
          <h1>SharingToolsTJK</h1>
          <div className="name-logout">
            {userName}
            <p className="content">
              <span onClick={() => logoutNotAuth()}>Sair</span>
            </p>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Header;
