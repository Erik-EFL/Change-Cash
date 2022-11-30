import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CardRegister = styled.div`
  background: #fff;
  color: #000;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #ccc ;
  border-radius: 5px;

  max-width: 400px;
  width: 300px;
  height: 450px;

  padding: 20px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .input-login {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  button {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0.8rem;
    border-radius: 4px;
    border: none;
    width: 100%;
    cursor: pointer;
    background: #0c0c0c;
  }

  button:disabled {
    background: #0c0c0cbb;
    cursor: not-allowed;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: rgb(11, 28, 255);
    text-decoration: none;
  }
`;

export const Input = styled(TextField)`
  width: 100%;
`;
