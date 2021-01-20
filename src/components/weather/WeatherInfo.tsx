import React from 'react'
import styled from 'styled-components'
import { capitalize } from 'lodash'
import { WeatherInfo } from '../../types/common'

type WeatherInfoProps = {
  weather: WeatherInfo
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

const Temperature = styled.div`
  font-size: 6rem;

  span {
    font-size: 18px;
    line-height: 50px;
    vertical-align: top;
    margin-left: 2px;
  }
`

const DateWrapper = styled.div`
  font-weight: bold;
  font-weight: 1.5rem;
`

const WeatherDescription = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const WeatherInformation: React.FC<WeatherInfoProps> = ({ weather }: WeatherInfoProps) => {
  const date = new Date(weather.date).toLocaleDateString('en-US', { weekday: 'long', day: '2-digit', month: 'long' })
  return (
    <Wrapper>
      <Temperature>
        { weather.temp.toFixed(0) }
        <span>c</span>
      </Temperature>
      <InfoWrapper>
        <DateWrapper>{ date }</DateWrapper>
        <WeatherDescription>{ capitalize(weather.description) }</WeatherDescription>
      </InfoWrapper>
    </Wrapper>
  )
}

export default WeatherInformation
