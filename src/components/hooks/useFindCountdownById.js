import React, { useState, useEffect } from 'react'
import database from '../../firestoreConfig'

export default function useFindCountdownById(id) {
    const [ countdownData, setCountdownData ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isNotFound, setIsNotFound ] = useState(false)

    useEffect(() => {
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
    }, [])

    return { countdownData, isLoading, isNotFound }
}
