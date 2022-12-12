import styled from 'styled-components';

export const SideBar = styled.aside`
  width: 300px;
  height: 100%;
  border-radius: 8px;
  background-color: #202024;
  position: relative;

  h1 {
    text-align: center;
  }

  h1 {
    margin-top: 10px;
  }

  h1 + h1 {
    margin-bottom: 40px;
    margin-top: 0px;
  }

  .logout {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #00B37E;
    background-color: transparent;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #00B37E;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #00B37E;
      color: #202024;
      transition: 0.3s;
    }
  }


`;

export const UserInfo = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;

  div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #00B37E;
    background-color: transparent;
    color: #00B37E;
  }
`;

export const Capa = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fcfcfc;
  border-radius: 8px 8px 0 0;
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;


  img {
    width: 40%;
    border: 6px solid #00B37E;
    border-radius: 50%;
    position: absolute;
    top: 20px;
  }
`;
