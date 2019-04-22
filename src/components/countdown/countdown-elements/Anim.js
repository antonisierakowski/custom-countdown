import React from 'react'
import AnimContainer from './styled/AnimContainer'
import {anims} from '../../GfxData'


export default function Anim(props) {
    const { counting, finished, isOver } = props;
    return (
        <AnimContainer>
            {!isOver ? counting : finished} 
        </AnimContainer>
    )
}
