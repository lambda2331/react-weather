import React from 'react';
import {Container} from "@material-ui/core";
import AddCity from "./add-city/AddCity";
import styled from 'styled-components';
import SelectCity from './select-city/SelectCity';

const StyledContainer = styled(Container)`
  background: linear-gradient(120deg, rgba(50, 150, 100, 0.2), rgba(0, 0, 100, 0));
  height: 100vh;
`

const ButtonsContainer = styled.div`
  position: absolute;
  right: 40px;
  top: 20px;
  display: flex;
  
  > div:first-child {
    margin-right: 20px;
  }
`

const App: React.FC = () => {
  return (
      <StyledContainer maxWidth='xl'>
        <ButtonsContainer>
          <SelectCity />
          <AddCity />
        </ButtonsContainer>
      </StyledContainer>
  )
}
export default App
