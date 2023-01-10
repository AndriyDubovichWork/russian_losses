import React from 'react';
import { TermType } from '../../../types/terms';
import './style.scss';
type TodayLossesElementProps = {
	term: TermType;
	increase: number;
	losses: number;
	Selectedlanguage: 'ua' | 'en';
	setKeyOfLosses: () => void;
};

const TodayLossesElement = ({
	losses,
	increase,
	term,
	Selectedlanguage,
	setKeyOfLosses,
}: TodayLossesElementProps) => {
	return (
		<>
			<div className='TodaylossesItem'>
				{/* infantry losses default checked */}
				<div className='RadioButton'>
					<input
						defaultChecked={term.title === 'Особовий склад' || term.title === 'Personnel units'}
						type={'radio'}
						id={term.title}
						name='lossesType'
						onClick={() => {
							setKeyOfLosses();
						}}
					/>

					<label id={term.title}> {Selectedlanguage === 'ua' ? 'графік' : 'chart'} </label>
				</div>

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
