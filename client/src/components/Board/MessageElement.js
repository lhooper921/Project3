import React from 'react';
import { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Paper from '@material-ui/core/Paper';

class MessageElement extends Component {
	
	state = {};
	render() { 

		return (
			<div>
				<Paper style={{background:'#F0F0F0', marginBottom: '5px'}}>
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt={this.props.name} src="./media/user.png" />
					</ListItemAvatar>
					<ListItemText
						primary={this.props.title}
						secondary={
							<React.Fragment>
								<Typography component="span" variant="body2" color="textPrimary">
									{this.props.name}
								</Typography>
								{' — '}
								{this.props.message}
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider variant="inset" component="li" /></Paper>
			</div>
		);
	}
}

export default MessageElement;
