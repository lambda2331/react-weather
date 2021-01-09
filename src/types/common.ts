export type Cities = string[]

export type CitiesWeather = {
  [key: string]: WeatherInfo
}


export interface WeatherInfo {
  name: string,
  temp: number,
  humidity: number,
  pressure: number,
  date: Date,
  wind: number,
  description: string,
  cod: number
}
