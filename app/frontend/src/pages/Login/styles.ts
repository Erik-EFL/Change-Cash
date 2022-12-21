import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CardLogin = styled.div`
  background: #fff;
  color: #000;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;

  max-width: 400px;
  width: 300px;
  height: 400px;

  padding: 20px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 60px;
    text-align: center;
  }

  .input-login {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  button[type='submit'] {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0.8rem;
    border-radius: 4px;
    border: none;
    width: 100%;
    font-weight: bold;
    background: #0c0c0c;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: rgb(11, 28, 255);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 80vh;
  margin-right: 80px;

  display: flex;
  align-items: center;
  justify-content: right;
`;

export const Input = styled(TextField)`
  width: 100%;
`;
