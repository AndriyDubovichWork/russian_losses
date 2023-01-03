import axios from 'axios';

const APIClient = axios.create({
	baseURL: 'https://russianwarship.rip/api/v1/',
});

const getTodayStatistic = async () => {
	const res = await APIClient.get('statistics');
	return res.data.data;
};

export default getTodayStatistic;
