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
        font-size: 50%;
        font-family: 'Ubuntu Condensed', sans-serif;
    }
    
    body {
        height: 100vh;
        width: 100vw;
        margin: 0;
        background: url(${LandingBackground});
        background-position: center center;
        /* background-size: 18rem; */
        background-size: cover;
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