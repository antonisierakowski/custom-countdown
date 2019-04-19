import React from 'react'
import ActualCountdownContainer from './styled/ActualCountdownContainer'

export default function ActualCountdown(props) {
    const { name, timeLeftParsed } = props

    return (
        <ActualCountdownContainer>
            <div>{name} starts in:</div>
            <div>{timeLeftParsed}</div>
        </ActualCountdownContainer>
    )
}









