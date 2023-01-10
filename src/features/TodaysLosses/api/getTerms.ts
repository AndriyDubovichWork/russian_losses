import APIClient from '../../../api/DefaultAxiosSettings';

const getTerms = async (language: 'ua' | 'en') => {
	const res = await APIClient.get(`terms/${language}`);
	return res.data.data;
};

export default getTerms;
