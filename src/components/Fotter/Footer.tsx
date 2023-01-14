import React from 'react';
import './FooterStyle.scss';
const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className='Footer'>
			<p className='CopyRight'>Copyright © {year}. All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
