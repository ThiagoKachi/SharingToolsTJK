import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 36px;
    text-align: center;
    margin-top: 20%;
  }

  a {
    margin: 20px auto;
    padding: 8px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 22px;
    color: #68e4a8;

    border: 1px solid #68e4a8;
    width: 250px;

    transition: box-shadow 0.3s;
  }

  a:hover {
    box-shadow: 0px 0 5px 0.5px #68e4a8;
  }
`;
