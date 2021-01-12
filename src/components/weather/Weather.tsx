import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getCities, getWeatherInfo} from "../../store/cities/selectors";
import {RootState} from "../../store";
import {WeatherInfo} from "../../types/common";

const Weather: React.FC = () => {
  const cities = useSelector(getCities)
  const weather: WeatherInfo = useSelector<RootState, WeatherInfo>(state => getWeatherInfo(state, cities[0]))
  console.log(weather)


  return (
      <Container>
        { weather ? weather.description + ' ' + weather.name : '' }
      </Container>
  )
}

export default Weather