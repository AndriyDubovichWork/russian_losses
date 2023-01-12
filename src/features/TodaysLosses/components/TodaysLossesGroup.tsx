import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import getTodayLossesStatistic from '../api/getTodayLossesStatistic';

import { setLosses } from '../Redux/LossesSlice';
import TodayLossesElement from './TodayLossesElement';

import './style.scss';
import { setSelectedKeyOfLosses } from '../../Chart/Redux/ChartSlice';
import getArrayFromLossesObject from '../helpers/getArrayFromLossesObject';

const TodaysLosses = () => {
	// get values from redux
	const losses = useAppSelector((state) => state.losses.data);
	const terms = useAppSelector((state) => state.languages.terms);

	const dispatch = useAppDispatch();

	// async request for today losses
	useEffect(() => {
		(async () => {
			const res = await getTodayLossesStatistic();

			//set losses to Redux store

			dispatch(setLosses(res));
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// create array of losses from Object

	const TodayLossesArray = getArrayFromLossesObject(terms, losses);

	return (
		<>
			{losses ? (
				<>
					<div className='TodayLossesParent'>
						{TodayLossesArray.map(({ Todaylosses, keyOfLosses }) => {
							// set key of losses to Redux
							const setKeyOfLosses = () => {
								dispatch(setSelectedKeyOfLosses(keyOfLosses));
							};
							return (
								<TodayLossesElement
									key={Todaylosses.terms.title}
									increase={Todaylosses.increase}
									losses={Todaylosses.losses}
									term={Todaylosses.terms}
									keyOfLosses={keyOfLosses}
									setKeyOfLosses={setKeyOfLosses}
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
