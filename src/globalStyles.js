import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Mono', monospace;
    background: #121214;
    color: #ffffff;
  }

  .react-modal-overlay {
  background: rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.react-modal-content {
  width: 100%;
  height: 180px;
  max-width: 500px;
  background: rgb(245, 245, 245);
  position: relative;
  border-radius: 2px;
  margin-bottom: 230px;
  padding: 14px 30px;
}

.ReactModal__Content {
  opacity: 0;
  transform: translateY(-100px);
  transition: all 500ms ease-in-out;
}

.ReactModal__Content--after-open {
  opacity: 1;
  transform: translateY(0px);
}

.ReactModal__Content--before-close {
  opacity: 0;
  transform: translateY(-100px);
}
`;
