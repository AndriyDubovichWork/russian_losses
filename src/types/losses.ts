import { TermType } from './terms';

export type LossesType = {
	personnel_units: number;
	tanks: number;
	armoured_fighting_vehicles: number;
	artillery_systems: number;
	mlrs: number;
	aa_warfare_systems: number;
	planes: number;
	helicopters: number;
	vehicles_fuel_tanks: number;
	warships_cutters: number;
	cruise_missiles: number;
	uav_systems: number;
	special_military_equip: number;
	atgm_srbm_systems: number;
};

export type LossesDataWithOutIncreaseType = {
	date: string;
	day: number;
	resource: string;
	stats: LossesType;
};

export type LossesDataType = {
	date: string;
	day: number;
	resource: string;
	stats: LossesType;
	increase: LossesType;
};
export type TodayLossesType = {
	terms: TermType;
	losses: number;
	increase: number;
};

export type LossesNamesArrayType = {
	Todaylosses: TodayLossesType;
	keyOfLosses: string;
}[];
