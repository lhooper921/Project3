import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import Materialize
import M from 'materialize-css';

import Home from './Home';
import NavBar from './NavBar';
import Profile from './Profile';
import Schedule from './Schedule';
import TimeOff from './TimeOff';
import Footer from './Footer';

class MainPage extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div>
				<Router>
					<NavBar />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/Profile" component={Profile} />
						<Route path="/Schedule" component={Schedule} />
						<Route path="/TimeOff" component={TimeOff} />
					</Switch>
				</Router>

				<Footer />
			</div>
		);
	}
}

export default MainPage;
