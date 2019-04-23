import React from 'react'

import bg1 from '../img/backgrounds/adult-cactus-camera-297755.jpg'
import bg2 from '../img/backgrounds/antioxidant-beverage-citrus-1973238.jpg'
import bg3 from '../img/backgrounds/astronomy-cosmos-dark-733475.jpg'
import bg4 from '../img/backgrounds/beautiful-blue-bright-1988502.jpg'
import bg5 from '../img/backgrounds/bright-celebration-explosion-949592.jpg'

import bg1prv from '../img/bg-previews/adult-cactus-camera-297755.jpg'
import bg2prv from '../img/bg-previews/antioxidant-beverage-citrus-1973238.jpg'
import bg3prv from '../img/bg-previews/astronomy-cosmos-dark-733475.jpg'
import bg4prv from '../img/bg-previews/beautiful-blue-bright-1988502.jpg'
import bg5prv from '../img/bg-previews/bright-celebration-explosion-949592.jpg'

import anim1 from '../img/anim-previews/1.jpg'
import anim2 from '../img/anim-previews/2.jpg'
import anim3 from '../img/anim-previews/3.jpg'
import anim4 from '../img/anim-previews/4.jpg'

import Glass from './countdown/anims/Glass'
import Fireworks from './countdown/anims/Fireworks'
import Circles from './countdown/anims/Circles'
import Confetti from 'react-confetti'
import IceCream from './countdown/anims/IceCream'


export const backgrounds = [
    {
        url: bg1,
        preview: bg1prv,
    },
    {
        url: bg2,
        preview: bg2prv,
    },
    {
        url: bg3,
        preview: bg3prv,
    },
    {
        url: bg4,
        preview: bg4prv,
    },
    {
        url: bg5,
        preview: bg5prv,
    },
]

export const anims = [
    {
        url: anim1,
        counting: <Glass />,
        finished: <Fireworks />
    },
    {
        url: anim2,
        counting: <Circles />,
        finished: <Confetti />
    },
    {
        url: anim3,
        counting: <IceCream />,
        finished: <Confetti />
    },
    {
        url: anim4,
        counting: null,
        finished: null,
    },
]