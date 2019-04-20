import React from 'react'
import MainDataInputContainer from './styled/MainDataInputContainer'
import { TextField, Divider, List } from '@material-ui/core'
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers'
import MomentUtils from '@date-io/moment';

export default function MainDataInput(props) {
    const { name, setName, date, setDate } = props

    return (
        <MainDataInputContainer>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <List >
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
                />

                <li><Divider fullWidth/></li>

                {/* date and time inputs */}
                <DatePicker
                    variant="outlined"
                    margin="normal"
                    disablePast
                    label="Event date"
                    value={date}
                    onChange={setDate}
                />

                <li><Divider fullWidth/></li>

                <TimePicker
                    variant="outlined"
                    margin="normal"
                    disablePast
                    label="Event time"
                    value={date}
                    onChange={setDate}
                />
                </List>
            </MuiPickersUtilsProvider>
        </MainDataInputContainer>
    )
}
