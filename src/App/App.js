import React from 'react';
import './App.css';
import Settings from '../components/Settings';
import AppLayout from '../components/AppLayout';
import AppBar from '../components/AppBar';
import { AppProvider } from '../components/AppProvider';
import Content from '../components/Shared/Content';
import Dashboard from '../components/Dashboard';

function App() {
	return (
		<AppLayout>
			<AppProvider>
				<AppBar />
				<Content>
					<Dashboard />
					<Settings />
				</Content>
			</AppProvider>
		</AppLayout>
	);
}

export default App;
