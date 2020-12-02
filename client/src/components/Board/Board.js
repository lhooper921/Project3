import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MessageElement from './MessageElement';
import AnnoucementElement from './AnnoucementElement';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
	}
});

class Board extends Component {
	constructor() {
		super();
		this.state = {
			messages: [],
			annoucements: [],
			newMessage: {
				name: '',
				title: '',
				message: ''
			},
			newAnnoucement: {
				title: '',
				content: '',
				date: ''
			}
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.changeName = this.changeName.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
		this.changeMessage = this.changeMessage.bind(this);

		this.onASubmit = this.onASubmit.bind(this);
		this.changeATitle = this.changeATitle.bind(this);
		this.changeAContent = this.changeAContent.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:4000/app/messages').then((response) => {
			const messages = response.data.map((message) => (
				<MessageElement name={message.name} title={message.title} message={message.message} key={message.id} />
			));

			this.setState({
				messages: messages
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
	}

	//Messages vvvv

	changeName(event) {
		this.setState({
			newMessage: {
				...this.state.newMessage,
				name: event.target.value
			}
		});
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
			title: this.state.newMessage.title,
			message: this.state.newMessage.message
		};

		axios
			.post('http://localhost:4000/app/message', newMessage)
			.then((response) => console.log('New Message:', response.data));

		this.setState({
			newMessage: {
				message: '',
				title: '',
				name: ''
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

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Paper className={classes.paper}>
							<h2>Announcements</h2>
							<form className={classes.root} noValidate autoComplete="off">
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
									Create
								</Button>
							</form>

							<List className={classes.root}>{this.state.annoucements}</List>
						</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper} elevation={3}>
							<h2>Messages</h2>
							<form className={classes.root} noValidate autoComplete="off">
								<TextField
									id="name"
									label="Name"
									onChange={this.changeName}
									value={this.state.newMessage.name}
								/>
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

							<List className={classes.root}>{this.state.messages}</List>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(useStyles)(Board);
