import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField, Button, Paper, Grid } from '@material-ui/core';
import axios from 'axios';
import { format, compareAsc } from 'date-fns';
import getISOWeek from 'date-fns/getISOWeek';
import add from 'date-fns/add'
import addWeeks from 'date-fns/addWeeks'
import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckBox() {
  const classes = useStyles();
  const [state, setState] = React.useState({
   
    monday: true,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log("checked");
    console.log(state)
  };


	const changeMonday = (event) => {
		setState({
			newSchedule: {
				...this.state.newSchedule,
				monday: event.target.value
			}
		});
	}

  
    const changeTuesday = (event) => {
	 setState({
			newSchedule: {
				...this.state.newSchedule,
				tuesday: event.target.value
			}
		});
  }
  const changeWednesday = (event) => {
 
		setState({
			newSchedule: {
				...this.state.newSchedule,
				wednesday: event.target.value
			}
		});
  }
  
  const changeThursday = (event) => {
		setState({
			newSchedule: {
				...this.state.newSchedule,
				thursday: event.target.value
			}
		});
  }

  const changeFriday = (event) => {
		setState({
			newSchedule: {
				...this.state.newSchedule,
				friday: event.target.value
			}
		});
  }

  const changeSaturday = (event) => {
 
		setState({
			newSchedule: {
				...state.newSchedule,
				saturday: event.target.value
			}
		});
  }
  const changeSunday = (event) => {
  
		setState({
			newSchedule: {
		
				sunday: event.target.value
			}
		});
	}


  const handleSubmit = (event) => {
		event.preventDefault();


		const newSchedule = {
		
			monday: this.state.newSchedule.monday,
			tuesday: this.state.newSchedule.tuesday,
			wednesday: this.state.newSchedule.wednesday,
      thursday: this.state.newSchedule.thursday,
      friday: this.state.newSchedule.friday,
      saturday: this.state.newSchedule.saturday,
      sunday: this.state.newSchedule.sunday,

		};

		axios
			.post('http://localhost:4000/app/schedule', newSchedule)
			.then((response) => console.log('New Schedule:', response.data));

		this.setState({
			newSchedule: {
				weekNumber: '',
				monday: '',
				tuesday: '',
				wednesday: '',
        thursday: '',
        friday:'',
        saturday:'',
        sunday:'',
			}
		});

		this.componentDidMount();
	}
  const { weekNumber, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = state;


  const date = new Date();
  const todaysDate = format(date, 'MM.dd.yyyy');
  // const { classes } = this.props;
// ===========Current Week
// Start of Week
var resultStartofWeek = startOfWeek(new Date(todaysDate), { weekStartsOn: 1 })
const startOfCurrentWeek = format(resultStartofWeek, 'EEEE.MM.dd.yyyy');
// End of Week
var resultEndOfCurrentWeek = endOfWeek(new Date(todaysDate), { weekStartsOn: 1 })
const endOfCurrentWeek = format(resultEndOfCurrentWeek, 'EEEE.MM.dd.yyyy');
// Week number /53
var weekNum1 = getISOWeek(new Date(todaysDate))

// ==============Next Week
// Add week to get Next Week
var resultWeek = addWeeks(new Date(todaysDate), 1)
const nextWeek = format(resultWeek, 'MM.dd.yyyy');
// Start of Week
var resultStartofWeek2 = startOfWeek(new Date(nextWeek), { weekStartsOn: 1 })
const startOfNextWeek = format(resultStartofWeek2, 'EEEE.MM.dd.yyyy');
// End of Week
var resultendOfNextWeek = endOfWeek(new Date(nextWeek), { weekStartsOn: 1 })
const endOfNextWeek = format(resultendOfNextWeek, 'EEEE.MM.dd.yyyy');



var weekNum2 =getISOWeek(new Date(resultWeek))

  return (
    <div className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select workdays</FormLabel>
          <FormGroup>
          <TextField disabled id="standard-disabled" name="weekNumber" label="Week Number" defaultValue={weekNum2} />
            <FormControlLabel
              control={<Checkbox checked={monday} onChange={changeMonday} name="monday" />}
              label="Monday"
            />
            <FormControlLabel
              control={<Checkbox checked={tuesday} onChange={changeTuesday} name="tuesday" />}
              label="Tuesday"
            />
            <FormControlLabel
              control={<Checkbox checked={wednesday} onChange={changeWednesday} name="wednesday" />}
              label="Wednesday"
            />
            <FormControlLabel
              control={<Checkbox checked={thursday} onChange={changeThursday} name="thursday" />}
              label="Thursday"
            />
            <FormControlLabel
              control={<Checkbox checked={friday} onChange={changeFriday} name="friday" />}
              label="Friday"
            />
            <FormControlLabel
              control={<Checkbox checked={saturday} onChange={changeSaturday} name="saturday" />}
              label="Saturday"
            />
            <FormControlLabel
              control={<Checkbox checked={sunday} onChange={changeSunday} name="sunday" />}
              label="Sunday"
            />
          </FormGroup>
          <FormHelperText>Leave Days Off Unselected</FormHelperText>
          <FormGroup> <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button></FormGroup>
        </FormControl>

     

      </form>
    </div>  
  );
}