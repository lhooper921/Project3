import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css';

class TimeOff extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return <h1> TimeOff</h1>;
	}
}

export default TimeOff;
