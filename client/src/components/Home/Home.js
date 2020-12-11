import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { format, compareAsc, getISOWeek, add, addWeeks, startOfWeek, endOfWeek } from 'date-fns';

import company from './images/company.jpg';
import User from './User';
// import Annoucement from './Annoucements';
// import Messagess from './Messages';
import MessageElement from '../Board/MessageElement';
import AnnoucementElement from '../Board/AnnoucementElement';
// import CurrentSchedule from './CurentSchedule';
import List from '@material-ui/core/List';

import ScheduleElement from '../Schedule/ScheduleElement';

import axios from 'axios';

const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '25px',
		marginRight: '25px',
		backgroundColor: 'whitesmoke',
		padding: '25px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'lightgray'
	},
	messages: {
		width: '100%',
		backgroundColor: 'white'
	}
});

class Home extends Component {
	state = {
		id: '',
		name: '',
		lastname: '',
		department: '',
		position: '',
		messages: [],
		allmessages: [],
		announcements: [],
		schedules: [],
		allSchedules: [],
		userSchedules: []
	};

	componentDidMount() {
		const userId = this.loadStoraged();

		axios.get('http://localhost:4000/app/userid', { params: { id: userId } }).then((response) => {
			this.setState({
				id: response.data[0]._id,
				name: response.data[0].firstName,
				lastname: response.data[0].lastName,
				department: response.data[0].department,
				position: response.data[0].position
			});
		});

		// axios.get('http://localhost:4000/app/messages').then((response) => {
		// 	const messages = response.data.map((message) => (
		// 		<MessageElement name={message.name} title={message.title} message={message.message} key={message.id} />
		// 	));

		// 	this.setState({
		// 		messages: messages
		// 	});
		// });

		axios.get('http://localhost:4000/app/messages').then((response) => {
			response.data.map((message) => {
				if (message.recipient === this.state.id) {
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
				messages: Rmessages
			});
		});

		axios.get('http://localhost:4000/app/annoucements').then((response) => {
			const annoucements = response.data.map((annoucement) => (
				<AnnoucementElement title={annoucement.title} content={annoucement.content} date={annoucement.date} />
			));

			this.setState({
				announcements: annoucements
			});
		});

		axios.get('http://localhost:4000/app/schedules').then((response) => {
			response.data.map((schedule) => {
				const newSchedule = {
					userId: schedule.userId,
					weekNumber: schedule.weekNumber,
					monday: schedule.monday,
					tuesday: schedule.tuesday,
					wednesday: schedule.wednesday,
					thursday: schedule.thursday,
					friday: schedule.friday,
					saturday: schedule.saturday,
					sunday: schedule.sunday
				};
				if (schedule.userId === userId) {
					this.state.userSchedules.push(newSchedule);
				} else {
					this.state.allSchedules.push(newSchedule);
				}
			});
			const date = new Date();
			const todaysDate = format(date, 'MM.dd.yyyy');
			var weekNum1 = getISOWeek(new Date(todaysDate));

			this.state.userSchedules.map((schedule) => {
				if (schedule.weekNumber == weekNum1) {
					const AuxSchedule = (
						<ScheduleElement
							userId={schedule.userId}
							weekNumber={schedule.weekNumber}
							monday={schedule.monday}
							tuesday={schedule.tuesday}
							wednesday={schedule.wednesday}
							thursday={schedule.thursday}
							friday={schedule.friday}
							saturday={schedule.saturday}
							sunday={schedule.sunday}
							key={schedule.id}
						/>
					);

					this.setState({
						schedules: AuxSchedule
					});
				}
			});
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

	render() {
		const { classes } = this.props;

		return (
			<div>
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<img src={company} alt="Logo" width="500px" />
							</Paper>
						</Grid>
						<Grid item xs={4}>
							<Paper className={classes.paper}>
								<h2>User</h2>
								<User
									lastname={this.state.lastname}
									name={this.state.name}
									department={this.state.department}
									position={this.state.position}
								/>
							</Paper>
						</Grid>
						<Grid item xs={8}>
							{/* <Paper className={classes.paper}>
								<h2>Current Schedule</h2>
								<CurrentSchedule />
							</Paper> */}

							<Paper className={classes.paper} elevation={3}>
								<h2>Current Week </h2>

								<List className={classes.root}>{this.state.schedules}</List>
							</Paper>
						</Grid>

						<Grid item xs={4}>
							<Paper className={classes.paper}>
								<h2>Annoucements</h2>
								{/* <Annoucement /> */}
								<List className={classes.messages}>{this.state.announcements}</List>
							</Paper>
						</Grid>
						<Grid item xs={8}>
							<Paper className={classes.paper}>
								<h2>Messages</h2>
								{/* <Messagess /> */}
								<List className={classes.messages}>{this.state.messages}</List>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles)(Home);
