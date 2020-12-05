import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { format, compareAsc } from 'date-fns';
import { List, TextField, Button, Paper, Grid, MenuItem, FormControl, Select, InputLabel, } from '@material-ui/core';
import axios from 'axios';
import User from '../Home/User';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



import company from '../Home/images/company.jpg';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import CheckBox from './CheckBox';
import CreateIcon from '@material-ui/icons/Create';

import CalendarCard from './CalendarCard'


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
    // this.state = {
    //   schedules: [],
    //   newSchedule: {

    //     date: '',
    //     monday: '',
    //     tuesday: '',
    //     wednesday: '',
    //     thursday: '',
    //     friday: '',
    //     saturday: '',
    //     sunday: '',
    //   },

    // };


  }

  render() {
    const date = new Date();
    function createData(date, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
      return { date, monday, tuesday, wednesday, thursday, friday, saturday, sunday };
    }

    const rows = [
      createData("01/01/2021", "On", "On", "On", "On", "On", "Off", "Off"),

    ];


    const todaysDate = format(date, 'MM.dd.yyyy');
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <Grid container spacing={3}>

            <Grid item xs={3}>
              <Paper className={classes.paper}>
                {/* <img src={company} alt="Logo" width="220px" /> */}
                <CalendarCard />
              </Paper>
            </Grid>

            <Grid item xs={9}>
              <Paper>
                <h1> User Schedule <ScheduleIcon fontSize="large" /></h1>
                <h4> Today's Date: {todaysDate}</h4>
              </Paper>
            
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Current Week</h2>
              </Paper>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Schedule Date</TableCell>
                      <TableCell align="left">Monday</TableCell>
                      <TableCell align="left">Tuesday</TableCell>
                      <TableCell align="left">Wednesday</TableCell>
                      <TableCell align="left">Thursday</TableCell>
                      <TableCell align="left">Friday</TableCell>
                      <TableCell align="left">Saturday</TableCell>
                      <TableCell align="left">Sunday</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">{row.monday}</TableCell>
                        <TableCell align="left">{row.tuesday}</TableCell>
                        <TableCell align="left">{row.wednesday}</TableCell>
                        <TableCell align="left">{row.thursday}</TableCell>
                        <TableCell align="left">{row.friday}</TableCell>
                        <TableCell align="left">{row.saturday}</TableCell>
                        <TableCell align="left">{row.sunday}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            

            
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Next Week</h2>
              </Paper>
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Schedule Date</TableCell>
                      <TableCell align="left">Monday</TableCell>
                      <TableCell align="left">Tuesday</TableCell>
                      <TableCell align="left">Wednesday</TableCell>
                      <TableCell align="left">Thursday</TableCell>
                      <TableCell align="left">Friday</TableCell>
                      <TableCell align="left">Saturday</TableCell>
                      <TableCell align="left">Sunday</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.date}>

                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">{row.monday}</TableCell>
                        <TableCell align="left">{row.tuesday}</TableCell>
                        <TableCell align="left">{row.wednesday}</TableCell>
                        <TableCell align="left">{row.thursday}</TableCell>
                        <TableCell align="left">{row.friday}</TableCell>
                        <TableCell align="left">{row.saturday}</TableCell>
                        <TableCell align="left">{row.sunday}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
</Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>



                <h2 > Create New Schedule</h2>









                <TableContainer component={Paper}>

                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="left">Monday</TableCell>
                        <TableCell align="left">Tuesday</TableCell>
                        <TableCell align="left">Wednesday</TableCell>
                        <TableCell align="left">Thursday</TableCell>
                        <TableCell align="left">Friday</TableCell>
                        <TableCell align="left">Saturday</TableCell>
                        <TableCell align="left">Sunday</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>

                      <TableRow>

                        <TableCell align="left">	<TextField
                          align="right"
                          id="date"
                          type="date"
                          InputLabelProps={{ shrink: true }}
                          label="Select Date"
                        // onChange={this.changeDate}
                        // value={this.state.newSchedule.date}
                        /></TableCell>
                        <TableCell align="left"><CheckBox /></TableCell>
                        <TableCell align="left"><CheckBox /></TableCell>
                        <TableCell align="left"><CheckBox /></TableCell>
                        <TableCell align="left"><CheckBox /></TableCell>
                        <TableCell align="left"><CheckBox /></TableCell>
                        <TableCell align="left"><CheckBox /></TableCell>
                        <TableCell align="left"><CheckBox /></TableCell>
                      </TableRow>


                    </TableBody>

                  </Table>

                </TableContainer>

                <Button alignItems="right" variant="contained" color="primary">
                  Submit
</Button>

              </Paper>
            </Grid>




          </Grid>
        </div>
      </div>


    );
  }
}



export default withStyles(useStyles)(Schedule);


































