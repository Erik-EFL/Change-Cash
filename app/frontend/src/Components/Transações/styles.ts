import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: #202024;
  border-radius: 8px;
  padding: 20px;
  max-height: 88%;
  overflow-y: auto;
  width: 97%;
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


export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #202024;
  border-radius: 8px;
  padding: 5px;
  border: 1px solid #fff;
  max-width: 300px;
  width: 170px;
  padding: 10px;
  height: 180px;

  h1 {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid #fff;
  margin-bottom: 5px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 10px 8px 10px;
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 06px;
  border-top: 1px solid #fff;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
`;
