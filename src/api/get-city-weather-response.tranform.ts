import {AxiosResponse} from "axios";
import {WeatherInfo} from "../types/common";
import { get } from 'lodash'

export function transformGetCityWeatherResponse (response: AxiosResponse['data']): WeatherInfo {
  const parsedResponse = JSON.parse(response)
  const weatherInfo: Partial<WeatherInfo> = {}

  weatherInfo.date = parsedResponse.dt
  weatherInfo.name = parsedResponse.name
  weatherInfo.cod = parsedResponse.cod
  weatherInfo.description = get(parsedResponse.weather, '0.description')
  weatherInfo.humidity = parsedResponse.main.humidity
  weatherInfo.pressure = parsedResponse.main.pressure
  weatherInfo.temp = parsedResponse.main.temp
  weatherInfo.wind = parsedResponse.wind.speed


  return weatherInfo as WeatherInfo
}