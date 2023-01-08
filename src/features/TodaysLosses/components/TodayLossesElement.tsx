import React from 'react';
import { TermType } from '../../../types/terms';
import './style.scss';
type TodayLossesElementProps = {
	term: TermType;
	increase: number;
	losses: number;
};

const TodayLossesElement = ({ losses, increase, term }: TodayLossesElementProps) => {
	return (
		<>
			<div className='TodaylossesItem'>
				<img className='TodaylossesImage' src={term.icon} alt='term.title' />
				<h1 className='TodaylossesTitle'>{term.title}</h1>
				<h2 className='TodaylossesCount'>
					{/* if increased today show */}
					{losses} {increase ? `(+ ${increase})` : ''}
				</h2>
			</div>
		</>
	);
};

export default TodayLossesElement;
