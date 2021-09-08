import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #1c1c1c;

  width: 120px;
  padding: 3px;
  font-size: 18px;
  font-weight: 700;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.99);
  }

  img {
    width: 22px;
    margin-right: 8px;
  }

  span {
    margin-right: 8px;
    font-size: 30px;
    color: #1c1c1c;
  }
`;
