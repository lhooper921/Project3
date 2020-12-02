import React from 'react';
import { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
		margin: '50px'
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

class Register extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			department: '',
			position: '',
			phone: '',
			address: ''
		};

		this.changeFirstName = this.changeFirstName.bind(this);
		this.changeLastName = this.changeLastName.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.changeDepartment = this.changeDepartment.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	changeFirstName(event) {
		this.setState({
			firstName: event.target.value
		});
	}

	changeLastName(event) {
		this.setState({
			lastName: event.target.value
		});
	}
	changeEmail(event) {
		this.setState({
			email: event.target.value
		});
	}
	changeDepartment(event) {
		this.setState({
			department: event.target.value
		});
	}
	changePassword(event) {
		this.setState({
			password: event.target.value
		});
	}
	onSubmit(event) {
		event.preventDefault();

		const registered = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password,
			department: this.state.department,
			position: '',
			phone: '',
			address: ''
		};

		axios
			.post('http://localhost:4000/app/register', registered)
			.then((response) => console.log('User Registered', response.data));

		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			department: '',
			position: '',
			phone: '',
			address: ''
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<h2>Registration </h2>
							<Container className={classes.texts}>
								<Row>
									<TextField
										id="FirstName"
										label="First Name"
										onChange={this.changeFirstName}
										value={this.state.firstName}
									/>
								</Row>

								<Row>
									<TextField
										id="LastName"
										label="LastName"
										onChange={this.changeLastName}
										value={this.state.lastName}
									/>
								</Row>
								<Row>
									<TextField
										id="Email"
										label="Email"
										onChange={this.changeEmail}
										value={this.state.email}
									/>
								</Row>
								<Row>
									<TextField
										id="Password"
										label="Password"
										onChange={this.changePassword}
										value={this.state.password}
										type="password"
									/>
								</Row>
								<Row>
									<TextField
										id="Department"
										label="Department"
										onChange={this.changeDepartment}
										value={this.state.department}
									/>
								</Row>

								<Row>
									<Button variant="primary" onClick={this.onSubmit}>
										Submit
									</Button>
								</Row>
								<Row>
									<Link to="/" className="navlink">
										<Button variant="secondary">Login</Button>
									</Link>
								</Row>
							</Container>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(useStyles)(Register);
