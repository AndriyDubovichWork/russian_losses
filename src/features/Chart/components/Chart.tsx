import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import getLastNDaysInfo from '../api/getLastNDaysInfo';
import { setLastDaysInfo } from '../Redux/LastDaysStatisticsSlice';

import { CChart } from '@coreui/react-chartjs';
import './style.scss';

// type ChartProps = {};

const Chart = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		(async () => {
			// get last 40 days statistic
			const res = await getLastNDaysInfo(40);
			// get last days statistic
			dispatch(setLastDaysInfo(res));
		})();
	}, []);
	// get last days statistic from Redux
	const statistic = useAppSelector((state) => state.LastDaysStatistics.statistic);

	console.log(statistic);

	return (
		<div className='Chart'>
			<h1 className='ChartTitle'>Графік</h1>
			<CChart
				type='bar'
				data={{
					labels: statistic.map((day) => day.date),
					datasets: [
						{
							label: 'GitHub Commits',
							backgroundColor: '#f87979',
							data: statistic.map((day) => day.day),
						},
					],
				}}
			/>
		</div>
	);
};

export default Chart;
