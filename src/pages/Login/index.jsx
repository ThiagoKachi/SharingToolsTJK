import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { Container } from './styles';

import githubLogo from '../../assets/github-white.svg';
import mainImg from '../../assets/mainImg.png';

import { AppContext } from '../../context/AppContext';

export function Login() {
  const {
    userName,
    setUserName,
    getUserName,
    setDisableButtonIsTrueOrFalse,
    redirect,
  } = useContext(AppContext);

  {
    if (redirect) {
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
          <p className="user-name">Insira seu nome</p>
          <input
            type="text"
            placeholder="John Doe"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="normal-login"
            onClick={getUserName}
            disabled={setDisableButtonIsTrueOrFalse()}
          >
            Entrar
          </button>
          <div className="or-styles">
            <span></span>
            <p>ou</p>
            <span></span>
          </div>
          <button className="login-github">
            <img src={githubLogo} alt="Github Logo" />
            Login com GitHub
          </button>
        </div>
      </div>
    </Container>
  );
}
