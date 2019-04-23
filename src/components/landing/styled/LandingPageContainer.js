import styled from 'styled-components';
import bg1 from '../../../img/landing-backgrounds/LANDING1.jpg'
import bg2 from '../../../img/landing-backgrounds/LANDING2.jpg'
import bg3 from '../../../img/landing-backgrounds/LANDING3.jpg'
import bg4 from '../../../img/landing-backgrounds/LANDING4.jpg'
import { tabletQuery, mobileQuery } from '../../GlobalStyle'
const backgrounds = [bg1, bg2, bg3, bg4]


const LandingPageContainer = styled.div`
    font-size: 4rem;
    width: 100%;
    height: 100%;
    padding: 5rem 10rem;
    background: url(${backgrounds[Math.floor(Math.random() * (backgrounds.length))]});
    background-position: center center;
    background-size: cover;
    @media (max-width: ${tabletQuery}) and (min-width: ${mobileQuery}) {
        padding: 5rem 2rem;
    }
    @media (max-width: ${mobileQuery}) {
        padding: 5rem 2rem;
    }

    height: 100vh;
    @media (max-width: ${mobileQuery}) { height: 150vh; }
    @media (max-height: 400px) and (orientation: landscape) { height: 150vh; }
`

export default LandingPageContainer