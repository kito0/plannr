import {
	setDeadlines,
	newDeadline,
	editDeadline,
	deleteDeadline,
} from './deadlinesSlice.js';
import axios from 'axios';

const api = 'https://veraplannr.herokuapp.com/deadlines';

export const GetDeadlines = async (dispatch) => {
	try {
		await axios.get(api).then((res) => dispatch(setDeadlines(res.data.data)));
	} catch (err) {
		console.log(err);
	}
};

export const NewDeadline = async (dispatch, deadline) => {
	try {
		await axios
			.post(api, deadline, { headers: { 'Content-Type': 'application/json ' } })
			.then((res) => dispatch(newDeadline(res.data.data)));
	} catch (err) {
		console.log(err);
	}
};

export const EditDeadline = async (dispatch, id) => {
	try {
		await axios.put(`${api}/${id}`).then(() => dispatch(editDeadline(id)));
	} catch (err) {
		console.log(err);
	}
};

export const DeleteDeadline = async (dispatch, id) => {
	try {
		await axios.delete(`${api}/${id}`).then(() => dispatch(deleteDeadline(id)));
	} catch (err) {
		console.log(err);
	}
};
