import React from 'react';
import './App.css';
import WelcomeMessage from '../components/WelcomeMessage';
import AppLayout from '../components/AppLayout';
import AppBar from '../components/AppBar';
import { AppProvider } from '../components/AppProvider';

function App() {
	return (
		<AppLayout>
			<AppProvider>
				<AppBar />
				<WelcomeMessage />
			</AppProvider>
		</AppLayout>
	);
}

export default App;
