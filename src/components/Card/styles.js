import styled from 'styled-components';

export const Container = styled.div`
  background: #202024;
  color: whitesmoke;
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  padding: 10px 20px 5px 20px;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 2px 10px 1px rgba(104, 228, 168, 0.2);
  transition: transform 0.2s;

  &:first-child {
    margin-top: 20px;
  }

  &:last-child {
    margin-bottom: 20px;
  }

  &:hover {
    transform: scale(1.01);
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;

    a {
      font-size: 24px;
      color: #68e4a8;
    }

    button {
      background: none;
      border: none;
      color: whitesmoke;
      letter-spacing: 0.6px;

      img {
        filter: invert(100%);
      }

      span {
        font-size: 18px;
        font-weight: 900;
      }
    }
  }

  p:nth-child(2) {
    margin-bottom: 12px;
  }

  .description {
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
  }

  .tag {
    padding-right: 8px;
    margin-bottom: 4px;
  }
`;
