import React from 'react';
import './App.css';
import TodaysLossesGroup from './features/TodaysLosses/components/TodaysLossesGroup';
import Chart from './features/Chart/components/Chart';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
	return (
		<Provider store={store}>
			<TodaysLossesGroup />
			<Chart />
		</Provider>
	);
}

export default App;
