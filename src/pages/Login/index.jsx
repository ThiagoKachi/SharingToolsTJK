import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { Container } from './styles';

import googleLogo from '../../assets/google-logo.png';
import mainImg from '../../assets/mainImg.png';

import { AppContext, AuthContext } from '../../context/AppContext';

export function Login() {
  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    getUserName,
    setDisableButtonIsTrueOrFalse,
    redirectWithEmail,
  } = useContext(AppContext);

  const { actionLoginGoogle, redirect } = useContext(AuthContext);

  {
    if (redirect) {
      return <Redirect to="/home" />;
    }
  }

  {
    if (redirectWithEmail) {
      return <Redirect to="/home" />;
    }
  }

  return (
    <Container>
      <h1>
        Bem-vindo ao <span>SharingToolsTJK</span>
      </h1>
      <div className="content">
        <div className="image-main">
          <img src={mainImg} alt="Code Image" />
        </div>
        <div className="form">
          <p className="user-name">Insira seu nome e email</p>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="John Doe"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="john_doe123@gmail.com"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button
            className="normal-login"
            onClick={getUserName}
            disabled={!setDisableButtonIsTrueOrFalse()}
          >
            Entrar
          </button>
          <div className="or-styles">
            <span></span>
            <p>ou</p>
            <span></span>
          </div>
          <button className="login-google" onClick={actionLoginGoogle}>
            <img src={googleLogo} alt="Google Logo" />
            Login com Google
          </button>
        </div>
      </div>
    </Container>
  );
}
