import moment from 'moment'

export default function parseTimeLeft(msLeft) {
    const years = moment.duration(msLeft).years()
    const months = moment.duration(msLeft).months() + 12 * years
    const days = moment.duration(msLeft).days()
    const hours = moment.duration(msLeft).hours()
    const minutes = moment.duration(msLeft).minutes()
    const seconds = moment.duration(msLeft).seconds()

    const monthsParsed = !!months ? `${months} ${months === 1 ? 'month, ' : 'months, '}` : '';
    const timeLeft = `
    ${monthsParsed}
    ${days} ${months === 1 ? 'day' : 'days'},
    ${hours} ${hours === 1 ? 'hour' : 'hours'},
    ${minutes} ${minutes === 1 ? 'minute' : 'minutes'},
    ${seconds} ${seconds === 1 ? 'second' : 'seconds'}
    `

    return timeLeft;
}