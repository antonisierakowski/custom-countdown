import React, { useState } from 'react'
import Form from './styled/Form'
import MainDataInput from './MainDataInput'
import GfxDataInput from './GfxDataInput.js'
import SubmitButtons from './SubmitButtons'


export default function MainForm(props) {
    const { name, setName, date, setDate, bgIndex, setBgIndex, animIndex, setAnimIndex, setSettings } = props

    return (
        <Form>
            <MainDataInput name={name} setName={setName} date={date} setDate={setDate}/>
            <GfxDataInput bgIndex={bgIndex} setBgIndex={setBgIndex} animIndex={animIndex} setAnimIndex={setAnimIndex}/>
            <SubmitButtons setSettings={setSettings}/>
        </Form>
    )
}
