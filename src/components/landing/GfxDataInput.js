import React from 'react'
import GfxDataInputContainer from './styled/GfxDataInputContainer';
import PreviewGfx from './PreviewGfx'
import bg1 from '../../img/backgrounds/adult-cactus-camera-297755.jpg'
import bg2 from '../../img/backgrounds/antioxidant-beverage-citrus-1973238.jpg'
import bg3 from '../../img/backgrounds/astronomy-cosmos-dark-733475.jpg'
import bg4 from '../../img/backgrounds/beautiful-blue-bright-1988502.jpg'
import bg5 from '../../img/backgrounds/bright-celebration-explosion-949592.jpg'

const backgrounds = [
    bg1, bg2, bg3, bg4, bg5
]

const anims = {

}

export default function GfxDataInput(props) {
    return (
        <GfxDataInputContainer>
            <PreviewGfx data={backgrounds}/>
            <PreviewGfx />
        </GfxDataInputContainer>
    )
}
