import styled from 'styled-components';

export const Container = styled.main`
  text-align: center;
  margin-top: 3%;

  h1 {
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;

    span {
      text-decoration: underline;
      font-weight: 700;
      color: #68e4a8;
    }
  }

  .content {
    display: flex;
    padding: 0 100px;

    .image-main {
      img {
        width: 80%;
        margin-right: 70px;
      }
    }

    .form {
      width: 100%;
      max-width: 650px;
      margin: 150px auto;

      .user-name {
        font-size: 28px;
        margin-bottom: 20px;
      }

      input {
        width: 100%;
        padding: 8px 12px;
        border-radius: 4px;
        border: none;
        font-size: 18px;
        color: #1c1c1c;
        margin-bottom: 14px;
      }

      input:focus {
        box-shadow: 1px 0 5px 1px #68e4a8;
        outline: none;
      }

      label {
        display: flex;
        margin-bottom: 3px;
        font-size: 14px;
      }

      .or-styles {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;

        p {
          padding: 0 10px;
          font-size: 18px;
        }

        span {
          background: whitesmoke;
          opacity: 0.2;
          height: 1px;
          width: 30%;
        }
      }
    }
  }

  .normal-login {
    margin-bottom: 12px;
    width: 100%;
    padding: 8px 8px;
    border-radius: 4px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    background: #68e4a8;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    transition: filter 0.2s;
  }

  .normal-login:disabled {
    background: lightgray;
    cursor: not-allowed;
  }

  .normal-login:hover {
    filter: brightness(0.9);
  }

  .login-google {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 10px 8px;
    border-radius: 4px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    background: white;
    color: black;
    transition: background 0.3s;

    img {
      width: 30px;
      margin-right: 20px;
    }
  }

  .login-google:hover {
    background: #f0fff0;
  }

  .login-google:active,
  .normal-login:active {
    transform: scale(0.99);
  }

  @media (max-width: 1200px) {
    .image-main {
      display: none;
    }
  }

  @media (max-width: 770px) {
    h1 {
      font-size: 34px;
    }
  }

  @media (max-width: 650px) {
    .content {
      padding: 30px;
    }
  }

  @media (max-width: 500px) {
    & {
      margin-top: 40px;
    }

    .content {
      margin: -50px 0;
    }
  }
`;
