import React, { useEffect } from 'react';
import getInfoInSpecificDate from '../api/getInfoInSpecificDate';
import getLastFiveDayFormated from '../dates/getLastFiveDayFormated';
import SortLossesRespondeByDate from '../dates/SortLossesRespondByDate';
// import { CChart } from '@coreui/react-chartjs';
import { LossesDataWithOutIncreaseType } from './../../../types/losses';
import './style.scss';

// type ChartProps = {};

const Chart = () => {
	useEffect(() => {
		const res: LossesDataWithOutIncreaseType[] = [];
		const lastFiveDays = getLastFiveDayFormated();
		(async () => {
			await lastFiveDays.map(async (day) => {
				res.push(await getInfoInSpecificDate(day));
			});
		})();

		if (res.length > 0) {
			SortLossesRespondeByDate(res);
		}
		console.log(lastFiveDays);
	}, []);
	return (
		<div className='Chart'>
			<h1 className='ChartTitle'>Графік</h1>
			{/* <CChart
				type='bar'
				data={{
					labels: LossesNamesArray.map((losses) => losses.terms.title),
					datasets: [
						{
							label: 'GitHub Commits',
							backgroundColor: '#f87979',
							data: LossesNamesArray.map((losses) => losses.losses),
						},
					],
				}}
			/> */}
		</div>
	);
};

export default Chart;
