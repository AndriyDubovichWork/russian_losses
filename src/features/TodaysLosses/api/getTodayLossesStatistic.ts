import APIClient from '../../../api/DefaultAxiosSettings';

const getTodayStatistic = async () => {
	const res = await APIClient.get('statistics');
	return res.data.data;
};

export default getTodayStatistic;
