import React from 'react';
import { LossesDataType } from '../../../types/losses';

type TodayLossesElementProps = {
	losses: LossesDataType;
};

const TodayLossesElement = ({ losses }: TodayLossesElementProps) => {
	return <div>{losses.stats.aa_warfare_systems}</div>;
};

export default TodayLossesElement;
