import React, { useEffect, useState } from 'react';
import getTodayStatistic from './api/getTodayStatistic';
import './App.css';

function App() {
	const [records, setRecords] = useState([]);
	useEffect(() => {
		(async () => {
			const res = await getTodayStatistic();

			setRecords(res.records);
		})();
	}, []);

	return (
		<>
			{records
				? records.map((record: any, index) => {
						return <p key={record.date}>{record.date}</p>;
				  })
				: 'loading'}
		</>
	);
}

export default App;
