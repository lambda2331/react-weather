import {combineReducers} from "redux";
import cities from './cities/index'
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistConfig} from "redux-persist/es/types";
import {citiesTransform} from "./cities/persist-transform";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const rootReducer = combineReducers({
  cities
})

const persistConfig: PersistConfig<RootState> = {
  key: 'store',
  whitelist: ['cities'],
  storage,
  transforms: [citiesTransform],
  stateReconciler: autoMergeLevel2
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
})

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware, ...defaultMiddleware]
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export { store, persistor }