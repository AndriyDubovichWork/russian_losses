import React from 'react';
import { setLanguage } from '../../features/TodaysLosses/Redux/LossesSlice';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import './HeaderStyles.scss';
const Header = () => {
	const dispatch = useAppDispatch();

	return (
		<header className='Header'>
			<select
				className='LanguageSelector'
				onChange={(e) => {
					dispatch(setLanguage(e.target.value));
				}}
			>
				<option value='ua'>Українська</option>
				<option value='en'>English</option>
			</select>
		</header>
	);
};

export default Header;
