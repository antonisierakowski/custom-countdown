import { createGlobalStyle } from 'styled-components'
import LandingBackground from '../img/backgrounds/LANDING.jpg'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100vh;
        width: 100vw;
        color: white;
        font-size: 62.5%;
        font-family: 'Assistant', sans-serif;
    }
    
    body {
        height: 100vh;
        width: 100vw;
        background: url(${LandingBackground});
        background-position: center center;
        background-size: 25rem;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`

export default GlobalStyle;