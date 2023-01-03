import axios from 'axios';

const APIClient = axios.create({
	baseURL: 'https://russianwarship.rip/api/v1/',
});

export default APIClient;
