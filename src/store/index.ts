import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistConfig } from 'redux-persist/es/types'
import cities from './cities/index'
import { citiesTransform } from './cities/persist-transform'
import { citiesWatcher } from './cities/cities-watcher'

// Combine reducers
const rootReducer = combineReducers({
  cities
})

// Configure store persist
const persistConfig: PersistConfig<RootState> = {
  key: 'store',
  whitelist: ['cities'],
  storage,
  transforms: [citiesTransform]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
})

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware, ...defaultMiddleware]
})

const persistor = persistStore(store)

// Add watcher
let currentState!: RootState

function storeListenerCallback () {
  const previousState = currentState
  currentState = store.getState()

  // Init watchers
  citiesWatcher(store, previousState, currentState)
}

store.subscribe(storeListenerCallback)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export { store, persistor }
