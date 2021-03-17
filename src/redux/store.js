import { combineReducers, configureStore } from '@reduxjs/toolkit';
import deadlinesSlice from './deadlinesSlice';

export default configureStore({
	reducer: {
		deadlinesSlice: deadlinesSlice,
	},
});
