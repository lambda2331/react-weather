import {createSelector} from "reselect";
import {RootState} from "../index";
import {capitalize} from "lodash";

export const getCities = createSelector<RootState, string[], string[]>(
    state => state.cities.cities,
    cities => cities.map(city => capitalize(city))
)
export const getWeatherInfo = createSelector<RootState, unknown, unknown>(
    (state) => state.cities.weather,
    weather => weather
)