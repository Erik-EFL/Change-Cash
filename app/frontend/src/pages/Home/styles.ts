import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  height: 85vh;
  display: grid;
  gap: 40px;
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


