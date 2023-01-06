import { createSlice } from '@reduxjs/toolkit';
import { LossesDataType } from '../../../types/losses';

type InitislStateType = {
	data: LossesDataType;
};

const initialState: InitislStateType = {
	data: {
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
};

const LossesSlice = createSlice({
	name: 'losses',
	initialState,
	reducers: {
		setLosses: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { setLosses } = LossesSlice.actions;
export default LossesSlice.reducer;
