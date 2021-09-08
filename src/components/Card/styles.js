import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  padding: 10px 20px 5px 20px;
  color: black;
  margin-top: 20px;
  border-radius: 4px;
  border: 2px solid #68e4a8;

  &:first-child {
    margin-top: 20px;
  }

  &:last-child {
    margin-bottom: 20px;
  }

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
        color: #1c1c1c;
      }
    }
  }

  p:nth-child(2) {
    margin-bottom: 12px;
    color: #1c1c1c;
  }

  span:nth-child(2) {
    margin-bottom: 6px;
  }

  .tags-createdBy {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .created-by {
      font-size: 12px;
      font-weight: 600;
      margin-right: 14px;
    }
  }

  .tags {
    display: flex;
    flex-direction: row;
    font-weight: 700;
    color: #1c1c1c;
  }

  .tag {
    padding-right: 8px;
    margin-bottom: 4px;
  }
`;
