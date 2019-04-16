import React from 'react'
import CountdownContainer from './styled/CountdownContainer'
import useFindCountdownById from '../hooks/useFindCountdownById'
import NotFound from './NotFound'
import Loading from './Loading'
import CountdownMain from './countdown-elements/CountdownMain'


export default function Countdown(props) {
	const currentId = props.match.params.id
	const { countdownData, isLoading, isNotFound } = useFindCountdownById(currentId);


  	return (
		<>
			{isLoading && <Loading />}
			{isNotFound && <NotFound />}
			{countdownData && <CountdownMain data={countdownData}/>}
		</>
	)
}
