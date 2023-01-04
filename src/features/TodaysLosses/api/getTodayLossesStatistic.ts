import APIClient from '../../../api/DefaultAxiosSettings';

const getTodayStatistic = async () => {
	const res = await APIClient.get('statistics/latest');
	return res.data.data;
};

export default getTodayStatistic;
