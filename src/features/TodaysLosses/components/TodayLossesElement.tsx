import React from 'react';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import { TermType } from '../../../types/terms';
import './style.scss';
type TodayLossesElementProps = {
	term: TermType;
	increase: number;
	losses: number;
	keyOfLosses: string;
	setKeyOfLosses: () => void;
};

const TodayLossesElement = ({
	losses,
	increase,
	term,
	keyOfLosses,
	setKeyOfLosses,
}: TodayLossesElementProps) => {
	const SelectedStatisticForChart = useAppSelector((state) => state.LastDaysStatistics.selected);

	return (
		<>
			<div className='TodaylossesItem'>
				{/* infantry losses default checked */}
				<div className='RadioButton'>
					<input
						// if selected current show it selected
						defaultChecked={keyOfLosses === SelectedStatisticForChart}
						type={'radio'}
						id={term.title}
						name='lossesType'
						onClick={() => {
							setKeyOfLosses();
						}}
					/>
				</div>

				<img className='TodaylossesImage' src={term.icon} alt='term.title' />
				<h1 className='TodaylossesTitle'>{term.title}</h1>
				<h2 className='TodaylossesCount'>
					{/* if number bigger than 1000 show extra space like so (1 000) */}
					{losses ? losses.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : 'loading'}{' '}
					{/* if increased today show it */}
					{increase ? `(+ ${increase})` : ''}
				</h2>
			</div>
		</>
	);
};

export default TodayLossesElement;
