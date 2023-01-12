import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import getLastNDaysInfo from '../api/getLastNDaysInfo';
import { setLastDaysInfo } from '../Redux/ChartSlice';

import './style.scss';
import { LossesDataType } from '../../../types/losses';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		(async () => {
			// get last 40 days statistic
			const res: LossesDataType[] = await getLastNDaysInfo(41);

			// add increase to stats
			res.forEach((day, i: number) => {
				if (i === 0) {
					day.increase = {
						aa_warfare_systems: 0,
						armoured_fighting_vehicles: 0,
						artillery_systems: 0,
						atgm_srbm_systems: 0,
						cruise_missiles: 0,
						helicopters: 0,
						mlrs: 0,
						personnel_units: 0,
						planes: 0,
						special_military_equip: 0,
						tanks: 0,
						uav_systems: 0,
						vehicles_fuel_tanks: 0,
						warships_cutters: 0,
					};
				} else {
					day.increase = {
						aa_warfare_systems: day.stats.aa_warfare_systems - res[i - 1].stats.aa_warfare_systems,
						armoured_fighting_vehicles:
							day.stats.armoured_fighting_vehicles - res[i - 1].stats.armoured_fighting_vehicles,
						artillery_systems: day.stats.artillery_systems - res[i - 1].stats.artillery_systems,
						atgm_srbm_systems: day.stats.atgm_srbm_systems - res[i - 1].stats.atgm_srbm_systems,
						cruise_missiles: day.stats.cruise_missiles - res[i - 1].stats.cruise_missiles,
						helicopters: day.stats.helicopters - res[i - 1].stats.helicopters,
						mlrs: day.stats.mlrs - res[i - 1].stats.mlrs,
						personnel_units: day.stats.personnel_units - res[i - 1].stats.personnel_units,
						planes: day.stats.planes - res[i - 1].stats.planes,
						special_military_equip:
							day.stats.special_military_equip - res[i - 1].stats.special_military_equip,
						tanks: day.stats.tanks - res[i - 1].stats.tanks,
						uav_systems: day.stats.uav_systems - res[i - 1].stats.uav_systems,
						vehicles_fuel_tanks:
							day.stats.vehicles_fuel_tanks - res[i - 1].stats.vehicles_fuel_tanks,
						warships_cutters: day.stats.warships_cutters - res[i - 1].stats.warships_cutters,
					};
				}
			});

			res.shift();

			// set last days statistic
			dispatch(setLastDaysInfo(res));
		})();
	}, []);
	// get last days statistic from Redux
	const statistic = useAppSelector((state) => state.LastDaysStatistics.statistic);
	const selectedUnits: string = useAppSelector((state) => state.LastDaysStatistics.selected);
	const terms = useAppSelector((state) => state.languages.terms);

	return (
		<div className='Chart'>
			<h1 className='ChartTitle'>{terms[selectedUnits as keyof typeof terms].title}</h1>
			<Bar
				data={{
					labels: statistic.map((day) => day.date),
					datasets: [
						{
							label: terms[selectedUnits as keyof typeof terms].title,
							backgroundColor: '#f87979',
							data: statistic.map(
								(day) => day.increase[selectedUnits as keyof typeof day.increase]
							),
						},
					],
				}}
			/>
		</div>
	);
};

export default Chart;
