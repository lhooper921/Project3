import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './icon.png';
import out from './out.png';

// Import Materialize
import M from 'materialize-css';

import './NavBar.css';

class NavBar extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			// <div>
			// 	<div className="row">
			// 		<div className="col s12 m12 l12">
			<nav>
				<div className="nav-wrapper teal">
					<a className="navHeader" href="/">
						<img src={logo} alt="Logo" width="50px" />
						The Boring Company
					</a>
					<a href="#" data-target="mobile-demo" class="sidenav-trigger">
						<i class="material-icons">menu</i>
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to="/MainPage/Home" className="navlink">
								Home
							</Link>
						</li>
						<li>
							<Link to="/MainPage/Board" className="navlink">
								Board
							</Link>
						</li>
						<li>
							<Link to="/MainPage/Schedule" className="navlink">
								Schedule
							</Link>
						</li>
						<li>
							<Link to="/MainPage/TimeOff" className="navlink">
								Time Off
							</Link>
						</li>
						<li>
							<Link to="/MainPage/Profile" className="navlink">
								Personal Info
							</Link>
						</li>
						<li>
							<Link to="/" className="navlink">
								<a>
									<img src={out} alt="Logo" width="30px" />
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}

export default NavBar;
