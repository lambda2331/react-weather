import { Store } from 'redux'
import { difference } from 'lodash'
import { CitiesStore, loadCitiesWeatherInfo, selectCity } from './index'

type CitiesState = {
  cities: CitiesStore
}

export function citiesWatcher (store: Store, previousState: CitiesState, currentState: CitiesState): void {
  const selectedCity = currentState.cities.selectedCity as string
  const citiesToUpload = difference(currentState.cities.cities, previousState ? previousState.cities.cities : [])
  const citiesToRemove = difference(previousState ? previousState.cities.cities : [], currentState.cities.cities)

  if (citiesToUpload.length === 0 && citiesToRemove.length === 0) {
    return
  }

  if (citiesToRemove.length !== 0 || !currentState.cities.cities.includes(selectedCity)) {
    console.log(currentState)
    const newSelectedCity = currentState.cities.cities[0]
    console.log('watcher select')
    store.dispatch(selectCity(newSelectedCity))
  }

  if (citiesToUpload.length !== 0) {
    // @ts-ignore dispatch async action
    store.dispatch(loadCitiesWeatherInfo(citiesToUpload))
  }
}
