import React from 'react'
import ActualCountdownContainer from './styled/ActualCountdownContainer'
import moment from 'moment'
import useTimeLeft from '../../hooks/useTimeLeft'

export default function ActualCountdown(props) {
    const eventDate = moment(props.date).valueOf();
    let currentTime = moment().valueOf()

    const { timeLeft } = useTimeLeft(eventDate, currentTime)

    return (
        <ActualCountdownContainer>
            {/* {setInterval(() => {
                return moment(eventDate) - moment();
            }, 1000)} */}
            {timeLeft}
        </ActualCountdownContainer>
    )
}









