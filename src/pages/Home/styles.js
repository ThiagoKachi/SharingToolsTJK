import styled from 'styled-components';

export const Container = styled.div`
  p {
    text-align: center;
  }

  p:nth-child(1) {
    margin-top: 30px;
    font-size: 22px;
  }

  p:nth-child(2) {
    margin-top: 14px;
    font-size: 18px;
  }

  @media (max-width: 890px) {
    & {
      margin: 0 50px;
    }
  }

  @media (max-width: 600px) {
    p:nth-child(1) {
      font-size: 16px;
    }

    p:nth-child(2) {
      font-size: 14px;
    }
  }
`;
