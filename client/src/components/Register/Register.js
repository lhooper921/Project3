import React from 'react';
import { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import avatar1 from '../avatar/1.png';
import avatar2 from '../avatar/2.png';
import avatar3 from '../avatar/3.png';
import avatar4 from '../avatar/4.png';
import avatar5 from '../avatar/5.png';
import avatar6 from '../avatar/6.png';

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
			avatarList: [
				{ img: avatar1, id: 1 },
				{ img: avatar2, id: 2 },
				{ img: avatar3, id: 3 },
				{ img: avatar4, id: 4 },
				{ img: avatar5, id: 5 },
				{ img: avatar6, id: 6 }
			],
			avatar: 1,
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

	handleAvatarClick(id) {
		this.state.avatar = id;
		console.log(id);
	}

	onSubmit(event) {
		event.preventDefault();

		const registered = {
			avatar: this.state.avatar,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password,
			department: this.state.department,
			position: '',
			phone: '',
			address: ''
		};
		console.log(registered);
		axios
			.post('http://localhost:4000/app/register', registered)
			.then((response) => console.log('User Registered', response.data));

		this.setState({
			avatar: 1,
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
									<h4>Select your avatar:</h4>
								</Row>

								<Row>
									{this.state.avatarList.map((avatar, key) => {
										return (
											<Button
												key={key}
												variant="outline-light"
												size="sm"
												onClick={(e) => {
													this.handleAvatarClick(avatar.id);
												}}
											>
												<img src={avatar.img} value={avatar.id} alt={avatar.id} width="50px" />
											</Button>
										);
									})}
								</Row>
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
										label="Last Name"
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
										Register
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
