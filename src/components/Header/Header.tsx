import React from 'react';
import LanguageChangingFlag from '../../features/languages/components/LanguageChangingFlag';

import './HeaderStyles.scss';
const Header = () => {
	return (
		<header className='Header'>
			<LanguageChangingFlag />
		</header>
	);
};

export default Header;
