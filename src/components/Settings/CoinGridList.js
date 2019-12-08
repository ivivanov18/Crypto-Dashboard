import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import CoinTile from '../Shared/CoinTile';

const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
	grid-gap: 15px;
`;

function getCoinsToDisplay(
	coinsList,
	topSection,
	favoriteCoinsList,
	nbCoinsToDisplay = 100
) {
	return topSection
		? favoriteCoinsList
		: Object.keys(coinsList).slice(0, nbCoinsToDisplay);
}

function CoinGridList({ topSection }) {
	return (
		<CoinGridStyled>
			<AppContext.Consumer>
				{({ coinList, favoriteCoinsList }) =>
					getCoinsToDisplay(
						coinList,
						topSection,
						favoriteCoinsList
					).map(coinKey => (
						<CoinTile coinKey={coinKey} topSection={topSection} />
					))
				}
			</AppContext.Consumer>
		</CoinGridStyled>
	);
}
export default CoinGridList;
