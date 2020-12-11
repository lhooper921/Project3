import React, { Component } from 'react';

import image from "./images/bannerImage.jpg"
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import company from './images/company.jpg';
import User from './User';
import Annoucement from './Annoucements';
import Messagess from './Messages';
import MessageElement from '../Board/MessageElement';
import AnnoucementElement from '../Board/AnnoucementElement';
import CurrentSchedule from './CurentSchedule';
import List from '@material-ui/core/List';

import axios from 'axios';
import pushPin from './images/pushPinBlue.png'
import './Home.css'
// import { createMuiTheme } from '@material-ui/core/styles';
// const theme = createMuiTheme({
// 	palette: {
// 	  primary: {
// 		// light: will be calculated from palette.primary.main,
// 		main: '#ff4400',
// 		// dark: will be calculated from palette.primary.main,
// 		// contrastText: will be calculated to contrast with palette.primary.main
// 	  },
// 	  secondary: {
// 		light: '#0066ff',
// 		main: '#5e749b',
// 		// dark: will be calculated from palette.secondary.main,
// 		contrastText: '#ffcc00',
// 	  },
// 	  // Used by `getContrastText()` to maximize the contrast between
// 	  // the background and the text.
// 	  contrastThreshold: 3,
// 	  // Used by the functions below to shift a color's luminance by approximately
// 	  // two indexes within its tonal palette.
// 	  // E.g., shift from Red 500 to Red 300 or Red 700.
// 	  tonalOffset: 0.2,
// 	},
//   });

const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '25px',
		marginRight: '25px',

	},
	paper: {
		padding: theme.spacing(3),
		paddingBottom: theme.spacing(4),
		paddingTop: theme.spacing(0),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'rgb(242,238,183)'
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
		announcements: []
	};

	componentDidMount() {
		const userId = this.loadStoraged();

		axios.get('http://localhost:4000/app/userid', { params: { id: userId } }).then((response) => {
			console.log('User From the DB:', response.data);

			this.setState({
				id: response.data[0]._id,
				name: response.data[0].firstName,
				lastname: response.data[0].lastName,
				department: response.data[0].department,
				position: response.data[0].position
			});

			console.log(this.state);
		});

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
				<AnnoucementElement title={annoucement.title} content={annoucement.content} date={annoucement.date} />
			));

			this.setState({
				announcements: annoucements
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
			<div className="container-fluid">
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							
	

								<img class ="hero-image" src={image} alt="Logo" width="100%" height="250px" style={{}}/>
							
						</Grid>
						<Grid item xs={12} md={4}>
							<Paper elevation={3} className={classes.paper}>
								<img  src={pushPin} alt="Logo" width="55px" height="40px"  />
								<h2>User </h2>
								<User
									lastname={this.state.lastname}
									name={this.state.name}
									department={this.state.department}
									position={this.state.position}
								/>
							</Paper>
						</Grid>
						<Grid item xs={12} md={8}>
							<Paper elevation={3} className={classes.paper}>
								<img  src={pushPin} alt="Logo" width="55px" height="40px"  />
								<h2>Current Schedule</h2>
								<CurrentSchedule />
							</Paper>
						</Grid>

						<Grid item xs={12} md={4}>
							<Paper elevation={3} className={classes.paper}>
								<h2>Annoucements</h2>
								{/* <Annoucement /> */}
								<List className={classes.messages}>{this.state.announcements}</List>
							</Paper>
						</Grid>
						<Grid item xs={12} md={8}>
							<Paper elevation={3} className={classes.paper}>
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
