import {createSelector} from "reselect";
import {RootState} from "../index";
import {capitalize} from "lodash";
import {WeatherInfo} from "../../types/common";

export const getCities = createSelector<RootState, string[], string[]>(
    state => state.cities.cities,
    cities => cities.map(city => capitalize(city))
)
export const getWeatherInfo = createSelector<RootState, string, WeatherInfo, WeatherInfo>(
    (state, city) => state.cities.weather[city],
    weather => weather
)