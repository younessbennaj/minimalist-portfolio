import { createGlobalStyle } from 'styled-components'

import { normalizeCSS } from './styles/normalize'

export const GlobalStyle = createGlobalStyle`
   ${normalizeCSS}

   * {
    @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;700&family=Public+Sans&display=swap');
   }

   body {
    font-family: 'Public Sans', sans-serif;
   }

   h1, h2, h3 {
    font-family: 'Ibarra Real Nova', serif;
   }

 `
