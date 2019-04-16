import React from 'react'
import GfxDataInputContainer from './styled/GfxDataInputContainer';
import PreviewGfx from './PreviewGfx'

import { backgrounds, anims } from '../GfxData'

export default function GfxDataInput(props) {
    const { bgIndex, setBgIndex, animIndex, setAnimIndex } = props
    return (
        <GfxDataInputContainer>
            <PreviewGfx text="Choose your countdown's background" data={backgrounds} index={bgIndex} setIndex={setBgIndex}/>
            <PreviewGfx text="Choose your countdown's animation" data={anims} index={animIndex} setIndex={setAnimIndex}/>
            {/* <PreviewGfx data={anims} index={animIndex} setIndex={setAnimIndex}/> */}
        </GfxDataInputContainer>
    )
}
