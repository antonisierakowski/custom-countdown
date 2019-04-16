import React from 'react'
import CountdownNameContainer from './styled/CountdownNameContainer'

export default function CountdownName(props) {
    return (
        <CountdownNameContainer>
            {props.name} starts in:
        </CountdownNameContainer>
    )
}
