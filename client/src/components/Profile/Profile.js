import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css';

class Profile extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return <h1> Profile</h1>;
	}
}

export default Profile;
