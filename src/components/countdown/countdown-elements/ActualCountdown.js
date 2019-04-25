import React from 'react'
import ActualCountdownContainer from './styled/ActualCountdownContainer'

export default function ActualCountdown(props) {
    const { name, timeLeftParsed, isOver } = props

    const countdown = (
        <>
            <div>{name} starts in:</div>
            <div>{timeLeftParsed}</div>
        </>
    )

    const countdownFinished = name + ' has already started!'

    return (
        <ActualCountdownContainer className='animated fadeInLeft fast'>
            {!isOver ? countdown : countdownFinished}
        </ActualCountdownContainer>
    )
}









