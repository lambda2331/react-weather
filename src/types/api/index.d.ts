import { WeatherUnitsType } from "../enum"

export interface WeatherURLQueryParams {
  q?: string,
  lat?: number,
  lon?: number,
  zip?: number,
  mode?: string,
  units?: WeatherUnitsType,
  lang?: string
}