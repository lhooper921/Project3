import React from 'react';
import { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';

import { Container, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = (theme) => ({
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
});

class Login extends Component {
	constructor() {
		super();
		this.state = {
			user: '',
			password: ''
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.changeUser = this.changeUser.bind(this);
		this.changePassword = this.changePassword.bind(this);
	}

	changeUser(event) {
		this.setState({
			user: event.target.value
		});
	}

	changePassword(event) {
		this.setState({
			password: event.target.value
		});
	}

	onSubmit(event) {
		event.preventDefault();

		axios
			.get('http://localhost:4000/app/login', {
				params: { user: this.state.user, password: this.state.password }
			})
			.then((response) => {
				if (response.data === '0') {
					console.log('USER NotFound');
				} else {
					console.log('USER   Found', response.data);
					axios.get('http://localhost:4000/app/userid', { params: { id: response.data } }).then((res) => {
						this.setStoraged(res.data[0]);
					});
				}
			});
	}

	setStoraged(usertosave) {
		if (JSON.parse(localStorage.getItem('users'))) var users = JSON.parse(localStorage.getItem('users'));
		else var users = [];

		var user = {
			id: usertosave._id
		};

		users[0] = user;
		localStorage.setItem('users', JSON.stringify(users));
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<h2>Login</h2>
								<Container className={classes.texts}>
									<Col>
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
												onChange={this.changeUser}
												value={this.state.user}
												autoFocus
											/>
										</Row>

										<Row>
											<TextField
												type="password"
												id="inputPassword"
												label="Password"
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<VpnKey />
														</InputAdornment>
													)
												}}
												onChange={this.changePassword}
												value={this.state.password}
											/>
										</Row>
										<Row>
											<Button variant="primary" onClick={this.onSubmit}>
												<Link to="/MainPage/Home"> Log In</Link>
											</Button>
										</Row>
									</Col>
									<Col>
										<Row>
											<Link to="/Register" className="navlink">
												<Button variant="secondary">Register</Button>
											</Link>
										</Row>
									</Col>
								</Container>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles)(Login);
