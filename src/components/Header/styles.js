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

  h2 {
    width: 50px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    border: 2px solid #68e4a8;
    border-radius: 50%;
    background: whitesmoke;
    box-shadow: 0px 0 5px 0.5px #68e4a8;
    color: #202024;
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
