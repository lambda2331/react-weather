import axios, {AxiosRequestConfig, AxiosResponse} from "axios"
import {WeatherURLQueryParams} from "../types/api"
import {transformGetCityWeatherResponse} from "./get-city-weather-response.tranform";
import {WeatherUnitsType} from "../types/enum";

const apiKey = process.env["REACT_APP_OPEN_WEATHER_MAP_API_KEY"]

const httpClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})

const urlQuerySeparator = '&'

const generateURLQuery = (params: WeatherURLQueryParams): string => {
  const queryData = Object.entries(params).reduce((settings, [key, value]) => {
    settings.push(`${key}=${value}`)
    return settings
  }, [] as string[]).join(urlQuerySeparator)

  return queryData + `&appid=${apiKey}`
}

export const weatherApi = {
  getWeatherByCity (city: string): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      transformResponse: transformGetCityWeatherResponse
    }
    const urlQuery = generateURLQuery({ q: city, units: WeatherUnitsType.Metric })

    return httpClient.get(`weather?${urlQuery}`, config)
  }
}