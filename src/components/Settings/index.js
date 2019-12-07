import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGridList from './CoinGridList';

export default function() {
	return (
		<Page name='Settings'>
			<WelcomeMessage />
			<ConfirmButton />
			<CoinGridList />
		</Page>
	);
}
