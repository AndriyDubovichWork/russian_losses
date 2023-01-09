const ConvertDate = (date: Date) => {
	// difference between UTC and local time
	const offset = date.getTimezoneOffset();

	// generate date
	date = new Date(date.getTime() - offset * 60 * 1000);

	// return converted date in format yyyy-MM-dd
	return date.toISOString().split('T')[0];
};
export default ConvertDate;
