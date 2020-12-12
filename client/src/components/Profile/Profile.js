import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Input } from '@material-ui/core';
import {formControl} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Register from '../Register/Register.js';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import '../Profile/Profile.css';

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
