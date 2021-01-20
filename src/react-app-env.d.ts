/// <reference types="react-scripts" />

declare module 'redux-watch' {
  import watch from 'redux-watch'
  import { Watcher } from './types/common'

  export default watch as (obj: unknown, path: string) => Watcher
}
