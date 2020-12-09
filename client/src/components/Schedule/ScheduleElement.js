import React from 'react';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { format, compareAsc, getISOWeek, add, addWeeks, startOfWeek, endOfWeek } from 'date-fns';

const useStyles = (theme) => ({
	table: {
		minWidth: 650,
	},
});

class ScheduleElement extends Component {
	state = {};
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
			<div>
				<ListItem alignItems="flex-start">

					<ListItemText
						primary={this.props.weekNumber}
						secondary={
							<React.Fragment>
								<TableContainer component={Paper}>
									<Table className={this.table} aria-label="simple table">
										<TableHead>
											<TableRow>

												<TableCell>Monday</TableCell>
												<TableCell>Tuesday</TableCell>
												<TableCell>Wednesday</TableCell>
												<TableCell>Thursday</TableCell>
												<TableCell>Friday</TableCell>
												<TableCell>Saturday</TableCell>
												<TableCell>Sunday</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow key={this.props.weekNumber}>
												<TableCell align="left">{this.props.monday}</TableCell>
												<TableCell align="left">{this.props.tuesday}</TableCell>
												<TableCell align="left">{this.props.wednesday}</TableCell>
												<TableCell align="left">{this.props.thursday}</TableCell>
												<TableCell align="left">{this.props.friday}</TableCell>
												<TableCell align="left">{this.props.saturday}</TableCell>
												<TableCell align="left">{this.props.sunday}</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />
			</div>
		);
	}
}

export default withStyles(useStyles)(ScheduleElement);
