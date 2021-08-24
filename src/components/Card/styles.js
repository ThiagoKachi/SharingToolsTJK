import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  padding: 20px 20px;
  color: black;
  margin-top: 40px;
  border-radius: 4px;
  border: 2px solid #68e4a8;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;

    a {
      font-size: 24px;
    }

    button {
      background: none;
      border: none;

      span {
        font-size: 18px;
        font-weight: 900;
      }
    }
  }

  p:nth-child(2) {
    margin-bottom: 12px;
  }

  p:nth-child(3) {
    font-weight: 700;
  }
`;
