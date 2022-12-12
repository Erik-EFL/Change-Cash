import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  max-height: 100vh;
  height: 90vh;
  display: grid;
  gap: 20px;
  align-self: center;
  justify-self: center;
  align-items: center;
  grid-template:
    'aside header header' auto
    'aside section section' 1fr
    / 1fr 1fr 2fr;
  ;

  header {
    grid-area: header;
  }
  aside {
    grid-area: aside;
  }
  section {
    grid-area: section;
  }
`;


