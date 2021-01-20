import { WeatherType } from './enum'

export type Watcher = (callback: unknown) => () => void

export type Cities = string[]

export type CitiesWeather = WeatherInfo[]

export interface WeatherInfo {
  name: string,
  temp: number,
  humidity: number,
  pressure: number,
  date: number,
  wind: number,
  description: string,
  id: WeatherType
}

export interface WeatherInfoDTO {
  name: string,
  weather: Array<{ description: string, icon: string }>,
  main: {
    humidity: number,
    temp: number,
    pressure: number
  },
  wind: {
    speed: number
  }
}

export type WeatherIconMapping = {
  [key: string]: string
}
