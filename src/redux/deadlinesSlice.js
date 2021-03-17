import { createSlice } from '@reduxjs/toolkit';

export const deadlinesSlice = createSlice({
	name: 'deadlines',
	initialState: {
		deadlines: [],
		loading: true,
	},
	reducers: {
		setDeadlines: (state, action) => {
			return {
				...state,
				deadlines: [...action.payload],
				loading: false,
			};
		},
		newDeadline: (state, action) => {
			return {
				...state,
				deadlines: [action.payload, ...state.deadlines],
			};
		},
		editDeadline: (state, action) => {
			const deadlines = state.deadlines.map((deadline) => {
				if (deadline._id === action._id) {
					deadline = action.payload;
				}
				return deadline;
			});
			return { ...state, deadlines: [...deadlines] };
		},
		deleteDeadline: (state, action) => {
			return {
				...state,
				deadlines: state.deadlines.filter(
					(deadline) => deadline._id !== action.payload
				),
			};
		},
	},
});

export const {
	setDeadlines,
	newDeadline,
	editDeadline,
	deleteDeadline,
} = deadlinesSlice.actions;

export default deadlinesSlice.reducer;
