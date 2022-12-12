import styled from 'styled-components';

export const NavMenu = styled.header`
  color: #00B37E;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .saldo {
    margin-right: 5px;
  }

  button{
    text-decoration: none;
    color: #00B37E;
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 0.9em;
    cursor: pointer;
  }

  .transfer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #00B37E;
    width: 12em;
    height: 40px;
    text-align: center;
    list-style: none;
    border-radius: 8px;
    transition: 0.2s;

    &:hover {
      background: #00B37E;
      color: #fff;
    }
  }

  input {
    display: flex;
    flex-direction: row;
    border: 1px solid #00B37E;
    width: 13em;
    height: 40px;
    padding: 0 1em;
    border-radius: 8px;
    transition: 0.2s;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 20px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #00B37E;
    width: 12em;
    height: 40px;
    text-align: center;
    list-style: none;
    border-radius: 8px;
    transition: 0.2s;
  }
`;
