import React, { useState, useEffect } from 'react'
import LandingPageContainer from './styled/LandingPageContainer';
import MainForm from './MainForm'
import moment from 'moment'

export default function LandingPage() {
    const [ name, setName ] = useState('');
	const [ date, setDate ] = useState(moment().format("YYYY-MM-DDTHH:MM"));
	const [ bgIndex, setBgIndex ] = useState(0);
    const [ animIndex, setAnimIndex ] = useState(0);

	const [ settings, setSettings ] = useState( {} )

	useEffect( () => {
		console.log('zmieniły się ustawionka:')
		console.log(settings)
	}, [settings])

  	return (
		<LandingPageContainer>
			<MainForm
				setName={setName}
				name={name}
				setDate={setDate}
				date={date}
				setBgIndex={setBgIndex}
				bgIndex={bgIndex}
				setAnimIndex={setAnimIndex}
				animIndex={animIndex}
				setSettings={setSettings}
			/>
		</LandingPageContainer>
	)
}
