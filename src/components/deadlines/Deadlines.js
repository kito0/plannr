import React, { useEffect } from 'react';
import {
	Card,
	CardActions,
	CardContent,
	IconButton,
	Typography,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import './css/deadlines.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	GetDeadlines,
	NewDeadline,
	EditDeadline,
	DeleteDeadline,
} from '../../redux/deadlines';

export default function Deadlines() {
	const dispatch = useDispatch();
	const deadlines = useSelector((state) => state.deadlinesSlice.deadlines);

	useEffect(() => {
		GetDeadlines(dispatch);
	}, [deadlines]);

	return (
		<div className="deadlines">
			<ul>
				{deadlines.map((deadline) => (
					<Card className="card">
						<CardContent className="card_content">
							<Typography variant="h4">{deadline.category}</Typography>
							<Typography gutterBottom>{deadline.description}</Typography>
							<Typography variant="caption">{deadline.dueDate}</Typography>
						</CardContent>
						<CardActions className="card_footer">
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
				))}
			</ul>
		</div>
	);
}
