import styled from 'styled-components';

export const Container = styled.div`
  color: #1c1c1c;

  p:nth-child(1) {
    font-size: 20px;

    span {
      font-size: 22px;
      font-weight: 900;
    }
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 24px;
    font-size: 18px;
  }

  button {
    padding: 8px 40px;
    border: 2px solid #1c1c1c;
    border-radius: 2px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:nth-child(3) {
    margin-right: 10px;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:active {
    transform: scale(0.99);
  }
`;
