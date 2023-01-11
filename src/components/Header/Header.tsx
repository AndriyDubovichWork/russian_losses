import React from 'react';
import { setLanguage } from '../../features/TodaysLosses/Redux/LossesSlice';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import './HeaderStyles.scss';
const Header = () => {
	const dispatch = useAppDispatch();
	const ukrainian = true;
	return (
		<header className='Header'>
			<img
				className='Flag'
				src={
					ukrainian
						? 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png'
						: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png'
				}
				alt='flag'
			/>
		</header>
	);
};

export default Header;
