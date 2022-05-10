import { createGlobalStyle } from 'styled-components'

import { normalizeCSS } from './styles/normalize'

export const GlobalStyle = createGlobalStyle`
   ${normalizeCSS}
 `
