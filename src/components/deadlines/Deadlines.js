import React, { useEffect } from 'react';
import './css/deadlines.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetDeadlines, NewDeadline } from '../../redux/deadlines';
import DeadlineCard from './DeadlineCard';

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
					<DeadlineCard key={deadline._id} deadline={deadline} />
				))}
			</ul>
		</div>
	);
}
