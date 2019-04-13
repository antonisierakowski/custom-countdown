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
			<Header />
			<Router>
				<Route exact path="/" component={LandingPage} />
				<Route
					path='/:id'
					render={(routeProps) => (
						<CountdownPage {...routeProps} />
					)}
					/>
			</Router>
		</>
	);
}

export default App;
