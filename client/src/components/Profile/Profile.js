import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

							{/* CODE */}
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
