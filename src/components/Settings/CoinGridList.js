import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import CoinTile from '../Shared/CoinTile';

const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
`;

function getCoinsToDisplay(coinsList, topSection, nbCoinsToDisplay = 100) {
	return topSection
		? Object.keys(coinsList).slice(0, 10)
		: Object.keys(coinsList).slice(0, nbCoinsToDisplay);
}

function CoinGridList({ topSection }) {
	return (
		<CoinGridStyled>
			<AppContext.Consumer>
				{({ coinList }) =>
					getCoinsToDisplay(coinList, topSection).map(coinKey => (
						<CoinTile coinKey={coinKey} topSection={topSection} />
					))
				}
			</AppContext.Consumer>
		</CoinGridStyled>
	);
}
export default CoinGridList;
