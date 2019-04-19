import React from 'react'
import AnimContainer from './styled/AnimContainer'
import Glass from '../anims/Glass'
import useTimeLeft from '../../hooks/useTimeLeft'

export default function Anim(props) {
    const { index, timeLeft } = props;
    // const timeLeft = useTimeLeft
    return (
        <AnimContainer>
            {index === 0 && <Glass/>}
        </AnimContainer>
    )
}
