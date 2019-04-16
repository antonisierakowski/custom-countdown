import styled from 'styled-components';
import { backgrounds } from '../../../GfxData'

const CountdownContainer = styled.div`
    font-size: 4rem;
    width: 100%;
    height: 100%;
    padding: 5rem 10rem;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: url(${props => backgrounds[props.bgIndex].url});
    background-size: cover;
    background-position: center center;
`

export default CountdownContainer