import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import getTodayLossesStatistic from '../api/getTodayLossesStatistic';

import { setLosses } from '../Redux/LossesSlice';
import TodayLossesElement from './TodayLossesElement';
const TodaysLosses = () => {
	const losses = useAppSelector((state) => state.losses.data);
	const dispatch = useAppDispatch();
	useEffect(() => {
		(async () => {
			const res = await getTodayLossesStatistic();

			dispatch(setLosses(res));
		})();
	}, []);

	return <>{losses ? <TodayLossesElement losses={losses} /> : 'loading'}</>;
};

export default TodaysLosses;
