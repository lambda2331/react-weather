import React, {useEffect} from 'react';
import {weatherApi} from "../api/weather.api";
import {Container, TextField} from "@material-ui/core";
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 40px;
  display: flex;
  justify-content: center;
`

const Input = styled(TextField)`
  width: 20rem;
`

const App: React.FC = () => {

  useEffect(() => {
    weatherApi.getWeatherByCity('Minsk')
  }, [])

  return (
      <Container maxWidth='xl'>
        <Wrapper>
          <Input id="outlined-basic" label="City name" variant="outlined" color="primary" />
        </Wrapper>
      </Container>
  )
}
export default App
