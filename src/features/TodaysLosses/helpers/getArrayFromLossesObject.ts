import { LossesDataType, LossesNamesArrayType, TodayLossesType } from '../../../types/losses';
import { TermsType } from '../../../types/terms';

const getArrayFromLossesObject = (terms: TermsType, losses: LossesDataType) => {
	const TodayLossesArray: LossesNamesArrayType = [];

	// map through terms object each term key equal losses key
	Object.keys(terms).forEach(function (key, index) {
		// generate resoult array
		const res: TodayLossesType = {
			losses: losses.stats[key as keyof typeof losses.stats],
			increase: losses.increase[key as keyof typeof losses.increase],
			terms: terms[key as keyof typeof terms],
		};

		TodayLossesArray.push({ Todaylosses: res, keyOfLosses: key });
	});
	return TodayLossesArray;
};

export default getArrayFromLossesObject;
