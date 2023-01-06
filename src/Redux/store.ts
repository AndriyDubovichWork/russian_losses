import { configureStore } from '@reduxjs/toolkit';
import LossesReducer from '../features/TodaysLosses/Redux/LossesSlice';

const store = configureStore({
	reducer: {
		losses: LossesReducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
