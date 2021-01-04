/// <reference types="react-scripts" />

declare module 'styled-components' {
  import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
  export default styled
  export { ThemeProvider, createGlobalStyle }
}
