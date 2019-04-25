import React from 'react'
import MainDataInputContainer from './styled/MainDataInputContainer'
import { TextField, Icon } from '@material-ui/core'
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers'
import MomentUtils from '@date-io/moment';
import InputLabel from './styled/InputLabel'

export default function MainDataInput(props) {
    const { name, setName, date, setDate, nameError, nameRef, setNameError } = props
    
    const width = {width: '70%'}
    const iconStyle = {color: 'black', fontSize: '4rem'}
    return (
        <MainDataInputContainer elevation={20} className='animated fadeInLeft slow'>
            <MuiPickersUtilsProvider utils={MomentUtils}>
       
                <InputLabel>
                    <Icon style={iconStyle}>title</Icon>
                    <TextField
                        inputRef={nameRef}
                        error={nameError}
                        label="Name of your event"
                        type="text"
                        name="event"
                        autoComplete="off"
                        margin="normal"
                        variant="outlined"
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                            setNameError(false)
                        }}
                        style={width}
                    />
                </InputLabel>
           


                <InputLabel>
                    <Icon style={iconStyle}>date_range</Icon>
                    <DatePicker
                        variant="outlined"
                        margin="normal"
                        disablePast
                        label="Event date"
                        value={date}
                        onChange={setDate}
                        style={width}
                    />
                </InputLabel>


                <InputLabel>
                    <Icon style={iconStyle}>access_time</Icon>
                    <TimePicker
                        variant="outlined"
                        margin="normal"
                        disablePast
                        label="Event time"
                        value={date}
                        onChange={setDate}
                        style={width}
                    />
                </InputLabel>
                
            </MuiPickersUtilsProvider>
        </MainDataInputContainer>
    )
}
