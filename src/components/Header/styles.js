import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #202024;

  div {
    display: flex;
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
    color: white;
    border-radius: 50%;
    background: #1e4d41;
    border: 2px solid #68e4a8;
    box-shadow: 0 0 2px 0.8px #68e4a8;
  }

  h1 {
    font-size: 38px;
    font-weight: 700;
    color: #68e4a8;
    margin-left: 50px;
  }

  .name-logout {
    position: relative;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    padding-right: 0;
    margin-top: -8px;
  }

  span {
    position: absolute;
    font-size: 14px;
    cursor: pointer;
    color: #68e4a8;
    margin-top: -2px;
  }

  .content {
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .default-avatar {
    filter: invert(100%);
    width: 50px;
    border: none;
    box-shadow: none;
  }

  @media (max-width: 870px) {
    h1 {
      display: none;
    }
  }

  @media (max-width: 380px) {
    img {
      display: none;
    }
  }
`;
