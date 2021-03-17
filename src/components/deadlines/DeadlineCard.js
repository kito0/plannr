import React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	IconButton,
	Typography,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { EditDeadline, DeleteDeadline } from '../../redux/deadlines';
import './css/deadline.card.css';

export default function DeadlineCard({ deadline }) {
	const dispatch = useDispatch();

	return (
		<div className="deadlinecard">
			<Card className="card_root">
				<CardContent className="card_content">
					<Typography variant="h4">{deadline.category}</Typography>
					<Typography gutterBottom>{deadline.description}</Typography>
					<Typography variant="caption">{deadline.dueDate}</Typography>
				</CardContent>
				<CardActions className="card_buttons">
					<IconButton className="button">
						<Edit />
					</IconButton>
					<IconButton
						onClick={() => {
							DeleteDeadline(dispatch, deadline._id);
						}}
						className="button"
					>
						<Delete />
					</IconButton>
				</CardActions>
			</Card>
		</div>
	);
}
