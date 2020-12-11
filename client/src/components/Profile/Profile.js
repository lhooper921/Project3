import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Input } from '@material-ui/core';
import {formControl} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '100px',
		marginRight: '100px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'lightgray'
	}
}));

export default function Profile() {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<h2>Personal info</h2>
							<Grid item xs={12} sm={6}>
          						<Paper className={classes.paper}>xs=12 sm=6</Paper>
								{/* <Avatar alt="User Image" src="img location here" className={classes.large} /> */}
								</Grid>
							<Grid item xs={12} sm={6}>
							<Paper classname={classes.paper}>xs=12 sm=6</Paper>
							User info: First name, last name,Email, department,
							</Grid>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									user bio
								</Paper>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
