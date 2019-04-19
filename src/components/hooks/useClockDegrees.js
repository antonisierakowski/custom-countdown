import { useState, useEffect } from 'react'
import moment from 'moment'

const useClockDegrees = () => {
    const [ now, setNow ] = useState(moment())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(moment())
        }, 1000)


        return () => clearInterval(intervalId)
    }, [])

    const secondDeg = now.seconds() * 6;
    const minuteDeg = now.minutes() * 6 + secondDeg / 60;
    const hourDeg = ((now.hours() % 12) / 12) * 360 + 90 + minuteDeg / 12;

    return { hourDeg, minuteDeg, secondDeg };
}

export default useClockDegrees