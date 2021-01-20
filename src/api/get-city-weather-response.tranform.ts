import { AxiosResponse } from 'axios'
import { get } from 'lodash'
import { WeatherInfo, WeatherInfoDTO } from '../types/common'
import { WeatherType } from '../types/enum'

export function transformGetCityWeatherResponse (response: AxiosResponse['data']): WeatherInfo {
  const parsedResponse = JSON.parse(response) as WeatherInfoDTO

  const weatherInfo: Partial<WeatherInfo> = {}
  const icon = get(parsedResponse.weather, '0.icon', '') as string

  weatherInfo.date = Date.now().valueOf()
  weatherInfo.name = parsedResponse.name
  weatherInfo.id = icon.replace(/\D/g, '') as WeatherType
  weatherInfo.description = get(parsedResponse.weather, '0.description') as string
  weatherInfo.humidity = parsedResponse.main.humidity
  weatherInfo.pressure = parsedResponse.main.pressure
  weatherInfo.temp = parsedResponse.main.temp
  weatherInfo.wind = parsedResponse.wind.speed

  return weatherInfo as WeatherInfo
}
