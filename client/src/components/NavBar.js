import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Materialize
import M from 'materialize-css';

import Content from './Content';
import './NavBar.css';

class NavBar extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div>
				<ul className="nav">
					<Link to="/">
						<li className="navlink">Home </li>
					</Link>
					<Link to="/Profile">
						<li className="navlink">Profile </li>
					</Link>
					<Link to="/Schedule">
						<li className="navlink">Schedule </li>
					</Link>
					<Link to="/TimeOff">
						<li className="navlink">Time Off </li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default NavBar;
