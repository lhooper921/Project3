import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
		backgroundColor: 'gray'
	}
}));

export default function Home() {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>xs=12</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>xs=6</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>xs=6</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>xs=3</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>xs=3</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>xs=3</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>xs=3</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
