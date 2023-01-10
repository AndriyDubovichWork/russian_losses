import React from 'react';
import { TermType } from '../../../types/terms';
import './style.scss';
type TodayLossesElementProps = {
	term: TermType;
	increase: number;
	losses: number;
	setKeyOfLosses: () => void;
};

const TodayLossesElement = ({
	losses,
	increase,
	term,
	setKeyOfLosses,
}: TodayLossesElementProps) => {
	return (
		<>
			<div className='TodaylossesItem'>
				<input
					type={'radio'}
					name='lossesType'
					onClick={() => {
						setKeyOfLosses();
					}}
				/>
				<img className='TodaylossesImage' src={term.icon} alt='term.title' />
				<h1 className='TodaylossesTitle'>{term.title}</h1>
				<h2 className='TodaylossesCount'>
					{/* if increased today show */}
					{losses ? losses.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : 'loading'}{' '}
					{increase ? `(+ ${increase})` : ''}
				</h2>
			</div>
		</>
	);
};

export default TodayLossesElement;
