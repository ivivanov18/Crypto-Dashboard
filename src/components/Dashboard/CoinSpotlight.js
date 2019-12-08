import React from 'react';
import styled from 'styled-components';
import CoinImage from '../Shared/CoinImage';
import { AppContext } from '../AppProvider';
import { Tile } from '../Shared/Tile';

const SpotlightName = styled.h2`
	text-align: center;
`;

function CoinSpotlight({ name }) {
	return (
		<AppContext.Consumer>
			{({ currentFavorite, coinList }) => (
				<Tile>
					<SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
					<CoinImage spotLight coin={coinList[currentFavorite]} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
}
export default CoinSpotlight;
