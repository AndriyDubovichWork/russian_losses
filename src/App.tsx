import React from 'react';
import './App.scss';
import TodaysLossesGroup from './features/TodaysLosses/components/TodaysLossesGroup';
import Chart from './features/Chart/components/Chart';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Header from './components/Header/Header';
import Footer from './components/Fotter/Footer';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<main>
				<TodaysLossesGroup />
				<Chart />
			</main>
			<Footer />
		</Provider>
	);
}

export default App;
