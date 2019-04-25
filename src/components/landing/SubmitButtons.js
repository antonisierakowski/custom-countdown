import React from 'react'
import SubmitButtonsContainer from './styled/SubmitButtonsContainer';
// import { Button } from '@material-ui/core/'
import CreateCountdownButton from './styled/CreateCountdownButton'

export default function SubmitButtons(props) {
    return (
        <SubmitButtonsContainer className='animated fadeInRight slow'>
            <CreateCountdownButton variant="contained" color="primary" type='submit' size='large'>
                Create countdown!
            </CreateCountdownButton>
        </SubmitButtonsContainer>
    )
}
