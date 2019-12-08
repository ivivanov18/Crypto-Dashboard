import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGridList from './CoinGridList';
import Search from '../Shared/Search';

export default function() {
	return (
		<Page name='Settings'>
			<WelcomeMessage />
			<CoinGridList topSection />
			<ConfirmButton />
			<Search />
			<CoinGridList />
		</Page>
	);
}
