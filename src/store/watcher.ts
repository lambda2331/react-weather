import watch from 'redux-watch'
import {Store} from "redux";
import { difference } from 'lodash'
import {Cities} from "../types/common";
import {loadCitiesWeatherInfo} from "./cities";


export function initWatchers (store: Store) {
  const watcher = watch(store.getState, 'cities.cities')

  store.subscribe(watcher((newVal: Cities, oldVal: Cities) => {
    if (oldVal.length === 0) {
      store.dispatch<any>(loadCitiesWeatherInfo(newVal))
      return
    }

    const citiesToLoad = difference(oldVal, newVal)
    store.dispatch<any>(loadCitiesWeatherInfo(citiesToLoad))
  }))
}