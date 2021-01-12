/// <reference types="react-scripts" />

declare module 'styled-components' {
  import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
  export default styled
  export { ThemeProvider, createGlobalStyle }
}

declare module 'redux-watch' {
  import watch from 'redux-watch'

  export default watch
}