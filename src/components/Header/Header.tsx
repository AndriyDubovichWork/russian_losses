import React from 'react';
import { setLanguage } from '../../features/languages/Redux/languagesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import './HeaderStyles.scss';
const Header = () => {
	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.languages.selectedLanguage);

	return (
		<header className='Header'>
			<img
				onClick={() => {
					if (language === 'en') {
						dispatch(setLanguage('ua'));
					} else {
						dispatch(setLanguage('en'));
					}
				}}
				className='Flag'
				src={
					language === 'ua'
						? 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png'
						: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png'
				}
				alt='flag'
			/>
		</header>
	);
};

export default Header;
