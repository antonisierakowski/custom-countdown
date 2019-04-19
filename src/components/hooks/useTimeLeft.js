import { useState, useEffect } from 'react'
import moment from 'moment'

export default function useTimeLeft(evt, now) {
    const [ msLeft, setMsLeft] = useState(evt - now)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMsLeft(prevstate => prevstate - 1000)
        }, 1000)

        return (() => clearInterval(intervalId))
    }, [])

    const timeLeftParsed = parseTimeLeft(msLeft)

    return { timeLeftParsed, msLeft }
}


const parseTimeLeft = msLeft => {
    const parse = moment.duration;

    const years = parse(msLeft).years()
    const months = parse(msLeft).months() + 12 * years
    const days = parse(msLeft).days()
    const hours = parse(msLeft).hours()
    const minutes = parse(msLeft).minutes()
    const seconds = parse(msLeft).seconds()

    const monthsParsed = !!months ? `${months} ${months === 1 ? 'month, ' : 'months, '}` : '';
    const timeLeft = `
    ${monthsParsed}
    ${days} ${days === 1 ? 'day' : 'days'},
    ${hours} ${hours === 1 ? 'hour' : 'hours'},
    ${minutes} ${minutes === 1 ? 'minute' : 'minutes'},
    ${seconds} ${seconds === 1 ? 'second' : 'seconds'}
    `

    return timeLeft;
}