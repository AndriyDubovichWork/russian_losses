import React from 'react';
import './App.css';
import TodaysLosses from './features/TodaysLosses/components/TodaysLosses';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<TodaysLosses />
		</Provider>
	);
}

export default App;
