import { configureStore } from '@reduxjs/toolkit';
import LossesReducer from './features/TodaysLosses/Redux/LossesSlice';

export default configureStore({
	reducer: {
		losses: LossesReducer,
	},
});
