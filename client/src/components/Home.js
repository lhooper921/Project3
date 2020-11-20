import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css';

class Home extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return <h1> Home</h1>;
	}
}

export default Home;
