import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import company from './images/company.jpg';

import User from './User';

import Annoucement from './Annoucements';
import Messagess from './Messages';
import CurrentSchedule from './CurentSchedule';

const useStyles = makeStyles((theme) => ({
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
}));

export default function Home() {
	const classes = useStyles();

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
							<User />
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
