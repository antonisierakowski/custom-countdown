import React from 'react'
import CountdownContainer from './styled/CountdownContainer'
import ActualCountdown from './ActualCountdown'
import Anim from './Anim'
import CopyUrl from './CopyUrl'
import moment from 'moment'
import useTimeLeft from '../../hooks/useTimeLeft'
import {anims} from '../../GfxData'

export default function CountdownMain(props) {
    const { data } = props

    const eventDate = moment(data.date).valueOf();
    const currentTime = moment().valueOf()
    const { timeLeftParsed, isOver } = useTimeLeft(eventDate, currentTime)

    return (
        <CountdownContainer bgIndex={data.bgIndex}>
            <ActualCountdown name={data.name} timeLeftParsed={timeLeftParsed} isOver={isOver}/>
            {anims[data.animIndex] && <Anim counting={anims[data.animIndex].counting} finished={anims[data.animIndex].finished} isOver={isOver}/>}
            <CopyUrl />
        </CountdownContainer>
    )
}
