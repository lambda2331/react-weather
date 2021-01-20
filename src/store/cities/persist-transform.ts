import { createTransform } from 'redux-persist'
import { CitiesStore } from './index'

type CitiesStorePersist = Partial<CitiesStore>

export const citiesTransform = createTransform<CitiesStorePersist, CitiesStorePersist>(
  (inboundState) => ({ cities: inboundState.cities, selectedCity: inboundState.selectedCity }),
  (outboundState) => ({ ...outboundState, weather: [] }),
  { whitelist: ['cities'] }
)
