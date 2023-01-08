import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import { TodayLossesType } from '../../../types/losses';
import getTodayLossesStatistic from '../api/getTodayLossesStatistic';

import { setLosses } from '../Redux/LossesSlice';
import TodayLossesElement from './TodayLossesElement';

const TodaysLosses = () => {
	const losses = useAppSelector((state) => state.losses.data);
	const terms = useAppSelector((state) => state.losses.terms);
	const dispatch = useAppDispatch();

	useEffect(() => {
		(async () => {
			const res = await getTodayLossesStatistic();

			dispatch(setLosses(res));
		})();
	}, []);
	const LossesNamesArray: TodayLossesType[] = [];

	Object.keys(terms).forEach(function (key, index) {
		const res: TodayLossesType = {
			losses: losses.stats[key as keyof typeof losses.stats],
			increase: losses.increase[key as keyof typeof losses.increase],
			terms: terms[key as keyof typeof terms],
		};

		LossesNamesArray.push(res);
	});
	return (
		<>
			{losses ? (
				<>
					{LossesNamesArray.map((TodayLosses) => {
						return (
							<TodayLossesElement
								key={TodayLosses.terms.title}
								increase={TodayLosses.increase}
								losses={TodayLosses.losses}
								term={TodayLosses.terms}
							/>
						);
					})}
				</>
			) : (
				'loading'
			)}
		</>
	);
};

export default TodaysLosses;
