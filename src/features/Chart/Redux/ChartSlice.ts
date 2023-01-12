import { createSlice } from '@reduxjs/toolkit';
import { LossesDataType } from '../../../types/losses';

type initialStateType = {
	statistic: LossesDataType[];
	selected: string;
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
			increase: {
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
	selected: 'personnel_units',
};

const ChartSlice = createSlice({
	name: 'LastDaysStatistics',
	initialState,
	reducers: {
		setLastDaysInfo: (state, action) => {
			state.statistic = action.payload;
		},
		setSelectedKeyOfLosses: (state, action) => {
			state.selected = action.payload;
		},
	},
});

export const { setLastDaysInfo, setSelectedKeyOfLosses } = ChartSlice.actions;
export default ChartSlice.reducer;
