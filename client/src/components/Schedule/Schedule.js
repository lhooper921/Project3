import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import DatePicker from "./DatePickerComponent";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  return { name, monday, tuesday, wednesday, thursday, friday, saturday, sunday};
}

const rows = [
  createData("Ben", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "Off", "Off"),
  createData("Henry", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "Off", "Off"),
  createData("Marcus", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "Off", "Off"),
  createData("Buddy", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "Off", "Off"),
  createData("Scarlet", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "8:00am - 5:00pm", "Off", "Off"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
	  <div>
		<div class= "row">
<div class = "col s1"></div>
<div class = "col s10">
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
	
	<div class = "col s1"></div>
	
	</div></div>
  );
}

