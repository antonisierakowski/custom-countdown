import styled from 'styled-components';
import { tabletQuery, mobileQuery } from '../../GlobalStyle'

const LandingPageContainer = styled.div`
    font-size: 4rem;
    width: 100%;
    height: 100%;
    padding: 5rem 10rem;
    @media (max-width: ${tabletQuery}) and (min-width: ${mobileQuery}) {
        padding: 5rem 2rem;
    }
    @media (max-width: ${mobileQuery}) {
        padding: 5rem 2rem;
    }
`

export default LandingPageContainer