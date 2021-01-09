import {createTransform} from "redux-persist";
import {CitiesStore} from "./index";

type CitiesStorePersist = Partial<CitiesStore>

export const citiesTransform = createTransform<CitiesStorePersist, CitiesStorePersist>(
    (inboundState, key) => {
      return { cities: inboundState.cities }
    },
    (outboundState, key, ...rest) => {
      return { ...outboundState, weather: {} }
    },
    { whitelist: ['cities'] }
)
