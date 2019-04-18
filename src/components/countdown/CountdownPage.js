import React from 'react'
import useCountdownById from '../hooks/useCountdownById'
import NotFound from './NotFound'
import Loading from './Loading'
import CountdownMain from './countdown-elements/CountdownMain'


export default function Countdown(props) {
	const currentId = props.match.params.id
	const { countdownData, isLoading, isNotFound } = useCountdownById(currentId);

  	return (
		<>
			{isLoading && <Loading />}
			{isNotFound && <NotFound />}
			{countdownData && <CountdownMain data={countdownData}/>}
		</>
	)
}
