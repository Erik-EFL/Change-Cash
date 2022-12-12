import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;

  input {
    border: 1px solid #00B37E;
    width: 13em;
    height: 40px;
    padding: 0 1em;

    border-radius: 8px;
    transition: 0.2s;

  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #00B37E;

    width: 12em;
    height: 40px;
    text-align: center;
    border-radius: 8px;
    transition: 0.2s;

    &:hover {
      background: #00B37E;
      color: #fff;

      transition: 0.2s;
    }
  }
`;
