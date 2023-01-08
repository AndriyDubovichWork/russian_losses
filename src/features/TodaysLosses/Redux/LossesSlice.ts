import { createSlice } from '@reduxjs/toolkit';
import { LossesDataType } from '../../../types/losses';
import { TermsType } from '../../../types/terms';

type InitislStateType = {
	data: LossesDataType;
	terms: TermsType;
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
	terms: {
		personnel_units: {
			title: 'Особовий склад',
			icon: 'https://russianwarship.rip/images/icons/icon-people.svg',
		},
		tanks: {
			title: 'Танки',
			icon: 'https://russianwarship.rip/images/icons/icon-tank.svg',
		},
		armoured_fighting_vehicles: {
			title: 'Бойові броньовані машини',
			icon: 'https://russianwarship.rip/images/icons/icon-bbm.svg',
		},
		artillery_systems: {
			title: 'Артилерійські системи',
			icon: 'https://russianwarship.rip/images/icons/icon-art.svg',
		},
		mlrs: {
			title: 'Реактивні системи залпового вогню',
			icon: 'https://russianwarship.rip/images/icons/icon-rszv.svg',
		},
		aa_warfare_systems: {
			title: 'Системи протиповітряної оборони',
			icon: 'https://russianwarship.rip/images/icons/icon-ppo.svg',
		},
		planes: {
			title: 'Літаки',
			icon: 'https://russianwarship.rip/images/icons/icon-plane.svg',
		},
		helicopters: {
			title: 'Гелікоптери',
			icon: 'https://russianwarship.rip/images/icons/icon-helicopter.svg',
		},
		vehicles_fuel_tanks: {
			title: 'Автомобільна техніка та цистерни з ПММ',
			icon: 'https://russianwarship.rip/images/icons/icon-auto.svg',
		},
		warships_cutters: {
			title: 'Військові кораблі та катери',
			icon: 'https://russianwarship.rip/images/icons/icon-ship.svg',
		},
		uav_systems: {
			title: 'Безпілотні літальні апарати',
			icon: 'https://russianwarship.rip/images/icons/icon-bpla.svg',
		},
		special_military_equip: {
			title: 'Спец. техніка',
			icon: 'https://russianwarship.rip/images/icons/icon-special.svg',
		},
		atgm_srbm_systems: {
			title: 'Оперативно-тактичні ракетні комплекси та тактичні ракетні комплекси',
			icon: 'https://russianwarship.rip/images/icons/icon-trk.svg',
		},
		cruise_missiles: {
			title: 'Крилаті ракети',
			icon: 'https://russianwarship.rip/images/icons/icon-rocket.svg',
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
