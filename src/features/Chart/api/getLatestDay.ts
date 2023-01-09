import APIClient from '../../../api/DefaultAxiosSettings';

const getLatestDay = async () => {
	const res = await APIClient.get(`/statistics/latest`);
	return res.data.data.day;
};
export default getLatestDay;
