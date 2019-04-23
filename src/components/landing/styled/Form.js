import styled from 'styled-components'
import { tabletQuery, mobileQuery } from '../../GlobalStyle'

const Form = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: ${tabletQuery}) and (min-width: ${mobileQuery}) {
        
    }
    @media (max-width: ${mobileQuery}) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

export default Form;