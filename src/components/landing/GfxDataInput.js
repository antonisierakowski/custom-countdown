import React from 'react'
import GfxDataInputContainer from './styled/GfxDataInputContainer';
import PreviewGfx from './PreviewGfx'

import { backgrounds, anims } from '../GfxData'

export default function GfxDataInput(props) {
    const { bgIndex, setBgIndex, animIndex, setAnimIndex } = props
    return (
        <GfxDataInputContainer elevation={20} className='animated fadeInUp slow'>
            <PreviewGfx text="Choose your countdown's background" data={backgrounds} index={bgIndex} setIndex={setBgIndex} dataKey='preview' border={0}/>
            <PreviewGfx text="Choose your countdown's graphic details" data={anims} index={animIndex} setIndex={setAnimIndex} dataKey='url' border={1}/>
            {/* <PreviewGfx data={anims} index={animIndex} setIndex={setAnimIndex}/> */}
        </GfxDataInputContainer>
    )
}
