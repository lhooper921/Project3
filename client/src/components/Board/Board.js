import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css';

class Board extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return <h1> Board</h1>;
	}
}

export default Board;
