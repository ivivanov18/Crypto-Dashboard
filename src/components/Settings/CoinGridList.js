import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import CoinTile from '../Shared/CoinTile';

const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
`;

function getCoinsToDisplay(coinsList, nbCoinsToDisplay = 100) {
	return Object.keys(coinsList).splice(0, nbCoinsToDisplay);
}

function CoinGridList() {
	return (
		<CoinGridStyled>
			<AppContext.Consumer>
				{({ coinList }) =>
					getCoinsToDisplay(coinList).map(coinKey => (
						<CoinTile coinKey={coinKey} />
					))
				}
			</AppContext.Consumer>
		</CoinGridStyled>
	);
}
export default CoinGridList;
