import APIClient from '../../../api/DefaultAxiosSettings';

const getInfoInSpecificDate = async (date: string) => {
	const res = await APIClient.get(`/statistics/${date}`);
	return res.data.data;
};

export default getInfoInSpecificDate;
