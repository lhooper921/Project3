
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TimeOffElement from './TimeOffElement';

import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import User from '../Home/User';

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

class TimeOff extends Component {
	constructor() {
		super();
		this.state = {
			requests: [],
			newRequest: {
                name:'',
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
                name:'',
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
							< User />
						</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper} elevation={3}>
							<h2>Time Off Requests</h2>
							<form className={classes.root} noValidate autoComplete="off">
								<TextField
									id="name"
									label="Name"
									onChange={this.changeName}
									value={this.state.newRequest.name}
								/>
								<TextField
									id="firstDate"
									label="First Date"
									onChange={this.changeFirstDate}
									value={this.state.newRequest.firstDate}
								/>
								<TextField
									id="lastDate"
									label="Last Date"
									onChange={this.changeLastDate}
									value={this.state.newRequest.lastDate}
								/>
									<TextField
									id="requestType"
									label="Request Type"
									onChange={this.changeRequestType}
									value={this.state.newRequest.requestType}
								/>
										<TextField
									id="comment"
									label="Comment"
									onChange={this.changeComment}
									value={this.state.newRequest.comment}
								/>
								<Button variant="contained" color="primary" onClick={this.onSubmit}>
									Create
								</Button>
							</form>

							<List className={classes.root}>{this.state.requests}</List>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}




















































// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Component } from 'react';
// import User from '../Home/User';
// import DatePickerComponent from '../Schedule/DatePickerComponent'
// import TimeOffElement from './TimeOffElement';
// import { FormControl, Paper, Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, FormHelperText, Input, InputLabel, Avatar, MenuItem, Select } from '@material-ui/core';
// import axios from 'axios';
// import { withStyles } from '@material-ui/core/styles';

// import TimeOffRequestForm from './TimeOffRequestForm';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 		marginLeft: '25px',
// 		marginRight: '25px'
// 	},
// 	paper: {
// 		padding: theme.spacing(2),
// 		textAlign: 'center',
// 		color: theme.palette.text.secondary,
// 		backgroundColor: 'lightgray'
// 	},
// 	textField: {
// 		marginLeft: theme.spacing(1),
// 		marginRight: theme.spacing(1),
// 		width: '25ch',
// 	},
// }));

// function createData(avatar, name, firstDateOff, lastDateOff, requestReason, comments, requestStatus) {
// 	return { avatar, name, firstDateOff, lastDateOff, requestReason, comments, requestStatus };
// }

// const rows = [
// 	createData(<Avatar>BK</Avatar>, "Ben", "8/11/2021", "8/19/2021", "Vacation", "BAHAMAS!", "Pending"),
// 	createData(<Avatar>HZ</Avatar>, "Henry", "1/11/2021", "1/11/2021", "Medical", "", "Pending"),
// 	createData(<Avatar>MP</Avatar>, "Marcus", "3/16/2021", "3/19/2021", "Vacation", "", "Pending"),
// 	createData(<Avatar>BK</Avatar>, "Ben", "2/11/2021", "2/13/2021", "Other", "Moving", "Pending"),
// 	createData(<Avatar>BK</Avatar>, "Ben", "8/11/2022", "8/19/2022", "Vacation", "", "Pending"),
// 	createData(<Avatar>BK</Avatar>, "Ben", "8/11/2023", "8/19/2023", "Vacation", "", "Pending"),

// ];
// class TimeOff extends Component {





// 	constructor() {
// 		super();
// 		this.state = {
// 			requests: [],
// 			newRequest: {
//                 name:'',
// 				firstDate: '',
// 				lastDate: '',
// 				requestType: '',
// 				comment: ''
// 			},
		
// 		};

// 		this.onSubmit = this.onSubmit.bind(this);
//         this.changeName = this.changeName.bind(this);
//         this.changeFirstDate = this.changeFirstDate.bind(this);
// 		this.changeLastDate = this.changeLastDate.bind(this);
// 		this.changeRequestType = this.changeRequestType.bind(this);
//         this.changeComment = this.changeComment.bind(this);
// 	}

// 	componentDidMount() {
// 		axios.get('http://localhost:4000/app/requests').then((response) => {
// 			const requests = response.data.map((request) => (
// 				<TimeOffElement name={request.name} firstDate={request.firstDate} lastDate={request.lastDate} requestType={request.requestType} comment={request.comment} key={request.id} />
// 			));

// 			this.setState({
// 				requests: requests
// 			});
// 		});

	
// 	}

// 	//Messages vvvv

// 	changeName(event) {
// 		this.setState({
// 			newRequest: {
// 				...this.state.newRequest,
// 				name: event.target.value
// 			}
// 		});
// 	}
// 	changeFirstDate(event) {
// 		this.setState({
// 			newRequest: {
// 				...this.state.newRequest,
// 				firstDate: event.target.value
// 			}
// 		});
//     }
// 	changeLastDate(event) {
// 		this.setState({
// 			newRequest: {
// 				...this.state.newRequest,
// 				lastDate: event.target.value
// 			}
// 		});
// 	}
	
// 	changeRequestType(event) {
// 		this.setState({
// 			newRequest: {
// 				...this.state.newRequest,
// 				requestType: event.target.value
// 			}
// 		});
//     }
//     changeComment(event) {
// 		this.setState({
// 			newRequest: {
// 				...this.state.newRequest,
// 				comment: event.target.value
// 			}
// 		});
// 	}
	
// 	onSubmit(event) {
// 		event.preventDefault();

	
// 		const newRequest = {
// 			name: this.state.newRequest.name,
// 			firstDate: this.state.newRequest.firstDate,
//             lastDate: this.state.newRequest.lastDate,
//             requestType: this.state.newRequest.requestType,
//             comment: this.state.newRequest.comment
            
// 		};

// 		axios
// 		.post('http://localhost:4000/app/request', newRequest)
// 		.then((response) => console.log('New Request:', response.data));

// 		this.setState({
// 			newRequest: {
//                 name:'',
// 				firstDate: '',
// 				lastDate: '',
// 				requestType: '',
// 				comment: ''
// 			}
// 		});

// 		this.componentDidMount();
// 	}


	// render() {
	// 	const { classes } = this.props;
	// 	return (
	// 		<div>
	// 			<div className={classes.root}>
	// 				<Grid container spacing={3}>
	// 					<Grid item xs={4}>
	// 						<Paper className={classes.paper}>
	// 							<h2>User</h2>
	// 							<User />
	// 						</Paper>
	// 					</Grid>
	// 					<Grid item xs={8}>
	// 						<Paper className={classes.paper}>
	// 						<h2>Request Time Off</h2>
	// 						<form className={classes.root} noValidate autoComplete="off">
	// 							<TextField
	// 								id="name"
	// 								label="Name"
	// 								onChange={this.changeName}
	// 								value={this.state.newRequest.name}
	// 							/>
	// 							<TextField
	// 								id="firstDate"
	// 								label="First Date Off"
	// 								onChange={this.changeFirstDate}
	// 								value={this.state.newRequest.firstDate}
	// 							/>
    //                             	<TextField
	// 								id="lastDate"
	// 								label="Last Date Off"
	// 								onChange={this.changeLastDate}
	// 								value={this.state.newRequest.lastDate}
	// 							/>
	// 							<TextField
	// 								id="requestType"
	// 								label="Request Type"
	// 								onChange={this.changeRequestType}
	// 								value={this.state.newRequest.requestType}
	// 							/>
    //                             <TextField
	// 								id="comment"
	// 								label="Comment"
	// 								onChange={this.changeComment}
	// 								value={this.state.newRequest.comment}
	// 							/>
	// 							<Button variant="contained" color="primary" onClick={this.onSubmit}>
	// 								Create
	// 							</Button>
	// 						</form>


								{/* <h2>Request Time Off</h2>
								<Grid container spacing={6}>


									<Grid item xs={4}>
										<Paper className={classes.paper}>	<FormControl>
											<InputLabel htmlFor="fn-input">First Date Off</InputLabel>
											<Input
												id="fn-input" aria-describedby="fn-helper-text"
												onChange={this.changeFirstDate}
												value={this.state.firstDate}

											/>
										
										</FormControl></Paper>
									</Grid>

									<Grid item xs={4}>
										<Paper className={classes.paper}>	<FormControl>
											<InputLabel htmlFor="lastDate">Last Date Off</InputLabel>
											<Input id="lastDate" aria-describedby="fn-helper-text"
												onChange={this.changeLastDate}
												value={this.state.lastDate}

											/>
										
										</FormControl></Paper>
									</Grid>

									<Grid item xs={4}>
										<Paper className={classes.paper}> 	<FormControl className={classes.formControl}>
											<InputLabel id="demo-simple-select-label">Request Type</InputLabel>
											<Input id="requestType" aria-describedby="fn-helper-text"
												onChange={this.changeRequestType}
												value={this.state.requestType}

											/>
										</FormControl>
										</Paper>
									</Grid>

									<Grid item xs={8}>
										<Paper className={classes.paper}>	<FormControl>
											<InputLabel htmlFor="fn-input">Comments</InputLabel>
											<Input id="comment" aria-describedby="fn-helper-text"
												onChange={this.changeComment}
												value={this.state.comment}

											/>
										
										</FormControl> */}



{/* 
										</Paper>
									</Grid>
									<Grid item xs={4}>
										<Paper className={classes.paper}>

											<Button onClick={this.onSubmit} variant="contained" color="primary">
												Submit Request
									</Button> */}
{/* 
										</Paper>
									</Grid>
								</Grid> */}



{/* 
							</Paper>
						</Grid>


						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<h2>All Requests</h2>


								<Typography>
									<TableContainer component={Paper}>
										<Table className={classes.table} aria-label="simple table">
											<TableHead>
												<TableRow><TableCell></TableCell>
													<TableCell>Employee Name</TableCell>
													<TableCell align="right">First Date Off </TableCell>
													<TableCell align="right">Last Date Off</TableCell>
													<TableCell align="right">Request Type</TableCell>
													<TableCell align="right">Comments</TableCell>
													<TableCell align="right">Status</TableCell>

												</TableRow>
											</TableHead>
											<TableBody>
												{rows.map((row) => (
													<TableRow key={row.name}>
														<TableCell component="th" scope="row">
															{row.avatar}
														</TableCell>
														<TableCell component="th" scope="row">
															{row.name}
														</TableCell>

														<TableCell align="right">{row.firstDateOff} </TableCell>
														<TableCell align="right">{row.lastDateOff}</TableCell>
														<TableCell align="right">{row.requestReason}</TableCell>
														<TableCell align="right">{row.comments}</TableCell>
														<TableCell align="right">{row.requestStatus}</TableCell>

													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Typography>



							</Paper>
						</Grid>
					</Grid>
				</div>
			</div >
		);
	}

} */}

export default withStyles(useStyles)(TimeOff);