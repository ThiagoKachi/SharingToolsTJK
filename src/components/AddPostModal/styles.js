import styled from 'styled-components';

export const Container = styled.div`
  color: #1c1c1c;
  padding: 20px;
  border: 2px solid #1c1c1c;
  border-radius: 3px;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    span {
      font-weight: 900;
      font-size: 40px;
      margin-right: 10px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 18px;
    }

    input {
      display: block;
      margin-top: 6px;
      width: 100%;
      padding: 6px 6px;
      font-size: 16px;
      border-radius: 4px;
      border: 2px solid #1c1c1c;
    }

    input:focus {
      box-shadow: 0px 0 2px 1px #68e4a8;
      outline: none;
      border: 2px solid #68e4a8;
    }

    input::placeholder {
      font-family: monospace;
    }

    textarea {
      display: block;
      width: 100%;
      height: 100px;
      padding: 6px;
      font-size: 16px;
      border-radius: 4px;
      border: 2px solid #1c1c1c;
      resize: none;
    }

    textarea:focus {
      box-shadow: 0px 0 2px 1px #68e4a8;
      outline: none;
      border: 2px solid #68e4a8;
    }
  }

  button {
    padding: 8px;
    border: 2px solid #1c1c1c;
    border-radius: 4px;
    transition: filter 0.2s;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 5px 5px 2px 1px #1c1c1c;
    margin-top: 20px;
  }

  button:disabled {
    filter: brightness(0.3);
    cursor: not-allowed;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:active {
    transform: scale(0.99);
  }
`;
