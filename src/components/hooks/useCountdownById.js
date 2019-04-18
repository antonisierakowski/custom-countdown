import { useState, useEffect } from 'react'
import database from '../../firestoreConfig'

export default function useCountdownById(id) {
    const [ countdownData, setCountdownData ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isNotFound, setIsNotFound ] = useState(false)

    useEffect(() => {
        const getCountdownData = () => {
            database.doc(id).get()
            .then(doc => {
                setIsLoading(false)
                if (doc.exists) {
                    setCountdownData(doc.data())
                } else {
                    setIsNotFound(true)
                }
            })
            .catch(() => {
                setIsLoading(false)
                setIsNotFound(true)
            })
        }
        getCountdownData();
    }, [])

    return { countdownData, isLoading, isNotFound }
}
