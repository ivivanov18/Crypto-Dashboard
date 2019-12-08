import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import CoinTile from '../Shared/CoinTile';

const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
	grid-gap: 15px;
`;

function getLowerSection(filteredCoins, coinsList, nbCoinsToDisplay) {
	console.log({ filteredCoins });
	console.log({ nbCoinsToDisplay });
	return filteredCoins && Object.keys(filteredCoins)
		? Object.keys(filteredCoins)
		: Object.keys(coinsList).slice(0, nbCoinsToDisplay);
}

function getCoinsToDisplay(
	coinsList,
	topSection,
	favoriteCoinsList,
	filteredCoins,
	nbCoinsToDisplay = 100
) {
	return topSection
		? favoriteCoinsList
		: getLowerSection(filteredCoins, coinsList, nbCoinsToDisplay);
}

function CoinGridList({ topSection }) {
	return (
		<CoinGridStyled>
			<AppContext.Consumer>
				{({ coinList, favoriteCoinsList, filteredCoinsList }) =>
					getCoinsToDisplay(
						coinList,
						topSection,
						favoriteCoinsList,
						filteredCoinsList
					).map(coinKey => (
						<CoinTile coinKey={coinKey} topSection={topSection} />
					))
				}
			</AppContext.Consumer>
		</CoinGridStyled>
	);
}
export default CoinGridList;
