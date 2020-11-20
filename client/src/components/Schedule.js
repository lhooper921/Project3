import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css';

class Schedule extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return <h1> Schedule</h1>;
	}
}

export default Schedule;
