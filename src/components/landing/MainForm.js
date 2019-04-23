import React, { useState, useRef } from 'react'
import Form from './styled/Form'
import MainDataInput from './MainDataInput'
import GfxDataInput from './GfxDataInput.js'
import SubmitButtons from './SubmitButtons'
import moment from 'moment'
import database from '../../firestoreConfig'
import shortid from 'shortid'
import useSettings from '../hooks/useSettings'

export default function MainForm(props) {
    const [ name, setName ] = useState('');
	const [ date, setDate ] = useState(moment());
	const [ bgIndex, setBgIndex ] = useState(0);
    const [ animIndex, setAnimIndex ] = useState(0);
    const [ nameError, setNameError ] = useState(false)
    const nameRef = useRef(null);
    const settings = useSettings(name, date, bgIndex, animIndex)

    const handleSubmit = e => {
        e.preventDefault();
        if (settings.name) {
            setNameError(false)
            const newId = shortid.generate()
            database.doc(newId).set({
                name: settings.name,
                date: settings.date,
                bgIndex: settings.bgIndex,
                animIndex: settings.animIndex,
                id: newId,
            })     
            .then(() => {
                props.routeProps.history.push('/' + newId)
            })
        } else {
            setNameError(true)
            nameRef.current.focus();
        }
    }

    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <MainDataInput name={name} setName={setName} date={date} setDate={setDate} nameError={nameError} setNameError={setNameError} nameRef={nameRef}/>
            <GfxDataInput bgIndex={bgIndex} setBgIndex={setBgIndex} animIndex={animIndex} setAnimIndex={setAnimIndex}/>
            <SubmitButtons />
        </Form>
    )
}