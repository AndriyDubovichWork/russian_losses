import React, { useEffect, useState } from 'react';
import getTodayLossesStatistic from '../api/getTodayLossesStatistic';
import { useSelector, useDispatch } from 'react-redux';
import { setLosses } from './../Redux/LossesSlice';
const TodaysLosses = () => {
	const losses = useSelector((state: any) => state.losses.value);
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			const res = await getTodayLossesStatistic();

			dispatch(setLosses(res.date));
		})();
	}, []);

	return <>{losses ? losses : 'loading'}</>;
};

export default TodaysLosses;
