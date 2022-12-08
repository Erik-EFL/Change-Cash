import styled from 'styled-components';

export const Header = styled.header`
  height: 80px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  cursor: pointer;

  h1 {
    font-size: 2rem;
    padding: 2px 0;
    font-weight: 900;

  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 20px;

  .button {
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;
    text-decoration: none;
    border: none;

    padding: 2px 16px;
    border-radius: 8px;
    transition: 0.2s;

    background: transparent;

    &:hover {
      color: #005744;
      transition: 0.2s;
    }
  }

  .active {
    color: #005744;
    font-weight: 900;
    font-size: 1.2rem;
  }

`;
