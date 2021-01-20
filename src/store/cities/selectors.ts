import { createSelector } from 'reselect'
import { capitalize } from 'lodash'
import { RootState } from '../index'
import { WeatherInfo } from '../../types/common'

export const getCities = createSelector<RootState, string[], string[]>(
  (state) => state.cities.cities,
  (cities) => cities.map((city) => capitalize(city))
)

export const getWeatherInfo = createSelector<RootState, string, WeatherInfo, WeatherInfo>(
  (state, city) => state.cities.weather.find((item: WeatherInfo) => item.name === city) as WeatherInfo,
  (weather) => weather
)

export const getSelectedCity = createSelector<RootState, string, string>(
  (state) => state.cities.selectedCity as string,
  (selectedCity) => capitalize(selectedCity)
)
