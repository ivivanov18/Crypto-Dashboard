import React from 'react';
import './App.css';
import Settings from '../components/Settings';
import AppLayout from '../components/AppLayout';
import AppBar from '../components/AppBar';
import { AppProvider } from '../components/AppProvider';

function App() {
	return (
		<AppLayout>
			<AppProvider>
				<AppBar />
				<Settings />
			</AppProvider>
		</AppLayout>
	);
}

export default App;
