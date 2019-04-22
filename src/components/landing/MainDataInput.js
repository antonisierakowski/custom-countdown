import React from 'react'
import MainDataInputContainer from './styled/MainDataInputContainer'
import { TextField, Divider, List } from '@material-ui/core'
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers'
import MomentUtils from '@date-io/moment';

export default function MainDataInput(props) {
    const { name, setName, date, setDate } = props

    const width = {width: '75%'}

    return (
        <MainDataInputContainer elevation={20}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                {/* name input */}
                
                <TextField
                    label="Name of your event"
                    type="text"
                    name="event"
                    autoComplete="off"
                    margin="normal"
                    variant="outlined"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={width}
                />

                {/* <li><Divider fullWidth/></li> */}

                {/* date and time inputs */}
                <DatePicker
                    variant="outlined"
                    margin="normal"
                    disablePast
                    label="Event date"
                    value={date}
                    onChange={setDate}
                    style={width}
                />

                {/* <li><Divider fullWidth/></li> */}

                <TimePicker
                    variant="outlined"
                    margin="normal"
                    disablePast
                    label="Event time"
                    value={date}
                    onChange={setDate}
                    style={width}
                />
                
            </MuiPickersUtilsProvider>
        </MainDataInputContainer>
    )
}
