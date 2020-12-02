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
import startOfWeek from 'date-fns/startOfWeek';





// import {filter_drama} from '@material-ui/icons';

// import DatePicker from "./DatePickerComponent";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

});

function createData(name, mondayStart, mondayEnd, tuesdayStart, tuesdayEnd, wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd, saturdayStart, saturdayEnd, sundayStart, sundayEnd) {
  return { name, mondayStart, mondayEnd, tuesdayStart, tuesdayEnd, wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd, saturdayStart, saturdayEnd, sundayStart, sundayEnd};
}
const time =  <input type="time" id="appt" name="appt"></input>
const rows = [
  createData("Ben", time, time, time, time, time, time, time , time, time, time, time, time, time, time),
  createData("Henry",time, time, time, time, time, time, time , time, time, time, time, time, time, time),
  createData("Marcus",time, time, time, time, time, time, time , time, time, time, time, time, time, time),
  createData("Buddy", time, time, time, time, time, time, time , time, time, time, time, time, time, time),
  createData("Scarlet",time, time, time, time, time, time, time , time, time, time, time, time, time, time),
];

export default function ScheduleCreator() {
  const classes = useStyles();
const date = new Date();

const todaysDate = format(date, 'MM.dd.yyyy');

  return (
    <div>

 

{/* Select Week 1 or Week 2 */}
<div class="row">
        <div class ="col s12">
   <h1> Department Schedule Editor ---Manager page </h1>
   <h4> Today's Date: {todaysDate}</h4>
   </div> 
           

     <ul class="collapsible">
    <li>
    <div class="collapsible-header"><div class="row"><div class="col s12"><i class="material-icons"></i><h3>Week of   </h3></div></div></div>
      <div class="collapsible-body"><span>      <div class="row">
        <div class="col s1"></div>
        <div class="col s10">
         
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
        </div>
        <div class="col s1"></div>
      </div></span></div>
    </li>
    <li>
      <div class="collapsible-header"><div class="row"><div class="col s12"><h3>Week of nextdate1-nextdate2</h3></div></div></div>
      <div class="collapsible-body"><span><div class="row">
        <div class="col s1"></div>
        <div class="col s10">
         
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Employee Name</TableCell>
                  <TableCell align="right">Monday</TableCell>
                  <TableCell align="right">Tuesday</TableCell>
                  <TableCell align="right">Wednesday</TableCell>
                  <TableCell align="right">Thursday</TableCell>
                  <TableCell align="right">Friday</TableCell>
                  <TableCell align="right">Saturday</TableCell>
                  <TableCell align="right">Sunday</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.monday}</TableCell>
                    <TableCell align="right">{row.tuesday}</TableCell>
                    <TableCell align="right">{row.wednesday}</TableCell>
                    <TableCell align="right">{row.thursday}</TableCell>
                    <TableCell align="right">{row.friday}</TableCell>
                    <TableCell align="right">{row.saturday}</TableCell>
                    <TableCell align="right">{row.sunday}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div class="col s1"></div>
      </div></span></div>
    </li>
   
  </ul>   
      
        
      </div>



     
    </div>

  );
}









