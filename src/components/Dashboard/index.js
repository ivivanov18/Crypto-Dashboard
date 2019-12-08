import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';

function Dashboard() {
	return (
		<Page name='Dashboard'>
			<h2>Dashboard</h2>
			<PriceGrid />
		</Page>
	);
}
export default Dashboard;
