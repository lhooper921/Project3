import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';

import { Container, Row, Col } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: '150px',
		marginLeft: '200px',
		marginRight: '200px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'lightgray'
	},

	texts: {
		margin: 'auto',
		width: '50%',
		border: '3px solid teal',
		padding: '30px'
	}
}));

export default function LogIn() {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<h2>Login</h2>
							<Container className={classes.texts}>
								<Row>
									<TextField
										id="inputUser"
										label="User"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<AccountCircle />
												</InputAdornment>
											)
										}}
									/>
								</Row>

								<Row>
									<TextField
										id="inputPassword"
										label="Password"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<VpnKey />
												</InputAdornment>
											)
										}}
									/>
								</Row>
							</Container>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
