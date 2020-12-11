import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MessageElement from './MessageElement';
import AnnoucementElement from './AnnoucementElement';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const useStyles = (theme) => ({
	root: {
		alignItems: 'center',
		width: '100%',
		backgroundColor: 'whitesmoke'
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
	},
	input: {
		backgroundColor: 'gray'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
});

class Board extends Component {
	constructor() {
		super();
		this.state = {
			receivedMessages: [],
			sentMessages: [],
			allmessages: [],
			annoucements: [],
			newMessage: {
				name: '',
				name2: '',
				title: '',
				message: '',
				sender: ''
			},
			newAnnoucement: {
				title: '',
				content: '',
				date: ''
			},
			user: '',
			users: []
		};

		this.onSubmit = this.onSubmit.bind(this);
		// this.changeName = this.changeName.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
		this.changeMessage = this.changeMessage.bind(this);

		this.onASubmit = this.onASubmit.bind(this);
		this.changeATitle = this.changeATitle.bind(this);
		this.changeAContent = this.changeAContent.bind(this);

		this.callbackFunction = this.callbackFunction.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		const userId = this.loadStoraged();

		axios.get('http://localhost:4000/app/userid', { params: { id: userId } }).then((response) => {
			console.log('User From the DB:', response.data);

			this.setState({
				newMessage: {
					sender: response.data[0]._id,
					name: response.data[0].firstName
				}
			});
		});

		axios.get('http://localhost:4000/app/messages').then((response) => {
			response.data.map((message) => {
				if (message.recipient === this.state.newMessage.sender) {
					const newMessage = {
						name: message.sender,
						title: message.title,
						message: message.message,
						id: message._id
					};
					this.state.allmessages.push(newMessage);
				}
			});

			const Rmessages = this.state.allmessages.map((message) => (
				<MessageElement name={message.name} title={message.title} message={message.message} key={message.id} />
			));

			this.setState({
				receivedMessages: Rmessages,
				allmessages: []
			});

			response.data.map((message) => {
				if (message.sender === this.state.newMessage.sender) {
					const newMessage = {
						name: message.name,
						title: message.title,
						message: message.message,
						id: message._id
					};
					this.state.allmessages.push(newMessage);
				}
			});

			const Smessages = this.state.allmessages.map((message) => (
				<MessageElement name={message.name} title={message.title} message={message.message} key={message.id} />
			));

			this.setState({
				sentMessages: Smessages,
				allmessages: []
			});
		});

		axios.get('http://localhost:4000/app/annoucements').then((response) => {
			const annoucements = response.data.map((annoucement) => (
				<AnnoucementElement
					title={annoucement.title}
					content={annoucement.content}
					date={annoucement.date}
					key={annoucement.id}
				/>
			));

			this.setState({
				annoucements: annoucements
			});
		});

		axios.get('http://localhost:4000/app/users').then((response) => {
			const resusers = [];

			response.data.map((user) => {
				const newuser = {
					name: user.firstName,
					id: user._id
				};
				resusers.push(newuser);
			});

			this.setState({ users: resusers });

			console.log('users state', this.state.users);
		});
	}

	loadStoraged() {
		if (JSON.parse(localStorage.getItem('users'))) {
			var storedUsers = JSON.parse(localStorage.getItem('users'));

			return storedUsers[0].id;
		} else {
			console.log('not storaged');
			return 0;
		}
	}

	//Messages vvvv

	// changeName(event) {
	// 	this.setState({
	// 		newMessage: {
	// 			...this.state.newMessage,
	// 			name: event.target.value
	// 		}
	// 	});
	// }
	changeTitle(event) {
		this.setState({
			newMessage: {
				...this.state.newMessage,
				title: event.target.value
			}
		});
	}
	changeMessage(event) {
		this.setState({
			newMessage: {
				...this.state.newMessage,
				message: event.target.value
			}
		});
	}
	onSubmit(event) {
		event.preventDefault();

		const newMessage = {
			name: this.state.newMessage.name,

			title: this.state.newMessage.title,
			message: this.state.newMessage.message,
			sender: this.state.newMessage.sender,
			recipient: this.state.user
		};

		axios
			.post('http://localhost:4000/app/message', newMessage)
			.then((response) => console.log('New Message:', response.data));

		this.setState({
			newMessage: {
				message: '',
				title: ''
			}
		});

		console.log('State:', this.state);

		// this.componentDidMount();
	}

	//Annoucement vvvv

	changeATitle(event) {
		this.setState({
			newAnnoucement: {
				...this.state.newAnnoucement,
				title: event.target.value
			}
		});
	}

	changeAContent(event) {
		this.setState({
			newAnnoucement: {
				...this.state.newAnnoucement,
				content: event.target.value
			}
		});
	}

	onASubmit(event) {
		event.preventDefault();

		var today = new Date();

		var dd = today.getDate();

		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();
		var hh = today.getHours();
		var nn = today.getMinutes();

		const newAnnoucement = {
			content: this.state.newAnnoucement.content,
			title: this.state.newAnnoucement.title,
			date: hh + ':' + nn + ' - ' + mm + '/' + dd + '/' + yyyy
		};

		axios
			.post('http://localhost:4000/app/annoucement', newAnnoucement)
			.then((response) => console.log('New Annoucement:', response.data));

		this.setState({
			newAnnoucement: {
				content: '',
				title: '',
				date: ''
			}
		});

		this.componentDidMount();
	}

	callbackFunction = (childData) => {
		this.setState({
			newMessage: {
				message: childData.message,
				title: childData.title,
				name: childData.name
			}
		});

		this.onSubmit();
	};

	handleChange = (event) => {
		console.log(event.target);
		this.setState({ user: event.target.value });
		this.state.user = event.target.value;
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Paper className={classes.paper}>
							<h2>Announcements</h2>
							<form className={classes.root} className={classes.input} noValidate autoComplete="off">
								<TextField
									id="title"
									label="Title"
									onChange={this.changeATitle}
									value={this.state.newAnnoucement.title}
								/>
								<TextField
									id="annoucement"
									label="Annoucement"
									onChange={this.changeAContent}
									value={this.state.newAnnoucement.content}
								/>
								<Button variant="contained" color="primary" onClick={this.onASubmit}>
									Post
								</Button>
							</form>

							<List className={classes.root}>{this.state.annoucements}</List>
						</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper} elevation={3}>
							<h2>Received</h2>
							<List className={classes.root}>{this.state.receivedMessages}</List>
							<h2>Sent</h2>
							<form className={classes.root} className={classes.input} noValidate autoComplete="off">
								<FormControl className={classes.formControl}>
									<InputLabel id="demo-simple-select-label">User</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={this.state.user}
										onChange={this.handleChange}
									>
										{this.state.users.map((user, index) => (
											<MenuItem value={user.id} id={index}>
												{user.name}
											</MenuItem>
										))}
									</Select>
									<FormHelperText>Recipient</FormHelperText>
								</FormControl>
								<TextField
									id="title"
									label="Title"
									onChange={this.changeTitle}
									value={this.state.newMessage.title}
								/>

								<TextField
									id="message"
									label="Message"
									onChange={this.changeMessage}
									value={this.state.newMessage.message}
								/>
								<Button variant="contained" color="primary" onClick={this.onSubmit}>
									Create
								</Button>
							</form>

							<List className={classes.root}>{this.state.sentMessages}</List>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(useStyles)(Board);
