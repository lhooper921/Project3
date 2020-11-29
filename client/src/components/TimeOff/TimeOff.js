import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import User from '../Home/User';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';








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

export default function TimeOff() {
	const classes = useStyles();

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
							<div>
							<TextField
          label="Date(s) of Request"
          id="margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
        />
								<TextField
          label="Date(s) of Request"
          id="margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
        />

		   <TextField
          id="standard-full-width"
          label="Comments"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
		</div>
		<Button variant="contained" >
  Submit
</Button>
						</Paper>
					</Grid>

				
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<h2>All Requests</h2>
							
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}



