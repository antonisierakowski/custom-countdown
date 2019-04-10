import React, { Component } from 'react';
import LandingPage from './landing/LandingPage'
import CountdownPage from './countdown/CountdownPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Route exact path="/" component={LandingPage} />
        			<Route path="/:id" component={CountdownPage} />
				</Router>
			</div>
		);
	}
}

export default App;
