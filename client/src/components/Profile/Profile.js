import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Input } from '@material-ui/core';
import {formControl} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Register from '../Register/Register.js';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
const useStyles=(theme)=>({
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
})
class Profile extends Component {
	constructor () {
		super ();
		this.state = {
			id:'',
			firstName: 'kanoa',
			lastName: '',
			email: '',
			department: '',
			position: '',
			phone: '',
			address:'',
		}
	}
componentDidMount(){
	const userId = this.loadStoraged();
            axios.get('http://localhost:4000/app/userid', { params: { id: userId } }).then((response) => {
                  this.setState({
                        id: response.data[0]._id,
                        fristName: response.data[0].firstName,
						lastName: response.data[0].lastName,
						email:response.data[0].email,
                        department: response.data[0].department,
						position: response.data[0].position,
						phone:response.data[0].phone,
						address:response.data[0].address,
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
	render(){
		const{classes}=this.props;
		return (
			<div>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<h2>Personal info</h2>
							<Grid item xs={12} sm={6}>
          						<Paper className={classes.paper}>xs=12 sm=6</Paper>
								{/* <Avatar alt="User Image" src="img location here" className={classes.large} /> */}
								</Grid>
							<Grid item xs={12} sm={6}>
							<Paper classname={classes.paper}>xs=12 sm=6</Paper>
							<h1>User Info</h1> 
							<p1>Name:{this.state.firstName} {this.state.lastName}</p1>
							<p2>Department:{this.state.department} Position:{this.state.position}</p2>
							<p3>Contact Info:{this.state.email}
							{this.state.phone}</p3>
							</Grid>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									user bio
								</Paper>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
		)
	}
}


export default withStyles(useStyles)(Profile);
