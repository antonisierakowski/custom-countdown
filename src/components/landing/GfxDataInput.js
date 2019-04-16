import React from 'react'
import GfxDataInputContainer from './styled/GfxDataInputContainer';
import PreviewGfx from './PreviewGfx'

import bg1 from '../../img/backgrounds/adult-cactus-camera-297755.jpg'
import bg2 from '../../img/backgrounds/antioxidant-beverage-citrus-1973238.jpg'
import bg3 from '../../img/backgrounds/astronomy-cosmos-dark-733475.jpg'
import bg4 from '../../img/backgrounds/beautiful-blue-bright-1988502.jpg'
import bg5 from '../../img/backgrounds/bright-celebration-explosion-949592.jpg'

import anim1 from '../../img/anim-previews/aqua-blue-clean-1201625.jpg'
import anim2 from '../../img/anim-previews/alcohol-beverage-celebration-533257.jpg'

const backgrounds = [
    {
        url: bg1,
        theme: 'light'
    },
    {
        url: bg2,
        theme: 'light'
    },
    {
        url: bg3,
        theme: 'dark'
    },
    {
        url: bg4,
        theme: 'light'
    },
    {
        url: bg5,
        theme: 'dark'
    },
]

const anims = [
    {url: anim1}, {url: anim2},
]

export default function GfxDataInput(props) {
    const { bgIndex, setBgIndex, animIndex, setAnimIndex } = props
    return (
        <GfxDataInputContainer>
            <PreviewGfx data={backgrounds} index={bgIndex} setIndex={setBgIndex}/>
            <PreviewGfx data={anims} index={animIndex} setIndex={setAnimIndex}/>
            {/* <PreviewGfx data={anims} index={animIndex} setIndex={setAnimIndex}/> */}
        </GfxDataInputContainer>
    )
}