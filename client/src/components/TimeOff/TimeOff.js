import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import User from '../Home/User';

import { FormControl, Paper, Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, FormHelperText, Input, InputLabel, Avatar, MenuItem, Select } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '25px',
		marginRight: '25px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'lightgray'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '25ch',
	},
}));

function createData(name, avatar, firstDateOff, lastDateOff, requestReason, comments, requestStatus) {
	return { name, avatar, firstDateOff, lastDateOff, requestReason, comments, requestStatus };
}

const rows = [
	createData("Ben", <Avatar>BK</Avatar>, "8/11/2021", "8/19/2021", "Vacation", "BAHAMAS!", "Pending"),
	createData("Henry", <Avatar>HZ</Avatar>, "1/11/2021", "1/11/2021", "Medical", "", "Pending"),
	createData("Marcus", <Avatar>MP</Avatar>, "3/16/2021", "3/19/2021", "Vacation", "", "Pending"),
	createData("Ben", <Avatar>BK</Avatar>, "2/11/2021", "2/13/2021", "Other", "Moving", "Pending"),
	createData("Ben", <Avatar>BK</Avatar>, "8/11/2022", "8/19/2022", "Vacation", "", "Pending"),
	createData("Ben", <Avatar>BK</Avatar>, "8/11/2023", "8/19/2023", "Vacation", "", "Pending"),

];

export default function TimeOff() {
	const classes = useStyles();
	const [requestReason, setRequestReason] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const handleChange = (event) => {
		setRequestReason(event.target.value);


	};
	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Paper className={classes.paper}>
							<h2>User</h2>
							<User />
						</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper}>
							<h2>Request Time Off</h2>
							<Grid container spacing={6}>


								<Grid item xs={4}>
									<Paper className={classes.paper}>	<FormControl>
										<InputLabel htmlFor="fn-input">First Date Off</InputLabel>
										<Input id="fn-input" aria-describedby="fn-helper-text" />
										{/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
									</FormControl></Paper>
								</Grid>

								<Grid item xs={4}>
									<Paper className={classes.paper}>	<FormControl>
										<InputLabel htmlFor="fn-input">Last Date Off</InputLabel>
										<Input id="fn-input" aria-describedby="fn-helper-text" />
										{/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
									</FormControl></Paper>
								</Grid>

								<Grid item xs={4}>
									<Paper className={classes.paper}> Request Type	<FormControl className={classes.formControl}>
										<InputLabel id="demo-simple-select-label">Select</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={requestReason}
											onChange={handleChange}
										>
											<MenuItem value={10}>Vacation</MenuItem>
											<MenuItem value={20}>Medical</MenuItem>
											<MenuItem value={30}>Other (describe in comments)</MenuItem>
										</Select>
									</FormControl>
									</Paper>
								</Grid>

								<Grid item xs={8}>
									<Paper className={classes.paper}>	<FormControl>
										<InputLabel htmlFor="fn-input">Comments</InputLabel>
										<Input id="fn-input" aria-describedby="fn-helper-text" />
										{/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
									</FormControl></Paper>
								</Grid>
								<Grid item xs={4}>
									<Paper className={classes.paper}>	
									<Button variant="contained" color="primary">
										Submit Request
									</Button>
									</Paper>
								</Grid>
							</Grid>




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



