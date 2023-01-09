import ConvertDate from './ConvertDate';

const getLastFiveDayFormated = () => {
	// generate array of 5 elements
	const dates = [...Array(5)].map((_, i) => {
		//generate date today
		const date = new Date();

		// convert date to number
		date.setDate(date.getDate() - i);

		// firmate date to yyyy-mm-dd
		return ConvertDate(date);
	});

	// return array of dates
	return dates;
};
export default getLastFiveDayFormated;
