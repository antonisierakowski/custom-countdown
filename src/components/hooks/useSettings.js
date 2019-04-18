import { useState, useEffect } from 'react';
import moment from 'moment';

const useSettings = (name, date, bgIndex, animIndex) => {
    const [ settings, setSettings] = useState( {} )

    useEffect(() => {
        setSettings({
            name: name,
            date: moment(date).format(),
            bgIndex: bgIndex,
            animIndex: animIndex,
        })
    }, [name, date, bgIndex, animIndex])

    return settings;
}

export default useSettings;