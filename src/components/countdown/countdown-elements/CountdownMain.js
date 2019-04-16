import React from 'react'
import CountdownContainer from './styled/CountdownContainer'
import CountdownName from './CountdownName'
import ActualCountdown from './ActualCountdown'
import Anim from './Anim'
import CopyUrl from './CopyUrl'

export default function CountdownMain(props) {
    const { data } = props

    return (
        <CountdownContainer bgIndex={data.bgIndex}>
            <CountdownName name={data.name}/>
            <ActualCountdown date={data.date}/>
            <Anim index={data.animIndex}/>
            <CopyUrl />
        </CountdownContainer>
    )
}
