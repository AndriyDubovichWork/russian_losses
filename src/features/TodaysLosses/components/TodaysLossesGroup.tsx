import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import { LossesNamesArrayType, TodayLossesType } from '../../../types/losses';
import getTodayLossesStatistic from '../api/getTodayLossesStatistic';

import { setLosses, setTerms } from '../Redux/LossesSlice';
import TodayLossesElement from './TodayLossesElement';

import './style.scss';
import { setSelectedKeyOfLosses } from '../../Chart/Redux/Chart';
import getTerms from '../api/getTerms';

const TodaysLosses = () => {
	// get value from redux
	const losses = useAppSelector((state) => state.losses.data);
	const terms = useAppSelector((state) => state.losses.terms);
	const Selectedlanguage = useAppSelector((state) => state.languages.selectedLanguage);

	const dispatch = useAppDispatch();

	// async request for today losses
	useEffect(() => {
		(async () => {
			const res = await getTodayLossesStatistic();
			const terms = await getTerms(Selectedlanguage);

			//set losses to Redux store

			dispatch(setLosses(res));
			dispatch(setTerms(terms));
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const terms = await getTerms(Selectedlanguage);

			//set losses to Redux store

			dispatch(setTerms(terms));
		})();
	}, [Selectedlanguage]);

	const LossesNamesArray: LossesNamesArrayType = [];

	// map through terms object each term key equal losses key
	Object.keys(terms).forEach(function (key, index) {
		// generate resoult array
		const res: TodayLossesType = {
			losses: losses.stats[key as keyof typeof losses.stats],
			increase: losses.increase[key as keyof typeof losses.increase],
			terms: terms[key as keyof typeof terms],
		};

		LossesNamesArray.push({ Todaylosses: res, keyOfLosses: key });
	});
	return (
		<>
			{losses ? (
				<>
					<div className='TodayLossesParent'>
						{LossesNamesArray.map(({ Todaylosses, keyOfLosses }) => {
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
									setKeyOfLosses={setKeyOfLosses}
									Selectedlanguage={Selectedlanguage}
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
