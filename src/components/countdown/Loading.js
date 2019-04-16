import React from 'react'
import LoadingContainer from './styled/SpecialContainer'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function NotFound() {
  	return (
		<LoadingContainer>
			<CircularProgress size={80}/>
		</LoadingContainer>
	)
}
