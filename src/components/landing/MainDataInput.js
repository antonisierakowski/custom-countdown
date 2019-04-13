import React from 'react'
import MainDataInputContainer from './styled/MainDataInputContainer'
import TextField from '@material-ui/core/TextField'

export default function MainDataInput(props) {
    return (
        <MainDataInputContainer>

            {/* name input */}
            <TextField
                label="Name of the event"
                type="text"
                name="event"
                autoComplete="off"
                margin="normal"
                variant="outlined"
            />

            {/* date picker */}
            <TextField
                label="Event date"
                type="datetime-local"
                // defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </MainDataInputContainer>
    )
}
