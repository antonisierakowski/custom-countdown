import React from 'react';
import LandingPage from './landing/LandingPage'
import CountdownPage from './countdown/CountdownPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Header'

const App = () => {
	return (
		<>
			<GlobalStyle/>
			<Router basename={process.env.PUBLIC_URL}>
				<Route
					exact
					path={'/'}
					render={props => <LandingPage {...props} />}
				/>
				<Route
					path={'/:id'}
					render={props => <CountdownPage {...props} />}
					/>
				<Header />
			</Router>
		</>
	);
}

export default App;
