import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    max-width: 543px;
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

  button {
    margin-top: 30px;
    margin-left: 20px;
  }

  label {
    font-size: 14px;
  }

  .checkbox {
    width: 20px;
    margin-right: 4px;
    margin-left: 4px;
  }

  .checkbox:checked,
  .checkbox:active,
  .checkbox:focus {
    border: none;
    box-shadow: none;
  }

  @media (max-width: 650px) {
    & {
      display: flex;
      flex-direction: column;
    }

    .checkbox {
      margin: 10px 0;
    }

    button {
      margin: 10px 0;
    }
  }
`;
