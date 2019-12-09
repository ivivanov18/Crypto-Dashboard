import React from 'react';
import styled from 'styled-components';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import PriceChart from './PriceChart';

const ChartGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-gap: 15px;
	margin-top: 20px;
`;

function Dashboard() {
	return (
		<Page name='Dashboard'>
			<h2>Dashboard</h2>
			<PriceGrid />
			<ChartGrid>
				<CoinSpotlight />
				<PriceChart></PriceChart>
			</ChartGrid>
		</Page>
	);
}
export default Dashboard;
