import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {Button, Container, TextField} from "@material-ui/core";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {addCity, loadCitiesWeatherInfo} from "../store/cities";
import Weather from "./weather/Weather";
import {getCities, getWeatherInfo} from "../store/cities/selectors";

const Wrapper = styled.div`
  margin: 40px;
  display: flex;
  justify-content: center;
`

const Input = styled(TextField)`
  width: 20rem;
`

const App: React.FC = () => {
  const [cityName, setCityName] = useState('')
  const dispatch = useDispatch()
  const cities = useSelector(getCities)
  const weatherInfo = useSelector(getWeatherInfo)

  const handleCityNameUpdate = (event: ChangeEvent) => setCityName((event.target as HTMLInputElement).value)
  const saveCity = () => {
    dispatch(addCity(cityName))
    setCityName('')
  }

  const loadWeatherInfo = useCallback(() => dispatch(loadCitiesWeatherInfo(cities)), [dispatch, cities])

  useEffect(() => {
    loadWeatherInfo()
  }, [loadWeatherInfo])

  useEffect(() => {
    console.log(weatherInfo)
  }, [weatherInfo])

  return (
      <Container maxWidth='xl'>
        <Weather/>
        <Wrapper>
          <Input label="City name" variant="outlined" color="primary" value={cityName} onChange={handleCityNameUpdate}/>
          <Button variant="contained" color="primary" onClick={saveCity}>
            Add
          </Button>
        </Wrapper>
      </Container>
  )
}
export default App
