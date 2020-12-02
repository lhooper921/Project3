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
	}
}));

export default function User(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={5}>
					<img src={user} alt="Logo" height="150px" />
				</Grid>

				<Grid item xs={7}>
					<div className={classes.demo}>
						<List>
							<ListItem>
								<ListItemText primary="ID:" secondary={props.xid} />
							</ListItem>
							<ListItem>
								<ListItemText primary="Name:" secondary={props.name} />
							</ListItem>
							<ListItem>
								<ListItemText primary="Department:" secondary={props.department} />
							</ListItem>
							<ListItem>
								<ListItemText primary="Position:" secondary={props.position} />
							</ListItem>
						</List>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

// import { Container, Row, Col } from 'react-bootstrap';
// import React from 'react';
// import { Component } from 'react';
// import user from './images/user.png';

// class User extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 	}
// 	render() {
// 		return (
// 			<Container>
// 				<Row>
// 					<Col xs={6}>
// 						<img src={user} alt="Logo" height="150px" />
// 					</Col>
// 					<Col xs={6}>
// 						<Row>
// 							<a>Id:</a>
// 						</Row>
// 						<Row>
// 							<a>Name:</a>
// 						</Row>

// 						<Row>
// 							<a>Department:</a>
// 						</Row>
// 						<Row>
// 							<a>Position:</a>
// 						</Row>
// 					</Col>
// 				</Row>
// 			</Container>
// 		);
// 	}
// }

// export default User;
