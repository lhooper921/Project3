import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import company from './images/company.jpg';

import User from './User';

import Annoucement from './Annoucements';
import Messagess from './Messages';
import CurrentSchedule from './CurentSchedule';

import axios from 'axios';

const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '25px',
		marginRight: '25px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'lightgray'
	}
});

class Home extends Component {
	state = {
		id: '',
		name: '',
		department: '',
		position: ''
	};

	componentDidMount() {
		const userId = this.loadStoraged();

		axios.get('http://localhost:4000/app/userid', { params: { id: userId } }).then((response) => {
			console.log('User From the DB:', response.data);

			this.setState({
				id: response.data[0]._id,
				name: response.data[0].firstName,
				department: response.data[0].department,
				position: response.data[0].position
			});

			console.log(this.state);
		});
	}

	loadStoraged() {
		if (JSON.parse(localStorage.getItem('users'))) {
			var storedUsers = JSON.parse(localStorage.getItem('users'));

			return storedUsers[0].id;
		} else {
			console.log('not storaged');
			return 0;
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<img src={company} alt="Logo" width="500px" />
							</Paper>
						</Grid>
						<Grid item xs={4}>
							<Paper className={classes.paper}>
								<h2>User</h2>
								<User
									xid={this.state.id}
									name={this.state.name}
									department={this.state.department}
									position={this.state.position}
								/>
							</Paper>
						</Grid>
						<Grid item xs={8}>
							<Paper className={classes.paper}>
								<h2>Messages</h2>
								<Messagess />
							</Paper>
						</Grid>

						<Grid item xs={4}>
							<Paper className={classes.paper}>
								<h2>Annoucements</h2>
								<Annoucement />
							</Paper>
						</Grid>
						<Grid item xs={8}>
							<Paper className={classes.paper}>
								<h2>Current Schedule</h2>
								<CurrentSchedule />
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles)(Home);
