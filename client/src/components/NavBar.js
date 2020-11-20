import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Materialize
import M from 'materialize-css';

import Content from './Content';
import './NavBar.css';
import logo from '../media/logo.png';

class NavBar extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div>
				{/* <ul className="nav">
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
				</ul> */}

				{/* <h2 className="card-panel teal lighten-2 white-text">App Name</h2> */}
				<div className="row">
					<div className="col s12 m12 l12">
						<nav>
							<div className="nav-wrapper teal" height="500px">
								<a href="/" className="brand-logo">
									App name
								</a>

								<ul id="nav-mobile" className="right hide-on-med-and-down">
									<li>
										<Link to="/" className="navlink">
											Home
										</Link>
									</li>
									<li>
										<Link to="/Profile" className="navlink">
											Profile
										</Link>
									</li>
									<li>
										<Link to="/Schedule" className="navlink">
											Schedule
										</Link>
									</li>
									<li>
										<Link to="/TimeOff" className="navlink">
											Time Off
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;
