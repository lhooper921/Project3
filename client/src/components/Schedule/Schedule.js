import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./Schedule.css";
import { format, compareAsc } from 'date-fns';
import Grid from '@material-ui/core/Grid';
import startOfWeek from 'date-fns/startOfWeek';

import company from '../Home/images/company.jpg';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';





// import {filter_drama} from '@material-ui/icons';

// import DatePicker from "./DatePickerComponent";

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
  table: {
    minWidth: 650,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
    textAlign: 'center',
  },
}));

function createData(name, mondayStart, mondayEnd, tuesdayStart, tuesdayEnd, wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd, saturdayStart, saturdayEnd, sundayStart, sundayEnd) {
  return { name, mondayStart, mondayEnd, tuesdayStart, tuesdayEnd, wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd, saturdayStart, saturdayEnd, sundayStart, sundayEnd };
}

const rows = [
  createData("Ben", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "Off", "Off", "Off", "Off"),
  createData("Henry", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "Off", "Off", "Off", "Off"),
  createData("Marcus", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "Off", "Off", "Off", "Off"),
  createData("Buddy", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "Off", "Off", "Off", "Off"),
  createData("Scarlet", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "8:00am", "5:00pm", "Off", "Off", "Off", "Off"),
];

export default function BasicTable() {
  const classes = useStyles();
  const date = new Date();

  const todaysDate = format(date, 'MM.dd.yyyy');

  return (
    <div>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img src={company} alt="Logo" width="220px" />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <h1> Department Schedule <ScheduleIcon fontSize= "large"/></h1>
              <h4> Today's Date: {todaysDate}</h4>
            </Paper>
          </Grid>


 <Grid item xs={12}>
<Paper className={classes.paper}>
 
            
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>  <h2>< CalendarTodayIcon fontSize= "large"/> Week of: ______ - _________   </h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Employee Name</TableCell>
                            <TableCell align="right">Monday Start </TableCell>
                            <TableCell align="right">Monday End</TableCell>
                            <TableCell align="right">Tuesday Start</TableCell>
                            <TableCell align="right">Tuesday End</TableCell>
                            <TableCell align="right">Wednesday Start</TableCell>
                            <TableCell align="right">Wednesday End</TableCell>
                            <TableCell align="right">Thursday Start</TableCell>
                            <TableCell align="right">Thursday End</TableCell>
                            <TableCell align="right">Friday Start</TableCell>
                            <TableCell align="right">Friday End</TableCell>
                            <TableCell align="right">Saturday Start</TableCell>
                            <TableCell align="right">Saturday End</TableCell>
                            <TableCell align="right">Sunday Start</TableCell>
                            <TableCell align="right">Sunday End</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right"> {row.mondayStart}</TableCell>
                              <TableCell align="right">{row.mondayEnd} </TableCell>
                              <TableCell align="right">{row.tuesdayStart}</TableCell>
                              <TableCell align="right">{row.tuesdayEnd}</TableCell>
                              <TableCell align="right">{row.wednesdayStart}</TableCell>
                              <TableCell align="right">{row.wednesdayEnd}</TableCell>
                              <TableCell align="right">{row.thursdayStart}</TableCell>
                              <TableCell align="right">{row.thursdayEnd}</TableCell>
                              <TableCell align="right">{row.fridayStart}</TableCell>
                              <TableCell align="right">{row.fridayEnd}</TableCell>
                              <TableCell align="right">{row.saturdayStart}</TableCell>
                              <TableCell align="right">{row.saturdayEnd}</TableCell>
                              <TableCell align="right">{row.sundayStart}</TableCell>
                              <TableCell align="right">{row.sundayEnd}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>  <h2>< CalendarTodayIcon fontSize= "large"/> Week of: ______ - _________   </h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Employee Name</TableCell>
                            <TableCell align="right">Monday Start </TableCell>
                            <TableCell align="right">Monday End</TableCell>
                            <TableCell align="right">Tuesday Start</TableCell>
                            <TableCell align="right">Tuesday End</TableCell>
                            <TableCell align="right">Wednesday Start</TableCell>
                            <TableCell align="right">Wednesday End</TableCell>
                            <TableCell align="right">Thursday Start</TableCell>
                            <TableCell align="right">Thursday End</TableCell>
                            <TableCell align="right">Friday Start</TableCell>
                            <TableCell align="right">Friday End</TableCell>
                            <TableCell align="right">Saturday Start</TableCell>
                            <TableCell align="right">Saturday End</TableCell>
                            <TableCell align="right">Sunday Start</TableCell>
                            <TableCell align="right">Sunday End</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right"> {row.mondayStart}</TableCell>
                              <TableCell align="right">{row.mondayEnd} </TableCell>
                              <TableCell align="right">{row.tuesdayStart}</TableCell>
                              <TableCell align="right">{row.tuesdayEnd}</TableCell>
                              <TableCell align="right">{row.wednesdayStart}</TableCell>
                              <TableCell align="right">{row.wednesdayEnd}</TableCell>
                              <TableCell align="right">{row.thursdayStart}</TableCell>
                              <TableCell align="right">{row.thursdayEnd}</TableCell>
                              <TableCell align="right">{row.fridayStart}</TableCell>
                              <TableCell align="right">{row.fridayEnd}</TableCell>
                              <TableCell align="right">{row.saturdayStart}</TableCell>
                              <TableCell align="right">{row.saturdayEnd}</TableCell>
                              <TableCell align="right">{row.sundayStart}</TableCell>
                              <TableCell align="right">{row.sundayEnd}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>






         
            
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>

  );
}

