import styled from 'styled-components';
import { backgrounds } from '../../../GfxData'
import { tabletQuery, mobileQuery } from '../../../GlobalStyle'

const CountdownContainer = styled.div`
    font-size: 4rem;
    width: 100%;
    height: 100vh;
    padding: 5rem 10rem;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: url(${props => backgrounds[props.bgIndex].url});
    background-size: cover;
    background-position: center center;
    @media (max-width: ${tabletQuery}) and (min-width: ${mobileQuery}) {
        padding: 6rem 3rem;
        height: 100%;
    }
    @media (max-width: ${mobileQuery}) {
        padding: 6rem 2rem;
        height: 100vh;
    }
`

export default CountdownContainer