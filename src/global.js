import { createGlobalStyle, css } from 'styled-components'

import { normalizeCSS } from './styles/normalize'

const customReset = css`
  a {
    color: #000000;
    text-decoration: none;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }
`

export const GlobalStyle = createGlobalStyle`
   ${normalizeCSS}
   ${customReset}

   * {
    @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;700&family=Public+Sans&display=swap');
   }

   body {
    font-family: 'Public Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
   }

   h1, h2, h3 {
    font-family: 'Ibarra Real Nova', serif;
   }

   a {
      color: #000000;
      text-decoration: none;
   }

   ul {
     padding: 0;
   }

   li {
     list-style: none;
   }
 `
