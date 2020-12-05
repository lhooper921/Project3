
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import TimeOffElement from './TimeOffElement';
import { format, compareAsc } from 'date-fns';
import { List, TextField, Button, Paper, Grid, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
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
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},

});

class TimeOff extends Component {
	constructor() {
		super();
		this.state = {
			requests: [],
			newRequest: {
				name: '',
				firstDate: '',
				lastDate: '',
				requestType: '',
				comment: ''
			},

		};

		this.onSubmit = this.onSubmit.bind(this);
		this.changeName = this.changeName.bind(this);
		this.changeFirstDate = this.changeFirstDate.bind(this);
		this.changeLastDate = this.changeLastDate.bind(this);
		this.changeRequestType = this.changeRequestType.bind(this);
		this.changeComment = this.changeComment.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:4000/app/requests').then((response) => {
			const requests = response.data.map((request) => (
				<TimeOffElement name={request.name} firstDate={request.firstDate} lastDate={request.lastDate} requestType={request.requestType} comment={request.comment} key={request.id} />
			));

			this.setState({
				requests: requests
			});
		});


	}



	changeName(event) {
		this.setState({
			newRequest: {
				...this.state.newRequest,
				name: event.target.value
			}
		});
	}
	changeFirstDate(event) {
		this.setState({
			newRequest: {
				...this.state.newRequest,
				firstDate: event.target.value
			}
		});
	}
	changeLastDate(event) {
		this.setState({
			newRequest: {
				...this.state.newRequest,
				lastDate: event.target.value
			}
		});
	}

	changeRequestType(event) {
		this.setState({
			newRequest: {
				...this.state.newRequest,
				requestType: event.target.value
			}
		});
	}
	changeComment(event) {
		this.setState({
			newRequest: {
				...this.state.newRequest,
				comment: event.target.value
			}
		});
	}

	onSubmit(event) {
		event.preventDefault();


		const newRequest = {
			name: this.state.newRequest.name,
			firstDate: this.state.newRequest.firstDate,
			lastDate: this.state.newRequest.lastDate,
			requestType: this.state.newRequest.requestType,
			comment: this.state.newRequest.comment

		};

		axios
			.post('http://localhost:4000/app/request', newRequest)
			.then((response) => console.log('New Request:', response.data));

		this.setState({
			newRequest: {
				name: '',
				firstDate: '',
				lastDate: '',
				requestType: '',
				comment: ''
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
							<h2>Time Off Requests</h2>
							<form className={classes.root} noValidate autoComplete="off">
								<TextField
									id="name"
									label="Name"
									onChange={this.changeName}
									value={this.state.newRequest.name}
								/>
								<TextField
									align="right"
									id="firstDate"
									type="date"
									InputLabelProps={{ shrink: true }}
									label="First Date"
									onChange={this.changeFirstDate}
									value={this.state.newRequest.firstDate}
								/>
								<TextField
									align="right"
									id="lastDate"
									type="date"
									label="Last Date"
									InputLabelProps={{ shrink: true }}
									onChange={this.changeLastDate}
									value={this.state.newRequest.lastDate}
								/>


								<FormControl className={classes.formControl}>
									<InputLabel id="requestType">Request Type</InputLabel>
									<Select
										id="requestType"

										onChange={this.changeRequestType}
										value={this.state.newRequest.requestType}
									>
										<MenuItem value={"Paid Time Off (PTO)"}>Paid Time Off (PTO)</MenuItem>
										<MenuItem value={"Unpaid Time Off"}>Unpaid Time Off</MenuItem>
										<MenuItem value={"Other (Specify in comments"}>Other (Specify in comments)</MenuItem>
									</Select>
								</FormControl>







								<TextField
									id="comment"
									label="Comment"
									onChange={this.changeComment}
									value={this.state.newRequest.comment}
								/>
								<Button variant="contained" color="primary"   onClick={this.onSubmit}>
									Create Request
								</Button>
							</form>
						</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper} elevation={3}>


							<List className={classes.root}>{this.state.requests}</List>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}



export default withStyles(useStyles)(TimeOff);