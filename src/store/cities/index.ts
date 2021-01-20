import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  Cities,
  CitiesWeather,
  WeatherInfo
} from '../../types/common'
import { weatherApi } from '../../api/weather.api'

export type CitiesStore = {
  cities: Cities,
  weather: CitiesWeather,
  selectedCity: string | null
}

const initialState: CitiesStore = {
  cities: [],
  weather: [],
  selectedCity: null
}

const loadCitiesWeatherInfo = createAsyncThunk<Promise<WeatherInfo[] | Error>, string[]>('cities/loadCityWeatherInfo',
  async (cities, thunkAPI) => {
    try {
      const promises = cities.map((city) => weatherApi.getWeatherByCity(city))
      const results = await Promise.all(promises)

      return results
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message)
    }
  })

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity (state, action: PayloadAction<string>) {
      state.cities = Array.from(new Set([...state.cities, action.payload]))
    },
    removeCity (state, action: PayloadAction<string>) {
      state.cities = state.cities.filter((city) => city.toLocaleLowerCase() !== action.payload.toLocaleLowerCase())
      const needToRemoveWeather = state.weather.some((item) => item.name === action.payload)

      if (needToRemoveWeather) {
        state.weather = state.weather.filter((item) => item.name !== action.payload)
      }
    },
    selectCity (state, action: PayloadAction<string>) {
      console.log(action.payload)
      state.selectedCity = action.payload
    }
  },
  extraReducers: {
    // @ts-ignore logic to use extra reducers
    [loadCitiesWeatherInfo.fulfilled] (state, action: PayloadAction<WeatherInfo[]>) {
      state.weather = [...state.weather, ...action.payload]
    },
    // @ts-ignore logic to use extra reducers
    [loadCitiesWeatherInfo.rejected] (state, action: PayloadAction<string>) {
      state.cities = state.cities.filter((city) => city.toLocaleLowerCase() !== action.payload.toLocaleLowerCase())
    }
  }
})

const {
  addCity,
  removeCity,
  selectCity
} = citiesSlice.actions

export default citiesSlice.reducer
export {
  addCity,
  removeCity,
  selectCity,
  loadCitiesWeatherInfo
}
