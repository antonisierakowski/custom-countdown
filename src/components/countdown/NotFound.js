import React from 'react'
import NotFoundContainer from './styled/NotFoundContainer'
import Clock from './anims/Clock'

export default function NotFound() {
  	return (
		<NotFoundContainer>
			<Clock />
			Couldn't find your page...
		</NotFoundContainer>
	)
}
