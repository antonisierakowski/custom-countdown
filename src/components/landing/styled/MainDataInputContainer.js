import styled from 'styled-components';
import Card from '@material-ui/core/Card'
import { tabletQuery, mobileQuery } from '../../GlobalStyle'

const MainDataInputContainer = styled(Card)`
    &&& {
        border-radius: 2rem;
        height: 60%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        @media (max-width: ${tabletQuery}) and (min-width: ${mobileQuery}) {
            width: 40%;
            margin: 0 1rem;
            overflow: scroll;
        }
        @media (max-width: ${mobileQuery}) {
            height: 30%;
            width: 90%;
        }
    }
`

export default MainDataInputContainer