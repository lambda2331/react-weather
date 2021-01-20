import React from 'react'
import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getSelectedCity, getWeatherInfo } from '../../store/cities/selectors'
import { RootState } from '../../store'
import { WeatherInfo } from '../../types/common'
import CityName from './CityName'
import { weatherIconMapping } from './constant'
import WeatherInformation from './WeatherInfo'

const StyledContainer = styled(Container)`
  display: flex;
  padding: 0;
  padding-top: 120px;
  color: #889;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NoWeatherWrapper = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`

const Weather: React.FC = () => {
  const selectedCity: string = useSelector<RootState, string>(getSelectedCity)
  const weather: WeatherInfo = useSelector<RootState, WeatherInfo>((state) => getWeatherInfo(state, selectedCity))

  return (
    <StyledContainer maxWidth="sm">
      {
        weather ? (
          <Wrapper>
            <CityName name={weather.name} />
            <WeatherInformation weather={weather} />
            <img src={weatherIconMapping[weather.id]} alt="weather-icon" height={400} width={400} />
          </Wrapper>
        ) : (
          <NoWeatherWrapper>
            No weather information to display.
          </NoWeatherWrapper>
        )
       }

    </StyledContainer>
  )
}

export default Weather
