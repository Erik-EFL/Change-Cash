import styled from 'styled-components';

interface CardProps {
  colorCard?: string | boolean | undefined;
  valueColor?: string | boolean | undefined;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: #202024;
  border-radius: 8px;
  padding: 20px;
  max-height: 100%;
  height: 100%;
  overflow-y: auto;
  width: 100%;

  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 241, 254, 135, 0.1 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;

`;

export const filtersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 20px 0;

  button {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    text-align: center;
    border: 0;
    border-radius: 8px;
    background: #00B37E;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: #00b077E9;
      transition: background-color 0.2s;
    }
  }

  div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;

    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      label{
        font-size: 14px;
        margin-bottom: -10px;
        margin-top: -15px;
      }
    }
  }

  input {
    width: 100%;
    text-align: center;
    border: 0;
    border-radius: 8px;
    padding: 10px;
  }

  select {
    width: 100%;
    text-align: center;
    border: 0;
    border-radius: 8px;
    padding: 10px;
  }
`;

export const cardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  overflow-y: scroll;

  /* Works on Firefox */
  scrollbar-width: thin;
  scrollbar-color: blue orange;

  /* Works on Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #202024;
    border-radius: 20px;
    border: 1px solid #fff;
  }
`;

export const Card = styled.div<CardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient( 135deg, #EAEAEA 10%, #B2D0CE 100% );
  border-radius: 32px;
  padding: 5px;
  max-width: 300px;
  width: 180px;
  padding: 10px;
  height: 200px;
  color: #272A32;

  h5 {
    font-weight: 500;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 900;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const CardBody = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  margin: 8px 10px 8px 10px;
  font-weight: 900;

  .amount {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 900;
    font-size: 20px;
    color: ${props => props.valueColor ? '#00B37E' : '#FF0000'};
  }
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 06px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
`;
