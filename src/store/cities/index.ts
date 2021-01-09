import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Cities, WeatherInfo} from "../../types/common";
import {weatherApi} from "../../api/weather.api";

export type CitiesStore = {
  cities: Cities,
  weather: { [key: string]: WeatherInfo }
}

const initialState: CitiesStore = {
  cities: [],
  weather: {}
}


const loadCitiesWeatherInfo = createAsyncThunk<Promise<void>, string[]>('cities/loadCityWeatherInfo',
    async (cities, thunkAPI) => {
      const promises = cities.map(city => weatherApi.getWeatherByCity(city))
      const results = await Promise.all(promises)

      return results.map(result => result.data)
          .reduce((obj, data) => {
            obj[data.name] = data
            return obj
          }, {})
    })

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity (state, action) {
      state.cities = Array.from(new Set([...state.cities, action.payload]))
      return state
    },
    removeCity (state, action) {
      state.cities = state.cities.filter(city => city.toLocaleLowerCase() !== action.payload.toLocaleLowerCase())

      if (action.payload in state.weather) {
        delete state.weather[action.payload]
      }

      return state
    }
  },
  extraReducers: {
    // @ts-ignore
    [loadCitiesWeatherInfo.fulfilled] (state, action) {
      state.weather = { ...state.weather, ...action.payload }
      return
    }
  }
})

const { addCity, removeCity } = citiesSlice.actions

export default citiesSlice.reducer
export { addCity, removeCity, loadCitiesWeatherInfo }