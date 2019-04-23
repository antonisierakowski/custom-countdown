import React from 'react'
import AnimContainer from './styled/AnimContainer'

export default function Anim(props) {
    const { counting, finished, isOver } = props;
    return (
        <AnimContainer>
            {!isOver ? counting : finished} 
        </AnimContainer>
    )
}
