import React from 'react';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = (theme) => ({
	table: {
		minWidth: 650,
		height: '300px'
	},
	row1: {
		backgroundColor: '#2196F3 ',
		fontColor: 'white',
		color: 'white'
	},
	row2: {
		backgroundColor: 'lightblue',
		fontColor: 'white'
	}
});

class ScheduleElement extends Component {
	state = {};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<ListItem alignItems="flex-start">
					<ListItemText
						primary={'Week: ' + this.props.weekNumber + '/53'}
						secondary={
							<React.Fragment>
								<TableContainer component={Paper}>
									<Table className={this.table} aria-label="simple table">
										<TableHead>
											<TableRow className={classes.row1}>
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
											<TableRow key={this.props.weekNumber} className={classes.row2}>
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
