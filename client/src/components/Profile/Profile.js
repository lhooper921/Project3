import React, { Component } from 'react';
<<<<<<< Updated upstream
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Input } from '@material-ui/core';
=======
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Input, Hidden } from '@material-ui/core';
>>>>>>> Stashed changes
import {formControl} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
<<<<<<< Updated upstream
import Register from '../Register/Register.js';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import '../Profile/Profile.css';
=======
import Register from '../Register/Register';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import '../Profile/Profile.css';
import image from '../Home/images/bluebanner.jpg';
import { Link, NavLink } from 'react-router-dom';

>>>>>>> Stashed changes

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
		backgroundColor: 'lightgray',
	}
})
<<<<<<< Updated upstream
class Profile extends Component {
	constructor () {
		super ();
		this.state = {
			id:'',
			firstName: 'Jim',
			lastName: 'Halpert',
			email: 'J.Halpert@aol.com',
			department: 'Sales',
			position: 'Salesman',
			phone: '909-428-6500',
			address:'764 Ender Way, Scanton Pa 91911',
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
                        <h2>Personal Info</h2>
                        <Grid item xs={12} sm={6}>
                              <Paper className={classes.paper}>
                                  <img alt='User Image' src='https://i.imgflip.com/2ev98a.jpg' width='300' height='200'/>
                                  {/* <Avatar alt='User Image' src='https://i.imgflip.com/2ev98a.jpg' className={classes.large}/> */}
                                  </Paper>
                            </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <h1>User Info</h1> 
                                <p1><strong>Name: </strong>{this.state.firstName} {this.state.lastName}<br /></p1>
                                <p2><strong>Department: </strong>{this.state.department} <br/><strong>Position: </strong>{this.state.position}<br /></p2>
                                <p3><strong>Email: </strong>{this.state.email} <br/>
								<strong>Phone #:</strong> {this.state.phone}<br /></p3>
                            </Paper>
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
=======



class Profile extends Component {
	constructor () {
		super ();
		this.state = {
			id:'',
			firstName: 'Jim',
			lastName: 'Halpert',
			email: 'J.Halpert@aol.com',
			department: 'Sales',
			position: 'Salesman',
			phone: '909-428-6500',
			address:'764 Ender Way, Scanton Pa 91911',
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
        <div ClassName="container-fluid">
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Hidden smDown>
						<Grid item xs={12}>
							<img class="hero-image" src={image} alt="Logo" width="100%" height="250px" style={{}} />
						</Grid>
					</Hidden>
					<Grid item xs={12}>
						<h1>Personal Info</h1>
					</Grid>
					<Grid item xs={12} md={6}>
					<p1>
						<strong>Name: </strong>{this.state.firstName} {this.state.lastName} <br/> 
						<strong>Department: </strong>{this.state.department} <br/>
						<strong>Position: </strong>{this.state.position} <br/>
						<strong>Email: </strong>{this.state.email} <br />
						<strong>Phone #: </strong>{this.state.phone} <br />
						<strong>Address: </strong> {this.state.address} <br/>
						</p1>
					</Grid>
					<Grid item xs={12} md={6}>
						<strong>Update User Info: </strong>
						<li><Link to="../Register/Register">Update/ Register New User</Link></li>
					</Grid>
				</Grid>
			</div>
		</div>
    )
}
}


export default withStyles(useStyles)(Profile);



>>>>>>> Stashed changes
