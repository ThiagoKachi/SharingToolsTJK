import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #202024;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 50px;
  }

  img {
    width: 54px;
    border-radius: 50%;
    box-shadow: 0px 0 5px 0.5px #68e4a8;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #68e4a8;
  }

  p {
    font-size: 18px;
  }
`;
