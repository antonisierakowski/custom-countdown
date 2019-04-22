import React from 'react'
import GfxDataInputContainer from './styled/GfxDataInputContainer';
import PreviewGfx from './PreviewGfx'

import { backgrounds, anims } from '../GfxData'

export default function GfxDataInput(props) {
    const { bgIndex, setBgIndex, animIndex, setAnimIndex } = props
    return (
        <GfxDataInputContainer elevation={20}>
            <PreviewGfx text="Choose your countdown's background" data={backgrounds} index={bgIndex} setIndex={setBgIndex} dataKey='preview'/>
            <PreviewGfx text="Choose your countdown's graphic details" data={anims} index={animIndex} setIndex={setAnimIndex} dataKey='url'/>
            {/* <PreviewGfx data={anims} index={animIndex} setIndex={setAnimIndex}/> */}
        </GfxDataInputContainer>
    )
}
