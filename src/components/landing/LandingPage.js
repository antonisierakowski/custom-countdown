import React from 'react'
import LandingPageContainer from './styled/LandingPageContainer';
import MainForm from './MainForm'

export default function LandingPage(props) {
  	return (
		<LandingPageContainer>
			<MainForm routeProps={props}/>
		</LandingPageContainer>
	)
}
