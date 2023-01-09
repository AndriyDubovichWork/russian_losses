import { configureStore } from '@reduxjs/toolkit';
import LastDaysStatisticsReducer from '../features/Chart/Redux/LastDaysStatisticsSlice';
import LossesReducer from '../features/TodaysLosses/Redux/LossesSlice';

const store = configureStore({
	reducer: {
		losses: LossesReducer,
		LastDaysStatistics: LastDaysStatisticsReducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
