import { createGlobalStyle } from 'styled-components'

export const tabletQuery = '992px'
export const mobileQuery = '567px'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        transition: 0.2s;
    }

    html {
        min-height: 100%;
        width: 100vw;
        color: white;
        font-size: 50%;
        @media (max-width: ${tabletQuery}) and (min-width: ${mobileQuery}) { font-size: 45%; }
        @media (max-width: ${mobileQuery}) { font-size: 40% }
        font-family: 'Ubuntu Condensed', sans-serif;
    }
    
    body {
        height: 100%;
        width: 100%;
        margin: 0;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

export default GlobalStyle;