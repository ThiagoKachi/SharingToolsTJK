import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    max-width: 700px;
    padding: 10px;
    margin-top: 30px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    padding-left: 50px;

    background-image: url('https://image.flaticon.com/icons/png/512/622/622669.png');
    background-position: 10px 7px;
    background-repeat: no-repeat;
    background-size: 24px;
  }

  input:focus {
    box-shadow: 1px 0 5px 1px #68e4a8;
    outline: none;
  }
`;
