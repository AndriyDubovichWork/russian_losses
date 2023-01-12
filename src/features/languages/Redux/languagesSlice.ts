import { createSlice } from '@reduxjs/toolkit';
import { TermsType } from '../../../types/terms';

type InitislStateType = {
	terms: TermsType;
	selectedLanguage: 'ua' | 'en';
};

const initialState: InitislStateType = {
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
	selectedLanguage: 'ua',
};

const LanguagesSlice = createSlice({
	name: 'languages',
	initialState,
	reducers: {
		setTerms: (state, action) => {
			state.terms = action.payload;
		},
		setLanguage: (state, action) => {
			state.selectedLanguage = action.payload;
		},
	},
});

export const { setTerms, setLanguage } = LanguagesSlice.actions;
export default LanguagesSlice.reducer;
