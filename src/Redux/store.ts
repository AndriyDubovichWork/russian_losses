import { configureStore } from '@reduxjs/toolkit';
import LastDaysStatisticsReducer from '../features/Chart/Redux/ChartSlice';
import LanguagesReducer from '../features/languages/Redux/languagesSlice';
import LossesReducer from '../features/TodaysLosses/Redux/LossesSlice';

const store = configureStore({
	reducer: {
		losses: LossesReducer,
		LastDaysStatistics: LastDaysStatisticsReducer,
		languages: LanguagesReducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
