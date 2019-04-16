import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parseTimeLeft from './parseTimeLeft'

export default function useTimeLeft(evt, now) {
    const [ msLeft, setMsLeft] = useState(evt - now)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMsLeft(prevstate => prevstate - 1000)
        }, 1000)

        return (() => clearInterval(intervalId))
    }, [])

    const timeLeft = parseTimeLeft(msLeft)

    return { timeLeft }
}

