import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import { TodayLossesType } from '../../../types/losses';
import getTodayLossesStatistic from '../api/getTodayLossesStatistic';

import { setLosses } from '../Redux/LossesSlice';
import TodayLossesElement from './TodayLossesElement';

import './style.scss';

const TodaysLosses = () => {
	// get value from redux
	const losses = useAppSelector((state) => state.losses.data);
	const terms = useAppSelector((state) => state.losses.terms);

	const dispatch = useAppDispatch();

	// async request for today losses
	useEffect(() => {
		(async () => {
			const res = await getTodayLossesStatistic();

			//set losses to Redux store

			dispatch(setLosses(res));
		})();
	}, []);
	const LossesNamesArray: TodayLossesType[] = [];

	// map through terms object each term key equal losses key
	Object.keys(terms).forEach(function (key, index) {
		// generate resoult array
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
					<div className='TodayLossesParent'>
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
					</div>
				</>
			) : (
				'loading'
			)}
		</>
	);
};

export default TodaysLosses;
