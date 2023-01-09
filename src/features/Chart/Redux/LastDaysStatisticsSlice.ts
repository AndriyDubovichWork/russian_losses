import { createSlice } from '@reduxjs/toolkit';
import { LossesDataWithOutIncreaseType } from '../../../types/losses';

type initialStateType = {
	statistic: LossesDataWithOutIncreaseType[];
};

const initialState: initialStateType = {
	statistic: [
		{
			date: '',
			day: 0,
			resource: '',
			stats: {
				personnel_units: 0,
				tanks: 0,
				armoured_fighting_vehicles: 0,
				artillery_systems: 0,
				mlrs: 0,
				aa_warfare_systems: 0,
				planes: 0,
				helicopters: 0,
				vehicles_fuel_tanks: 0,
				warships_cutters: 0,
				cruise_missiles: 0,
				uav_systems: 0,
				special_military_equip: 0,
				atgm_srbm_systems: 0,
			},
		},
	],
};

const LastDaysStatisticsSlice = createSlice({
	name: 'LastDaysStatistics',
	initialState,
	reducers: {
		setLastDaysInfo: (state, action) => {
			state.statistic = action.payload;
		},
	},
});

export const { setLastDaysInfo } = LastDaysStatisticsSlice.actions;
export default LastDaysStatisticsSlice.reducer;
