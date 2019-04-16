import React from 'react'
import SubmitButtonsContainer from './styled/SubmitButtonsContainer';
import { Button } from '@material-ui/core/'

export default function SubmitButtons(props) {
    return (
        <SubmitButtonsContainer>
            <Button variant="contained" color="primary" type='submit' size='large'>
                Create countdown!
            </Button>
        </SubmitButtonsContainer>
    )
}
