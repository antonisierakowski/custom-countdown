import styled from 'styled-components';
import { tabletQuery, mobileQuery } from '../../GlobalStyle'

const SubmitButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;

    @media (max-width: ${tabletQuery}) and (min-width: ${mobileQuery}) {
        align-self: auto;
    }
    @media (max-width: ${mobileQuery}) {
        align-self: auto;
    }
    
`

export default SubmitButtonsContainer