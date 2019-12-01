import React from 'react';
import './App.css';
import WelcomeMessage from '../components/WelcomeMessage';
import AppLayout from '../components/AppLayout';
import AppBar from '../components/AppBar';

function App() {
	return (
		<AppLayout>
			<AppBar />
			<WelcomeMessage />
		</AppLayout>
	);
}

export default App;
