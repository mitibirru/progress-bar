import { useEffect, useState } from 'react';
import './App.css';
import Progressbar from './components/Progressbar';

function App() {
	const [value, setValue] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setValue(value => (value < 100 ? value + 1 : value));
		}, 100);
	}, []);

	return (
		<div className="app">
			<span>Progress Bar</span>
			<Progressbar showStatus value={value} />
		</div>
	);
}

export default App;
