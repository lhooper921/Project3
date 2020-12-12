import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
// import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/TextField';

import image from '../Home/images/bluebanner.jpg';
import { createMuiTheme } from '@material-ui/core/styles';
import './Profile.css'
import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '100px',
		marginRight: '100px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'lightgray'
	}
}));

export default function Profile() {
	const classes = useStyles();

	return (
		<div className="container-fluid">
			<div className={classes.root}>
				<Grid container spacing={3}>
				<Hidden smDown>
						<Grid item xs={12}>
							<img class="hero-image" src={image} alt="Logo" width="100%" height="250px" style={{}} />
						</Grid>
						</Hidden>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<h2>Personal info</h2>

							{/* <form>
								<Grid container>
									<Grid item xs={6}>
										<Input
											name="firstName"
											label="first Name"
											value=""
											onChange=""
										/>
										<Input
											variant="outlined"
											label="Last Name"
											name="lastName"
											value=""
											onChange=""
										/>
										<Input
											variant="outlined"
											label="Phone Number"
											value=""
											onChange=""
										/>
										<Input
											variant="outlined"
											label="Email"
											value=""
											onChange=""
										/>
									</Grid>
									<Grid item xs={6}>
										<Controls.Select
											name="departmentId"
											label="Department"
											value=""
											onChange=""
											options=""
										/>
										<Input
											variant="outlined"
											label="Address"
											value=""
											onChange=""
										/>
										<Input
											variant="outlined"
											label="Position"
											value=""
											onChange=""
										/>
										<formControl classname={classes.formControl}>
											<InputLabel id="Departments">Choose your Department</InputLabel>
											<Select labelId="Departmnets" value={department} onChange={handleChange}>
												<MenuItem value="Sales">Sales</MenuItem>
												<MenuItem value="Finance">Finance</MenuItem>
												<MenuItem value="Customer Service">Customer Service</MenuItem>
											</Select>
										</formControl>
									</Grid>
								</Grid>
							</form> */}
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
