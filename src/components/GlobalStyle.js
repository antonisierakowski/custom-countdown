import { createGlobalStyle } from 'styled-components'
import bg1 from '../img/landing-backgrounds/LANDING1.jpg'
import bg2 from '../img/landing-backgrounds/LANDING2.jpg'
import bg3 from '../img/landing-backgrounds/LANDING3.jpg'
import bg4 from '../img/landing-backgrounds/LANDING4.jpg'

const backgrounds = [bg1, bg2, bg3, bg4]

export const tabletQuery = '992px'
export const mobileQuery = '567px'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100vh;
        @media (max-width: ${mobileQuery}) { height: 150vh; }
        @media (max-height: 400px) and (orientation: landscape) { height: 150vh; }
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
        background: url(${backgrounds[Math.floor(Math.random() * (backgrounds.length - 1))]});
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