import React, { useState, useEffect } from 'react'
import Form from './styled/Form'
import MainDataInput from './MainDataInput'
import GfxDataInput from './GfxDataInput.js'
import SubmitButtons from './SubmitButtons'
import moment from 'moment'
import database from '../../firestoreConfig'
import shortid from 'shortid'


export default function MainForm(props) {
    const [ name, setName ] = useState('');
	const [ date, setDate ] = useState(moment());
	const [ bgIndex, setBgIndex ] = useState(0);
    const [ animIndex, setAnimIndex ] = useState(0);
    const [ settings, setSettings ] = useState()

    useEffect(() => {
        setSettings({
            name: name,
            date: date.format(),
            bgIndex: bgIndex,
            animIndex: animIndex,
        })
    }, [name, date, bgIndex, animIndex])

    const handleSubmit = e => {
        e.preventDefault();
        const newId = shortid.generate()
		database.doc(newId).set({
			name: settings.name,
            date: settings.date,
            bgIndex: settings.bgIndex,
            animIndex: settings.animIndex,
            id: newId,
        })
        .then(() => {
            props.routeProps.history.push(`/${newId}`)
        })
    }

    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <MainDataInput name={name} setName={setName} date={date} setDate={setDate}/>
            <GfxDataInput bgIndex={bgIndex} setBgIndex={setBgIndex} animIndex={animIndex} setAnimIndex={setAnimIndex}/>
            <SubmitButtons setSettings={setSettings}/>
        </Form>
    )
}