import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css';
import logo from '../media/logo.png';

class Footer extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<footer className="page-footer teal">
				<div className="row">
					<div className="col s12 m6 16">
						<h5>App name</h5>
						<img src={logo} alt="Logo" height="50px" />
					</div>

					<div className="col">
						<ul>
							<li>
								<a href="#" className="grey-text text-lighten-3 right">
									Aldo
								</a>
							</li>
							<li>
								<a href="#" className="grey-text text-lighten-3 right">
									Ana
								</a>
							</li>
							<li>
								<a href="#" className="grey-text text-lighten-3 right">
									Lauren
								</a>
							</li>
							<li>
								<a href="#" className="grey-text text-lighten-3 right">
									Kanoa
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="footer-copyright">
					<div className="container">
						© 2020 Copyright Information
						<a className="grey-text text-lighten-4 right" href="#!">
							GitHub
						</a>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
