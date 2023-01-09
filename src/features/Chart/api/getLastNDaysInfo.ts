import APIClient from '../../../api/DefaultAxiosSettings';
import getLatestDay from './getLatestDay';

const getLastNDaysInfo = async (DaysToGet: number) => {
	const DaysInWar = await getLatestDay();
	const res = await APIClient.get(
		`/statistics/?offset=${DaysInWar - DaysToGet - 2}&limit=${DaysToGet}`
	);
	return res.data.data.records;
};

export default getLastNDaysInfo;
