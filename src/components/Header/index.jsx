import React, { useContext } from 'react';

import userImg from '../../assets/user.png';

import { Container } from './styles';

import { AuthContext } from '../../context/AppContext';

import { signOut } from '../../services/googleAuth';

export function Header() {
  const { googleAuth } = useContext(AuthContext);

  if (googleAuth) {
    localStorage.setItem('userNameAuth', googleAuth.name);
    localStorage.setItem('userAvatarAuth', googleAuth.avatar);
    localStorage.setItem('userEmailAuth', googleAuth.email);
  }

  const userName = localStorage.getItem('userName');

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
