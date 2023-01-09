import { LossesDataWithOutIncreaseType } from '../../../types/losses';

const SortLossesRespondByDate = (LossesArray: LossesDataWithOutIncreaseType[]) => {
	const res = LossesArray.map((Day) => {
		console.log('day', Day);
		return Day.date;
	});
	console.log(LossesArray);
	console.log(res);
};
export default SortLossesRespondByDate;
