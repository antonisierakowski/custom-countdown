import styled from 'styled-components';
import Card from '@material-ui/core/Card'

const MainDataInputContainer = styled(Card)`
    &&& {
        border-radius: 2rem;
        height: 60%;
        width: 25%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

/* 
        div {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            /* align-items: center; */
        /* }  */
    }
`

export default MainDataInputContainer