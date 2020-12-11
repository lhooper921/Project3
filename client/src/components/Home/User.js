import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';

import user from './images/user.png';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '100%'
	},
	demo: {
		backgroundColor: theme.palette.background.paper
	},
	title: {
		margin: theme.spacing(4, 0, 2)
	},
	text: {
		fontWeight: 'bold',
		color: 'teal',
		fontSize: '50px'
	},
	img: {
		width: '160px'
	}
}));

export default function User(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={5}>
					<img src={user} alt="Logo" className={classes.img} />
				</Grid>

				<Grid item xs={7}>
					<div className={classes.demo}>
						<List>
							<ListItem>
								<ListItemText primary="Name:" secondary={props.name} className={classes.text} />
							</ListItem>
							<ListItem>
								<ListItemText primary="LastName:" secondary={props.lastname} className={classes.text} />
							</ListItem>
							<ListItem>
								<ListItemText primary="Department:" secondary={props.department} />
							</ListItem>
							<ListItem>
								<ListItemText primary="Position:" secondary={props.position} className={classes.text} />
							</ListItem>
						</List>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
