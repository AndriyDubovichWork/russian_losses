import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import getTerms from '../api/getTerms';
import { setLanguage, setTerms } from '../Redux/languagesSlice';
import './LanguageChangingFlagStyle.scss';
const LanguageChangingFlag = () => {
	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.languages.selectedLanguage);

	useEffect(() => {
		(async () => {
			const terms = await getTerms(language);

			//set terms to Redux store

			dispatch(setTerms(terms));
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [language]);
	return (
		<div className='Triangle'>
			<img
				onClick={() => {
					if (language === 'en') {
						dispatch(setLanguage('ua'));
					} else {
						dispatch(setLanguage('en'));
					}
				}}
				className='FlagImage'
				src={
					language === 'ua'
						? 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png'
						: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png'
				}
				alt='flag'
			/>
		</div>
	);
};

export default LanguageChangingFlag;
