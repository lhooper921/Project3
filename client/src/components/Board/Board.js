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
<<<<<<< HEAD
import "./Board.css"
import image from '../Home/images/bluebanner.jpg';
import pushPin from '../Home/images/pushPinBlue.png';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
=======
import Icon from '@material-ui/core/Icon';

import image from '../Home/images/bannerImage.jpg';

>>>>>>> 58d9347e404be58e960f3a3c9a0ac04474f22f5f
const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '25px',
		marginRight: '25px',
		// backgroundColor: 'floralwhite',
		padding: '25px'
	},
	// paper: {
	// 	padding: theme.spacing(2),

	// 	textAlign: 'center',
	// 	color: theme.palette.text.secondary,
	// 	backgroundColor: 'lightgray',
	// 	// marginLeft: '25px',
	// 	// marginRight: '25px',
	// 	marginBottom: '25px'
	// },
	paper: {
		padding: theme.spacing(3),
		paddingBottom: theme.spacing(4),
		paddingTop: theme.spacing(0),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'lightgray',
		marginBottom: '25px'
		
	},
	paper2: {

		
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'white',

	},

	paper3: {

		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'white',
		
	},
	texts: {
		margin: 'auto',
		width: '50%',
		border: '3px solid teal',
		padding: '30px',
		backgroundColor: 'white'
	},
	input: {
<<<<<<< HEAD
		backgroundColor: 'white',
		
=======
		backgroundColor: 'lightblue'
>>>>>>> 58d9347e404be58e960f3a3c9a0ac04474f22f5f
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		backgroundColor: 'white'

	},

	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	paper2: {
		padding: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.text.secondary,
		backgroundColor: 'lightblue'
	},
	element: {
		marginLeft: '20px'
	},
	button: {
		marginLeft: '20px',
		marginTop: '30px'
		// backgroundColor: 'orange'
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
						name: message.name,
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
						name: message.name2,
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
			name2: this.state.newMessage.name2,
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
				...this.state.newMessage,
				title: '',
				message: ''
			}
		});

		this.componentDidMount();
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

		const newAnnoucement = {
			content: this.state.newAnnoucement.content,
			title: this.state.newAnnoucement.title,
			date: mm + '/' + dd + '/' + yyyy
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
		this.setState({ user: event.target.value });
		this.state.user = event.target.value;

		axios.get('http://localhost:4000/app/userid', { params: { id: event.target.value } }).then((response) => {
			console.log(response.data[0].firstName);
			this.setState({
				newMessage: {
					name2: response.data[0].firstName,
					name: this.state.newMessage.name,
					sender: this.state.newMessage.sender
				}
			});
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<div className="container-fluid">
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<img class="hero-image" src={image} alt="Logo" width="100%" height="250px" style={{}} />
<<<<<<< HEAD
						</Grid>

						<Grid item xs={12} md={4}>
							<Paper elevation={3} className={classes.paper}>
							<img src={pushPin} alt="Logo" width="55px" height="40px" />
								<h2>Announcements</h2>
								<Paper className={classes.paper3} style={{paddingTop:'20px'}}>
									Create New Annoucement
									<form className={classes.root}  noValidate autoComplete="off">

								
										<TextField
										style={{width:'50%'}}
											id="title"
											label="Title"
											variant="outlined"
											onChange={this.changeATitle}
											value={this.state.newAnnoucement.title}
										/>
									
										<TextField
										style={{width:'80%', margin: '25px', alignContent:'center'}}
											id="annoucement"
											label="Annoucement"
											variant="outlined"
											multiline
											rows={4}
											onChange={this.changeAContent}
											value={this.state.newAnnoucement.content}
										/>
										
										<Button variant="contained" color="primary" onClick={this.onASubmit}>
											Post
								</Button>
									</form>
									</Paper>
									<br />
									<Paper elevation={3} className={classes.paper2}>
									<List className={classes.root}>{this.state.annoucements}</List>
									</Paper>
							</Paper>
						</Grid>

						
						<Grid item xs={8}>
							<Paper className={classes.paper} elevation={3}>
							<img src={pushPin} alt="Logo" width="55px" height="40px" />
								<h2><EmailIcon fontSize="large"/>   Inbox</h2>
								<List  className={classes.root}>{this.state.receivedMessages}</List>
								<br />
							</Paper>
							<Grid item xs={12}>
								<Paper className={classes.paper} elevation={3}>
								<img src={pushPin} alt="Logo" width="55px" height="40px" />
									<h2><TelegramIcon fontSize="large"/>Send Message</h2>

									<Paper className={classes.paper3} elevation={6} style={{paddingTop:'20px'}}>
										Create New Message
									<form className={classes.root}  noValidate autoComplete="off">
										<FormControl className={classes.formControl}
											style={{width:'25%', margin: '25px', alignContent:'center'}}>
											<InputLabel id="demo-simple-select-label">User</InputLabel>
											<Select
											
											variant="outlined"
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
										style={{width:'25%', margin: '25px', alignContent:'center'}}
											id="title"
											variant="outlined"
											label="Title"
											onChange={this.changeTitle}
											value={this.state.newMessage.title}
										/>

										<TextField
										style={{width:'90%', alignContent:'center'}}
										
											id="message"
											label="Message"
											variant="outlined"
											multiline
											rows={4}
											onChange={this.changeMessage}
											value={this.state.newMessage.message}
										/>
										<Button variant="contained" color="primary" style={{margin: '15px', alignContent:'center'}} onClick={this.onSubmit}>
											Create  
								</Button>
								
									</form>
</Paper>
<h4 style={{ margin: '25px'}}>Sent Messages</h4>
									<List  className={classes.root}>{this.state.sentMessages}</List>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
				</div>
=======
						</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.paper}>
							<h2>Announcements</h2>
							<Paper className={classes.paper2} elevation={5}>
								<form className={classes.root} className={classes.input} noValidate autoComplete="off">
									<TextField
										id="title"
										label="Title"
										onChange={this.changeATitle}
										value={this.state.newAnnoucement.title}
									/>
									<TextField
										id="announcement"
										label="Announcement"
										onChange={this.changeAContent}
										value={this.state.newAnnoucement.content}
									/>
									<br />

									<Button
										className={classes.button}
										variant="contained"
										color="primary"
										onClick={this.onASubmit}
										size="large"
									>
										Post
									</Button>
								</form>
							</Paper>
							<br />

							<List className={classes.root}>{this.state.annoucements}</List>
						</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper} elevation={3}>
							<h2>Inbox</h2>
							<List className={classes.root}>{this.state.receivedMessages}</List>
							<br />
						</Paper>
						<br />

						<Paper className={classes.paper} elevation={3}>
							<h2>Sent</h2>

							<Paper className={classes.paper2} elevation={5}>
								<form className={classes.root} className={classes.input} noValidate autoComplete="off">
									<FormControl className={classes.formControl}>
										<InputLabel id="demo-simple-select-label" className={classes.element}>
											User
										</InputLabel>
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
										className={classes.element}
										id="title"
										label="Title"
										onChange={this.changeTitle}
										value={this.state.newMessage.title}
									/>

									<TextField
										className={classes.element}
										id="message"
										label="Message"
										onChange={this.changeMessage}
										value={this.state.newMessage.message}
									/>
									<Button
										variant="contained"
										color="primary"
										onClick={this.onSubmit}
										className={classes.button}
										endIcon={<Icon>send</Icon>}
										size="large"
									>
										Send
									</Button>
								</form>
							</Paper>
							<br />

							<List className={classes.root}>{this.state.sentMessages}</List>
						</Paper>
					</Grid>
				</Grid>
				<br />
				<br />
>>>>>>> 58d9347e404be58e960f3a3c9a0ac04474f22f5f
			</div>
		);
	}
}

export default withStyles(useStyles)(Board);
