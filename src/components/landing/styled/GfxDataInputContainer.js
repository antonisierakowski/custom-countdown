import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import { tabletQuery, mobileQuery } from '../../GlobalStyle'

const GfxDataInputContainer = styled(Paper)`
    &&& {
        border-radius: 2rem;
        height: 60%;
        width: 25%;
        

        @media (max-width: ${tabletQuery}) and (min-width: ${mobileQuery}) {
            width: 40%;
            margin: 0 1rem;
            
        }
        @media (max-width: ${mobileQuery}) {
            height: 40%;
            width: 90%;
        }
    }
`

export default GfxDataInputContainer