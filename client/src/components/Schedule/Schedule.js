
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import ScheduleElement from './ScheduleElement';
import { format, compareAsc, getISOWeek, add, addWeeks, startOfWeek, endOfWeek } from 'date-fns';
import { List, TextField, Button, Paper, Grid, MenuItem, FormControl, Select, InputLabel, FormHelperText, } from '@material-ui/core';
import axios from 'axios';

import CreateIcon from '@material-ui/icons/Create';



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

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      schedules: [],
      newSchedule: {
        userId: '',
        weekNumber: '',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: '',
      },

    };

    this.onSubmit = this.onSubmit.bind(this);
    this.changeuserId = this.changeuserId.bind(this);
    this.changeweekNumber = this.changeweekNumber.bind(this);
    this.changemonday = this.changemonday.bind(this);
    this.changetuesday = this.changetuesday.bind(this);
    this.changewednesday = this.changewednesday.bind(this);
    this.changethursday = this.changethursday.bind(this);
    this.changefriday = this.changefriday.bind(this);
    this.changesaturday = this.changesaturday.bind(this);
    this.changesunday = this.changesunday.bind(this);

  }

  componentDidMount() {
    axios.get('http://localhost:4000/app/schedules').then((response) => {
      const schedules = response.data.map((schedule) => (
        <ScheduleElement
          userId={schedule.userId}
          weekNumber={schedule.weekNumber}
          monday={schedule.monday}
          tuesday={schedule.tuesday}
          wednesday={schedule.wednesday}
          thursday={schedule.thursday}
          friday={schedule.friday}
          saturday={schedule.saturday}
          sunday={schedule.sunday}
          key={schedule.id} />
      ));

      this.setState({
        schedules: schedules
      });
    });


  }
  changeuserId(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        userId: event.target.value
      }
    });
  }


  changeweekNumber(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        weekNumber: event.target.value
      }
    });
  }
  changemonday(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        monday: event.target.value
      }
    });
  }
  changetuesday(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        tuesday: event.target.value
      }
    });
  }

  changewednesday(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        wednesday: event.target.value
      }
    });
  }
  changethursday(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        thursday: event.target.value
      }
    });
  }

  changefriday(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        friday: event.target.value
      }
    });
  }
  changesaturday(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        saturday: event.target.value
      }
    });
  }
  changesunday(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        sunday: event.target.value
      }
    });
  }
  onSubmit(event) {
    event.preventDefault();


    const newSchedule = {
      userId: this.state.newSchedule.userId,
      weekNumber: this.state.newSchedule.weekNumber,
      monday: this.state.newSchedule.monday,
      tuesday: this.state.newSchedule.tuesday,
      wednesday: this.state.newSchedule.wednesday,
      thursday: this.state.newSchedule.thursday,
      friday: this.state.newSchedule.friday,
      saturday: this.state.newSchedule.saturday,
      sunday: this.state.newSchedule.sunday

    };

    axios
      .post('http://localhost:4000/app/schedule', newSchedule)
      .then((response) => console.log('New schedule:', response.data));

    this.setState({
      newSchedule: {
        userId: '',
        weekNumber: '',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: '',
      }
    });

    this.componentDidMount();
  }



  render() {

    const date = new Date();
    const todaysDate = format(date, 'MM.dd.yyyy');
    const { classes } = this.props;
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



    var weekNum2 = getISOWeek(new Date(resultWeek))


    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>

              <h3 > Create New Schedule <CreateIcon /></h3>
              <p>For the Week of: </p>
              <p>{startOfNextWeek} - {endOfNextWeek}</p>
              <p>Week # {weekNum2}/53</p>



              <form className={classes.root} noValidate autoComplete="off">

                <TextField
                  id="userId"
                  label="userId"
                  onChange={this.changeuserId}
                  value={this.state.newSchedule.userId}

                />
                <TextField
                  id="weekNumber"
                  label='Week Number'
                  type="number"
                  onChange={this.changeweekNumber}
                  value={this.state.newSchedule.weekNumber}
                />



                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Monday</InputLabel>
                  <Select
                    align="right"
                    id="monday"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                    label="Monday"
                    onChange={this.changemonday}
                    value={this.state.newSchedule.monday}
                  >
                    <MenuItem value={"Morning"}>Morning 6:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Mid"}>Mid 10:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Evening"}>Evening 3:00pm - 11:00pm </MenuItem>
                    <MenuItem value={"Off"}>Off </MenuItem>
                  </Select>
                  <FormHelperText>Select Shift</FormHelperText>
                </FormControl>




                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Tuesday</InputLabel>
                  <Select
                    align="right"
                    id="tuesday"
                    type='text'
                    label="Tuesday"
                    InputLabelProps={{ shrink: true }}
                    onChange={this.changetuesday}
                    value={this.state.newSchedule.tuesday}
                  >
                    <MenuItem value={"Morning"}>Morning 6:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Mid"}>Mid 10:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Evening"}>Evening 3:00pm - 11:00pm </MenuItem>
                    <MenuItem value={"Off"}>Off </MenuItem>
                  </Select>
                  <FormHelperText>Select Shift</FormHelperText>
                </FormControl>



                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Wednesday</InputLabel>
                  <Select
                    align="right"
                    id="wednesday"
                    type="text"
                    label="wednesday"
                    InputLabelProps={{ shrink: true }}
                    onChange={this.changewednesday}
                    value={this.state.newSchedule.wednesday}
                  >
                    <MenuItem value={"Morning"}>Morning 6:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Mid"}>Mid 10:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Evening"}>Evening 3:00pm - 11:00pm </MenuItem>
                    <MenuItem value={"Off"}>Off </MenuItem>
                  </Select>
                  <FormHelperText>Select Shift</FormHelperText>
                </FormControl>


                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Thursday</InputLabel>
                  <Select
                    id="thursday"
                    label="thursday"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                    onChange={this.changethursday}
                    value={this.state.newSchedule.thursday}
                  >
                    <MenuItem value={"Morning"}>Morning 6:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Mid"}>Mid 10:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Evening"}>Evening 3:00pm - 11:00pm </MenuItem>
                    <MenuItem value={"Off"}>Off </MenuItem>
                  </Select>
                  <FormHelperText>Select Shift</FormHelperText>
                </FormControl>





                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Friday</InputLabel>
                  <Select
                    id="friday"
                    label="friday"
                    type="text"
                    onChange={this.changefriday}
                    value={this.state.newSchedule.friday}
                    InputLabelProps={{ shrink: true }}

                  >
                    <MenuItem value={"Morning"}>Morning 6:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Mid"}>Mid 10:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Evening"}>Evening 3:00pm - 11:00pm </MenuItem>
                    <MenuItem value={"Off"}>Off </MenuItem>
                  </Select>
                  <FormHelperText>Select Shift</FormHelperText>
                </FormControl>




                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Saturday</InputLabel>
                  <Select
                    id="saturday"
                    label="saturday"
                    type="text"
                    onChange={this.changesaturday}
                    value={this.state.newSchedule.saturday}
                    InputLabelProps={{ shrink: true }}

                  >
                    <MenuItem value={"Morning"}>Morning 6:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Mid"}>Mid 10:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Evening"}>Evening 3:00pm - 11:00pm </MenuItem>
                    <MenuItem value={"Off"}>Off </MenuItem>
                  </Select>
                  <FormHelperText>Select Shift</FormHelperText>
                </FormControl>



                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Sunday</InputLabel>
                  <Select
                    id="sunday"
                    label="sunday"
                    type="time"
                    onChange={this.changesunday}
                    value={this.state.newSchedule.sunday}
                    InputLabelProps={{ shrink: true }}

                  >
                    <MenuItem value={"Morning"}>Morning 6:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Mid"}>Mid 10:00am - 3:00pm</MenuItem>
                    <MenuItem value={"Evening"}>Evening 3:00pm - 11:00pm </MenuItem>
                    <MenuItem value={"Off"}>Off </MenuItem>
                  </Select>
                  <FormHelperText>Select Shift</FormHelperText>
                </FormControl>



                <Button variant="contained" color="primary" onClick={this.onSubmit}>
                  Create schedule
								</Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper} elevation={3}>

              <h2>Current Week  </h2>
              <h4>{startOfCurrentWeek} - {endOfCurrentWeek}</h4>
              <p>{weekNum1}/53</p>
              <List className={classes.root}>{this.state.schedules}</List>
            </Paper>
            <Paper className={classes.paper} elevation={3}>

              <h2>Next Week  </h2>
              <h4>{startOfNextWeek} - {endOfNextWeek}</h4>
              <p>{weekNum2}/53</p>
              <List className={classes.root}>{this.state.schedules}</List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}



export default withStyles(useStyles)(Schedule);













































































