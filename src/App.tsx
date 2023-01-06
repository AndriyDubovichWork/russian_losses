import React from 'react';
import './App.css';
import TodaysLossesGroup from './features/TodaysLosses/components/TodaysLossesGroup';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
	return (
		<Provider store={store}>
			<TodaysLossesGroup />
		</Provider>
	);
}

export default App;
